import "./Product.css";

import { FaStar } from "react-icons/fa";

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <img
        src={product.img}
        alt={product.name}
        loading="lazy"
      />

      <div className="product-info">
        <h3>{product.name}</h3>

        <div className="stars">
          {[...Array(product.rating)].map((_, index) => (
            <FaStar key={index} />
          ))}
        </div>

        <div className="price">
          ${product.price.toFixed(2)}
        </div>

        <button
          className="btn btn-primary add-to-cart"
          data-id={product.id}
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;