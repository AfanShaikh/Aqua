import "./OrderHistory.css";

import { useEffect, useState } from "react";

import useAuth from "../../hooks/useAuth";
import OrderCard from "./OrderCard";
import OrderDetails from "./OrderDetails";

function OrderHistory({ show, onClose }) {
  const { user, isAuthenticated } = useAuth();

  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    if (!show) {
      setSelectedOrder(null);
      return;
    }

    if (!isAuthenticated || !user?.id) {
      setOrders([]);
      setSelectedOrder(null);
      return;
    }

    const savedOrders = localStorage.getItem("aqualife_orders");

    if (!savedOrders) {
      setOrders([]);
      return;
    }

    try {
      const parsedOrders = JSON.parse(savedOrders);

      if (!Array.isArray(parsedOrders)) {
        setOrders([]);
        return;
      }

      const userOrders = parsedOrders.filter(
        (order) => String(order.userId) === String(user.id),
      );

      setOrders([...userOrders].reverse());
    } catch (error) {
      console.error("Failed to load orders:", error);
      setOrders([]);
    }
  }, [show, isAuthenticated, user?.id]);

  function handleViewDetails(order) {
    setSelectedOrder(order);
  }

  function handleCloseDetails() {
    setSelectedOrder(null);
  }

  if (!show) {
    return null;
  }

  if (!isAuthenticated) {
    return (
      <div className="order-history-overlay" onClick={onClose}>
        <section
          className="order-history"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            className="order-history-close"
            onClick={onClose}
            aria-label="Close order history"
          >
            ×
          </button>

          <div className="order-history-header">
            <h2>Order History</h2>

            <p>Please login to view your orders.</p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="order-history-overlay" onClick={onClose}>
      <section
        className="order-history"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="order-history-close"
          onClick={onClose}
          aria-label="Close order history"
        >
          ×
        </button>

        <div className="order-history-header">
          <h2>Order History</h2>

          <p>View your previous orders and order details.</p>
        </div>

        {orders.length === 0 ? (
          <div className="order-history-empty">
            <h3>No Orders Yet</h3>

            <p>
              You haven't placed any orders yet. Start shopping to see your
              orders here.
            </p>
          </div>
        ) : (
          <div className="order-history-list">
            {orders.map((order) => (
              <OrderCard
                key={order.id}
                order={order}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        )}

        {selectedOrder && (
          <OrderDetails order={selectedOrder} onClose={handleCloseDetails} />
        )}
      </section>
    </div>
  );
}

export default OrderHistory;
