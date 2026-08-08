import "./Product.css";

import { FaStar, FaHeart } from "react-icons/fa";

function ProductCard({
  product,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
}) {
  function handleWishlistClick() {
    if (onToggleWishlist) {
      onToggleWishlist(product);
    }
  }

  function handleAddToCart() {
    if (onAddToCart) {
      onAddToCart(product);
    }
  }

  return (
    <article className="product-card">
      <div className="product-image-wrapper">
        <img
          src={product.img}
          alt={product.name}
          loading="lazy"
        />

        <button
          type="button"
          className={`wishlist-btn ${
            isWishlisted ? "active" : ""
          }`}
          onClick={handleWishlistClick}
          aria-label={
            isWishlisted
              ? `Remove ${product.name} from wishlist`
              : `Add ${product.name} to wishlist`
          }
          aria-pressed={isWishlisted}
        >
          <FaHeart />
        </button>
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>

        <div
          className="stars"
          aria-label={`${product.rating} out of 5 stars`}
        >
          {[...Array(product.rating)].map((_, index) => (
            <FaStar key={index} aria-hidden="true" />
          ))}
        </div>

        <div className="price">
          ${product.price.toFixed(2)}
        </div>

        <button
          type="button"
          className="btn btn-primary add-to-cart"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}

export default ProductCard;