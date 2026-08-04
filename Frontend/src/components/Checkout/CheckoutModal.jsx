import "./Checkout.css";

function CheckoutModal({ show, cart, total, onClose, onPlaceOrder }) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal" onClick={onClose}>
      <div
        className="modal-content checkout-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <span className="close-modal" onClick={onClose}>
          &times;
        </span>

        <div className="checkout-header">
          <h2>Checkout</h2>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <div className="checkout-content">
            {/* Left Side */}

            <div className="checkout-left">
              <h3>Shipping Information</h3>

              <form
                className="checkout-form"
                onSubmit={(event) => {
                  event.preventDefault();
                  onPlaceOrder();
                }}
              >
                <input type="text" placeholder="Full Name" required />

                <input type="email" placeholder="Email Address" required />

                <input type="tel" placeholder="Phone Number" required />

                <textarea placeholder="Shipping Address" required />

                <button type="submit" className="btn btn-primary">
                  Place Order
                </button>
              </form>
            </div>

            {/* Right Side */}

            <div className="checkout-right">
              <div className="checkout-summary">
                <h3>Order Summary</h3>

                {cart.map((item) => (
                  <div className="checkout-item" key={item.id}>
                    <span>
                      {item.name} × {item.quantity}
                    </span>

                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}

                <div className="total">
                  <span>Total</span>

                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckoutModal;
