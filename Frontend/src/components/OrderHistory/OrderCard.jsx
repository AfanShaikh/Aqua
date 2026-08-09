import "./OrderCard.css";

import { FaBoxOpen, FaCalendarAlt, FaChevronRight } from "react-icons/fa";

function OrderCard({ order, onViewDetails }) {
  const items = Array.isArray(order?.items) ? order.items : [];

  const itemCount = items.reduce(
    (total, item) => total + Number(item.quantity || 0),
    0,
  );

  const orderDate = new Date(order.createdAt);

  const formattedDate = orderDate.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const formattedTime = orderDate.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const orderStatus = order.status || "PLACED";

  return (
    <article className="order-card">
      <div className="order-card-header">
        <div className="order-card-title">
          <div className="order-card-icon">
            <FaBoxOpen />
          </div>

          <div>
            <span>Order ID</span>

            <h3>#{order.id}</h3>
          </div>
        </div>

        <span
          className={`order-status order-status-${orderStatus.toLowerCase()}`}
        >
          {orderStatus}
        </span>
      </div>

      <div className="order-card-info">
        <div className="order-info-item">
          <FaCalendarAlt />

          <div>
            <span>Date</span>
            <strong>{formattedDate}</strong>
          </div>
        </div>

        <div className="order-info-item">
          <div>
            <span>Items</span>

            <strong>
              {itemCount} {itemCount === 1 ? "Item" : "Items"}
            </strong>
          </div>
        </div>

        <div className="order-info-item order-total">
          <div>
            <span>Total</span>

            <strong>${Number(order.total || 0).toFixed(2)}</strong>
          </div>
        </div>
      </div>

      <div className="order-card-footer">
        <span>Placed at {formattedTime}</span>

        <button
          type="button"
          className="order-details-btn"
          onClick={() => onViewDetails?.(order)}
        >
          View Details
          <FaChevronRight />
        </button>
      </div>
    </article>
  );
}

export default OrderCard;
