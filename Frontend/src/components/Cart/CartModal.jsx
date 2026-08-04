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
    (sum, item) => {
      return sum + item.price * item.quantity;
    },
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
        <span
          className="close-modal"
          onClick={onClose}
        >
          &times;
        </span>

        <h2>Your Cart</h2>

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

            <hr />

            <div className="cart-footer">
              <h3>
                Total: ${total.toFixed(2)}
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
  );
}

export default CartModal;