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
    <div className="modal-overlay">
      <div
        className="modal-content cart-modal"
        onClick={(event) => event.stopPropagation()}
      >
        {/* ==================================================
            CLOSE BUTTON
        ================================================== */}

        <button
          type="button"
          className="cart-close"
          aria-label="Close cart"
          onClick={onClose}
        >
          <FaXmark />
        </button>

        {/* ==================================================
            CART BODY
        ================================================== */}

        <div className="cart-body">
          {/* ==================================================
              HEADER
          ================================================== */}

          <div className="cart-header">
            <h2>Your Cart</h2>

          </div>

          {/* ==================================================
              EMPTY CART
          ================================================== */}

          {cart.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-cart-icon">
                <FaCartShopping />
              </div>

              <h3>Your cart is empty</h3>

              <p>
                Add your favorite aquarium products to your cart
                and come back when you're ready to checkout.
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
              {/* ==================================================
                  CART ITEMS
              ================================================== */}

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

              {/* ==================================================
                  CART FOOTER
              ================================================== */}

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