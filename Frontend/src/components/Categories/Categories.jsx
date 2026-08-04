import "./Categories.css";

import FadeUp from "../FadeUp/FadeUp";

function Categories() {
  return (
    <section
      id="categories"
      className="container section-padding"
    >
      <FadeUp>
        <h2 className="section-title">
          Categories
        </h2>
      </FadeUp>

      <div className="category-grid">
        <FadeUp>
          <div className="category-card">
            <img
              src="https://cdn.britannica.com/29/121829-050-911F77EC/freshwater-aquarium.jpg"
              alt="Aquariums"
              loading="lazy"
            />

            <h3>Aquariums</h3>

            <a
              href="#top-selling"
              className="btn btn-outline"
            >
              Explore
            </a>
          </div>
        </FadeUp>

        <FadeUp>
          <div className="category-card">
            <img
              src="https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=500&auto=format&fit=crop"
              alt="Aquarium Fish"
              loading="lazy"
            />

            <h3>Aquarium Fish</h3>

            <a
              href="#top-selling"
              className="btn btn-outline"
            >
              Explore
            </a>
          </div>
        </FadeUp>

        <FadeUp>
          <div className="category-card">
            <img
              src="https://m.media-amazon.com/images/I/51L3vha5VyL._SY300_SX300_QL70_FMwebp_.jpg"
              alt="Decor & Care"
              loading="lazy"
            />

            <h3>Decor &amp; Care</h3>

            <a
              href="#top-selling"
              className="btn btn-outline"
            >
              Explore
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

export default Categories;