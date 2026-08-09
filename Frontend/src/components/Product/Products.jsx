import "./Product.css";
import { useEffect, useMemo, useState } from "react";

import products from "../../data/products";
import ProductCard from "./ProductCard";
import FadeUp from "../FadeUp/FadeUp";

function Products({
  onAddToCart,
  wishlist,
  onToggleWishlist,
  searchQuery = "",
}) {
  const [filter, setFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase();

    return products.filter((product) => {
      const matchesFilter =
        filter === "all" || product.category === filter;

      if (!normalizedSearch) {
        return matchesFilter;
      }

      const searchableText = [
        product.name,
        product.category,
        product.description,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return (
        matchesFilter &&
        searchableText.includes(normalizedSearch)
      );
    });
  }, [filter, searchQuery]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  const hasMoreProducts = visibleCount < filteredProducts.length;
  const canLoadLess = visibleCount > 8;

  useEffect(() => {
    setVisibleCount(8);
  }, [filter, searchQuery]);

  function handleLoadMore() {
    setVisibleCount((currentCount) => currentCount + 4);
  }

  function handleLoadLess() {
    setVisibleCount(8);
  }

  return (
    <section className="products-section">
      <FadeUp>
        <div className="products-header">
          <h2>Top Selling Products</h2>

          <p className="products-subtitle">
            Discover our most popular aquarium fish, tanks, and aquatic
            essentials.
          </p>
        </div>
      </FadeUp>

      <FadeUp>
        <div className="filter-container">
          <button
            type="button"
            className={`filter-btn ${
              filter === "all" ? "active" : ""
            }`}
            onClick={() => setFilter("all")}
          >
            All
          </button>

          <button
            type="button"
            className={`filter-btn ${
              filter === "fish" ? "active" : ""
            }`}
            onClick={() => setFilter("fish")}
          >
            Fish
          </button>

          <button
            type="button"
            className={`filter-btn ${
              filter === "tanks" ? "active" : ""
            }`}
            onClick={() => setFilter("tanks")}
          >
            Tanks &amp; Decor
          </button>
        </div>
      </FadeUp>

      <FadeUp>
        {visibleProducts.length > 0 ? (
          <div className="product-grid">
            {visibleProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                isWishlisted={wishlist.some(
                  (item) => item.id === product.id
                )}
                onToggleWishlist={onToggleWishlist}
              />
            ))}
          </div>
        ) : (
          <div className="products-empty">
            <h3>No products found</h3>

            <p>
              Try searching for a different product or category.
            </p>
          </div>
        )}
      </FadeUp>

      {(hasMoreProducts || canLoadLess) && (
        <FadeUp>
          <div className="load-more-container">
            {hasMoreProducts && (
              <button
                type="button"
                className="btn btn-outline load-more-btn"
                onClick={handleLoadMore}
              >
                Load More
              </button>
            )}

            {canLoadLess && (
              <button
                type="button"
                className="btn btn-outline load-more-btn"
                onClick={handleLoadLess}
              >
                Load Less
              </button>
            )}
          </div>
        </FadeUp>
      )}
    </section>
  );
}

export default Products;
