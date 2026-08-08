import "./Product.css";

import { useState } from "react";

import products from "../../data/products";
import ProductCard from "./ProductCard";
import FadeUp from "../FadeUp/FadeUp";

function Products({ onAddToCart, wishlist, onToggleWishlist }) {
  const [filter, setFilter] = useState("all");

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.category === filter);

  return (
    <section id="top-selling" className="products-section">
      {/* ======================================================
          SECTION HEADER
      ====================================================== */}

      <FadeUp>
        <div className="products-header">
          <h2 className="products-title">Top Selling Products</h2>

          <p className="products-subtitle">
            Discover our most popular aquarium fish, tanks, and aquatic
            essentials.
          </p>
        </div>
      </FadeUp>

      {/* ======================================================
          FILTER
      ====================================================== */}

      <FadeUp>
        <div className="filter-container">
          <button
            type="button"
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>

          <button
            type="button"
            className={`filter-btn ${filter === "fish" ? "active" : ""}`}
            onClick={() => setFilter("fish")}
          >
            Fish
          </button>

          <button
            type="button"
            className={`filter-btn ${filter === "tanks" ? "active" : ""}`}
            onClick={() => setFilter("tanks")}
          >
            Tanks &amp; Decor
          </button>
        </div>
      </FadeUp>

      {/* ======================================================
          PRODUCT GRID
      ====================================================== */}

      <FadeUp>
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              isWishlisted={wishlist.some((item) => item.id === product.id)}
              onToggleWishlist={onToggleWishlist}
            />
          ))}
        </div>
      </FadeUp>
    </section>
  );
}

export default Products;