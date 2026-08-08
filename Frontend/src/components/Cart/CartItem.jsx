import "./Cart.css";

import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

function CartItem({ item, onIncrease, onDecrease, onRemoveItem }) {
  return (
    <div className="cart-item">
      <div className="cart-left">
        <img src={item.img} alt={item.name} className="cart-item-image" />

        <div className="cart-item-details">
          <h4>{item.name}</h4>

          <p className="cart-item-price">${item.price.toFixed(2)}</p>

          <div className="cart-quantity">
            <button
              type="button"
              className="quantity-btn"
              onClick={() => onDecrease(item.id)}
              aria-label={`Decrease quantity of ${item.name}`}
            >
              <FaMinus />
            </button>

            <span>{item.quantity}</span>

            <button
              type="button"
              className="quantity-btn"
              onClick={() => onIncrease(item.id)}
              aria-label={`Increase quantity of ${item.name}`}
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="remove-btn"
        onClick={() => onRemoveItem(item.id)}
        aria-label={`Remove ${item.name} from cart`}
      >
        <FaTrash />
      </button>
    </div>
  );
}

export default CartItem;
