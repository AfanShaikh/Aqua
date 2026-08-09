import "./Cart.css";

import { FaCartShopping, FaXmark } from "react-icons/fa6";

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
    0,
  );

  return (
    <div
      className="cart-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-title"
      onClick={onClose}
    >
      <div
        className="cart-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="cart-close"
          aria-label="Close cart"
          onClick={onClose}
        >
          <FaXmark />
        </button>

        <div className="cart-body">
          <div className="cart-header">
            <h2 id="cart-title">Your Cart</h2>
          </div>

          {cart.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-cart-icon">
                <FaCartShopping />
              </div>

              <h3>Your cart is empty</h3>

              <p>
                Add your favorite aquarium products to your cart and come back
                when you're ready to checkout.
              </p>

              <button
                type="button"
                className="btn btn-primary"
                onClick={onClose}
              >
                Continue Shopping
              </button>
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
                  <span>${total.toFixed(2)}</span>
                </h3>

                <button
                  type="button"
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