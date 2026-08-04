import "./Cart.css";

import CartItem from "./CartItem";

function CartModal({
  show,
  cart,
  onClose,
  onIncrease,
  onDecrease,
  onRemoveItem,
  onCheckout,
}) {
  if (!show) {
    return null;
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      className="modal"
      onClick={onClose}
    >
      <div
        className="modal-content cart-modal"
        onClick={(event) =>
          event.stopPropagation()
        }
      >
        <button
          className="close-modal"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="cart-body">
          <div className="cart-header">
            <h2>Your Cart</h2>
          </div>

          {cart.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is empty.</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cart.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onIncrease={onIncrease}
                    onDecrease={onDecrease}
                    onRemoveItem={onRemoveItem}
                  />
                ))}
              </div>

              <div className="cart-footer">
                <h3>
                  Total:
                  <span>
                    ${total.toFixed(2)}
                  </span>
                </h3>

                <button
                  className="btn btn-primary"
                  onClick={() => {
                    onClose();
                    onCheckout();
                  }}
                >
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartModal;