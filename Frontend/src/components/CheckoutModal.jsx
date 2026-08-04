function CheckoutModal({
  show,
  cart,
  total,
  onClose,
  onPlaceOrder,
}) {
  if (!show) {
    return null;
  }

  return (
    <div
      className="modal"
      onClick={onClose}
    >
      <div
        className="modal-content checkout-modal"
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

        <h2>Checkout</h2>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <>
            <div className="checkout-summary">
              <h3>Order Summary</h3>

              {cart.map((item) => (
                <p
                  key={item.id}
                  className="checkout-item"
                >
                  <span>
                    {item.name} × {item.quantity}
                  </span>

                  <span>
                    $
                    {(
                      item.price *
                      item.quantity
                    ).toFixed(2)}
                  </span>
                </p>
              ))}

              <p className="total">
                <span>Total</span>

                <span>
                  ${total.toFixed(2)}
                </span>
              </p>
            </div>

            <form
              className="checkout-form"
              onSubmit={(event) => {
                event.preventDefault();
                onPlaceOrder();
              }}
            >
              <input
                type="text"
                placeholder="Full Name"
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                required
              />

              <input
                type="tel"
                placeholder="Phone Number"
                required
              />

              <textarea
                placeholder="Shipping Address"
                required
              />

              <button
                type="submit"
                className="btn btn-primary"
              >
                Place Order
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default CheckoutModal;