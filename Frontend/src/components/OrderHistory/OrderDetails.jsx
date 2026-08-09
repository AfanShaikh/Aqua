import "./OrderDetails.css";

import {
  FaBoxOpen,
  FaCalendarDays,
  FaLocationDot,
  FaPhone,
  FaXmark,
} from "react-icons/fa6";

function OrderDetails({ order, onClose }) {
  if (!order) {
    return null;
  }

  const orderDate = new Date(order.createdAt);

  const formattedDate = orderDate.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const formattedTime = orderDate.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const orderStatus = order.status || "PLACED";

  const items = Array.isArray(order.items) ? order.items : [];

  return (
    <div className="order-details-overlay" onClick={onClose}>
      <div
        className="order-details-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="order-details-close"
          onClick={onClose}
          aria-label="Close order details"
        >
          <FaXmark />
        </button>

        <div className="order-details-header">
          <div className="order-details-title">
            <div className="order-details-title-icon">
              <FaBoxOpen />
            </div>

            <div>
              <h2>Order Details</h2>

              <p>Order #{order.id}</p>
            </div>
          </div>

          <span
            className={`order-details-status order-status-${orderStatus.toLowerCase()}`}
          >
            {orderStatus}
          </span>
        </div>

        <div className="order-details-info">
          <div className="order-details-info-item">
            <FaCalendarDays />

            <div>
              <span>Order Date</span>

              <strong>{formattedDate}</strong>

              <small>{formattedTime}</small>
            </div>
          </div>

          <div className="order-details-info-item">
            <FaPhone />

            <div>
              <span>Phone</span>

              <strong>
                {order.customer?.phone || "Not provided"}
              </strong>
            </div>
          </div>

          <div className="order-details-info-item">
            <FaLocationDot />

            <div>
              <span>Shipping Address</span>

              <strong>
                {order.customer?.address || "Not provided"}
              </strong>
            </div>
          </div>
        </div>

        <div className="order-details-section">
          <h3>Products</h3>

          {items.length === 0 ? (
            <p className="order-details-empty">
              No products found for this order.
            </p>
          ) : (
            <div className="order-details-items">
              {items.map((item) => (
                <div
                  className="order-details-item"
                  key={item.id}
                >
                  <div className="order-details-product">
                    {item.img && (
                      <img
                        src={item.img}
                        alt={item.name}
                      />
                    )}

                    <div>
                      <h4>{item.name}</h4>

                      <span>
                        Quantity: {item.quantity}
                      </span>
                    </div>
                  </div>

                  <strong>
                    $
                    {(
                      Number(item.price || 0) *
                      Number(item.quantity || 0)
                    ).toFixed(2)}
                  </strong>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="order-details-total">
          <span>Total</span>

          <strong>
            ${Number(order.total || 0).toFixed(2)}
          </strong>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;