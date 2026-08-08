import "./Product.css";

import { FaStar, FaHeart } from "react-icons/fa";

function ProductCard({ product, onAddToCart, isWishlisted, onToggleWishlist }) {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={product.img} alt={product.name} />

        <button
          type="button"
          className={`wishlist-btn ${isWishlisted ? "active" : ""}`}
          onClick={() => onToggleWishlist(product)}
          aria-label={
            isWishlisted
              ? `Remove ${product.name} from wishlist`
              : `Add ${product.name} to wishlist`
          }
        >
          <FaHeart />
        </button>
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>

        <div className="stars">
          {[...Array(product.rating)].map((_, index) => (
            <FaStar key={index} />
          ))}
        </div>

        <div className="price">${product.price.toFixed(2)}</div>

        <button
          type="button"
          className="btn btn-primary add-to-cart"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
