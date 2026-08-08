import "./Checkout.css";

import { useEffect, useState } from "react";

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

  function handleSubmit(event) {
    event.preventDefault();

    setError("");

    if (!phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    if (!address.trim()) {
      setError("Please enter your shipping address.");
      return;
    }

    const order = {
      id: Date.now(),
      userId: user?.id || null,
      customer: {
        name: user?.name || "",
        email: user?.email || "",
        phone: phone.trim(),
        address: address.trim(),
      },
      items: cart,
      total,
      status: "PLACED",
      createdAt: new Date().toISOString(),
    };

    onPlaceOrder(order);
  }

  return (
    <div className="modal" onClick={onClose}>
      <div
        className="modal-content checkout-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="close-modal"
          onClick={onClose}
          aria-label="Close checkout"
        >
          &times;
        </button>

        <h2>Checkout</h2>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <div className="checkout-layout">
            <form className="checkout-form" onSubmit={handleSubmit}>
              <h3>Shipping Information</h3>

              {error && <p className="checkout-error">{error}</p>}

              <input
                type="text"
                placeholder="Full Name"
                value={user?.name || ""}
                readOnly
              />

              <input
                type="email"
                placeholder="Email Address"
                value={user?.email || ""}
                readOnly
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                required
              />

              <textarea
                placeholder="Shipping Address"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                required
              />

              <button type="submit" className="btn btn-primary">
                Place Order
              </button>
            </form>

            <div className="checkout-summary">
              <h3>Order Summary</h3>

              {cart.map((item) => (
                <p key={item.id} className="checkout-item">
                  <span>
                    {item.name} × {item.quantity}
                  </span>

                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </p>
              ))}

              <p className="total">
                <span>Total</span>

                <span>${total.toFixed(2)}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckoutModal;
