import {
  FaTrash,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

function CartItem({
  item,
  onIncrease,
  onDecrease,
  onRemoveItem,
}) {
  return (
    <div className="cart-item">
      <img
        src={item.img}
        alt={item.name}
        className="cart-item-image"
      />

      <div className="cart-item-details">
        <h4>{item.name}</h4>

        <p className="cart-item-price">
          ${item.price.toFixed(2)}
        </p>

        <div className="cart-quantity">
          <button
            className="quantity-btn"
            onClick={() =>
              onDecrease(item.id)
            }
          >
            <FaMinus />
          </button>

          <span>{item.quantity}</span>

          <button
            className="quantity-btn"
            onClick={() =>
              onIncrease(item.id)
            }
          >
            <FaPlus />
          </button>
        </div>
      </div>

      <button
        className="remove-btn"
        onClick={() =>
          onRemoveItem(item.id)
        }
      >
        <FaTrash />
      </button>
    </div>
  );
}

export default CartItem;