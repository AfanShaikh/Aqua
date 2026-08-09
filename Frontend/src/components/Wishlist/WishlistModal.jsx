import "./Wishlist.css";

import {
  FaHeart,
  FaTrash,
  FaCartShopping,
  FaXmark,
} from "react-icons/fa6";

function WishlistModal({ show, wishlist, onClose, onRemove, onAddToCart }) {
  if (!show) {
    return null;
  }

  return (
    <div
      className="modal-overlay wishlist-overlay"
      role="presentation"
      onClick={onClose}
    >
      <div
        className="modal-content wishlist-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="wishlist-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="wishlist-close"
          onClick={onClose}
          aria-label="Close wishlist"
        >
          <FaXmark />
        </button>

        <div className="wishlist-header">
          <div className="wishlist-title-icon">
            <FaHeart />
          </div>

          <div>
            <h2 id="wishlist-title">My Wishlist</h2>

            <p>
              {wishlist.length === 0
                ? "Your wishlist is empty."
                : `${wishlist.length} ${
                    wishlist.length === 1 ? "product" : "products"
                  } saved`}
            </p>
          </div>
        </div>

        {wishlist.length === 0 ? (
          <div className="wishlist-empty">
            <div className="wishlist-empty-icon">
              <FaHeart />
            </div>

            <h3>Your wishlist is empty</h3>

            <p>
              Save your favorite aquarium products here and come back to them
              later.
            </p>

            <button
              type="button"
              className="wishlist-shop-btn"
              onClick={onClose}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="wishlist-list">
            {wishlist.map((product) => (
              <div className="wishlist-item" key={product.id}>
                <div className="wishlist-product-image">
                  <img src={product.img} alt={product.name} />
                </div>

                <div className="wishlist-product-info">
                  <h3>{product.name}</h3>

                  <span className="wishlist-category">
                    {product.category === "fish" ? "Fish" : "Tanks & Decor"}
                  </span>

                  <span className="wishlist-price">
                    ${product.price.toFixed(2)}
                  </span>
                </div>

                <div className="wishlist-actions">
                  <button
                    type="button"
                    className="wishlist-cart-btn"
                    onClick={() => onAddToCart(product)}
                  >
                    <FaCartShopping />

                    <span>Add to Cart</span>
                  </button>

                  <button
                    type="button"
                    className="wishlist-remove-btn"
                    onClick={() => onRemove(product.id)}
                    aria-label={`Remove ${product.name} from wishlist`}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default WishlistModal;