import "./Checkout.css";

import { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";

import useAuth from "../../hooks/useAuth";

function CheckoutModal({ show, cart, total, onClose, onPlaceOrder }) {
  const { user } = useAuth();

  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (show) {
      setPhone("");
      setAddress("");
      setError("");
    }
  }, [show]);

  if (!show) {
    return null;
  }

  const userName =
    user?.name ||
    [user?.firstName, user?.lastName].filter(Boolean).join(" ") ||
    "";

  const userEmail = user?.email || "";

  function handleSubmit(event) {
    event.preventDefault();

    setError("");

    if (!cart.length) {
      setError("Your cart is empty.");
      return;
    }

    const trimmedPhone = phone.trim();
    const trimmedAddress = address.trim();

    if (!trimmedPhone) {
      setError("Please enter your phone number.");
      return;
    }

    const phonePattern = /^[0-9+\-\s()]{10,15}$/;

    if (!phonePattern.test(trimmedPhone)) {
      setError("Please enter a valid phone number.");
      return;
    }

    if (!trimmedAddress) {
      setError("Please enter your shipping address.");
      return;
    }

    if (trimmedAddress.length < 10) {
      setError("Please enter a complete shipping address.");
      return;
    }

    const order = {
      id: Date.now(),

      userId: user?.id || null,

      customer: {
        name: userName,
        email: userEmail,
        phone: trimmedPhone,
        address: trimmedAddress,
      },

      items: cart,

      total,

      status: "PLACED",

      createdAt: new Date().toISOString(),
    };

    onPlaceOrder(order);
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content checkout-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="checkout-close"
          onClick={onClose}
          aria-label="Close checkout"
        >
          <FaXmark />
        </button>

        <div className="checkout-header">
          <h2>Checkout</h2>

          <p>Complete your shipping details to place your order.</p>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <h3>Your cart is empty</h3>

            <p>Add some products before proceeding to checkout.</p>

            <button type="button" className="btn btn-primary" onClick={onClose}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="checkout-layout">
            <form className="checkout-form" onSubmit={handleSubmit}>
              <h3>Shipping Information</h3>

              {error && (
                <p className="checkout-error" role="alert">
                  {error}
                </p>
              )}

              <div className="checkout-field">
                <label htmlFor="checkout-name">Full Name</label>

                <input
                  id="checkout-name"
                  type="text"
                  value={userName}
                  readOnly
                />
              </div>

              <div className="checkout-field">
                <label htmlFor="checkout-email">Email Address</label>

                <input
                  id="checkout-email"
                  type="email"
                  value={userEmail}
                  readOnly
                />
              </div>

              <div className="checkout-field">
                <label htmlFor="checkout-phone">Phone Number</label>

                <input
                  id="checkout-phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  autoComplete="tel"
                  required
                />
              </div>

              <div className="checkout-field">
                <label htmlFor="checkout-address">Shipping Address</label>

                <textarea
                  id="checkout-address"
                  placeholder="Enter your complete shipping address"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                  autoComplete="street-address"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary checkout-submit">
                Place Order
              </button>
            </form>

            <div className="checkout-summary">
              <h3>Order Summary</h3>

              <div className="checkout-items">
                {cart.map((item) => (
                  <div key={item.id} className="checkout-item">
                    <div className="checkout-item-info">
                      <span className="checkout-item-name">{item.name}</span>

                      <span className="checkout-item-quantity">
                        × {item.quantity}
                      </span>
                    </div>

                    <span className="checkout-item-price">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="checkout-total">
                <span>Total</span>

                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckoutModal;
