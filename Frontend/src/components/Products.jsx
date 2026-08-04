import { useState } from "react";

import products from "../data/products";
import ProductCard from "./ProductCard";
import FadeUp from "./FadeUp";

function Products({ onAddToCart }) {
  const [filter, setFilter] = useState("all");

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter(
          (product) => product.category === filter
        );

  return (
    <section
      id="top-selling"
      className="container section-padding"
    >
      <FadeUp>
        <h2 className="section-title">
          Top Selling Products
        </h2>
      </FadeUp>

      <FadeUp>
        <div className="filter-container">
          <button
            className={`filter-btn ${
              filter === "all" ? "active" : ""
            }`}
            data-filter="all"
            onClick={() => setFilter("all")}
          >
            All
          </button>

          <button
            className={`filter-btn ${
              filter === "fish" ? "active" : ""
            }`}
            data-filter="fish"
            onClick={() => setFilter("fish")}
          >
            Fish
          </button>

          <button
            className={`filter-btn ${
              filter === "tanks" ? "active" : ""
            }`}
            data-filter="tanks"
            onClick={() => setFilter("tanks")}
          >
            Tanks &amp; Decor
          </button>
        </div>
      </FadeUp>

      <FadeUp>
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </FadeUp>
    </section>
  );
}

export default Products;