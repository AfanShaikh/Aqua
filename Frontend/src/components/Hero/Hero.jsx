import FadeUp from "../FadeUp/FadeUp";

function Hero() {
  return (
    <section id="hero">
      <FadeUp>
        <div className="hero-content">
          <h1>
            Amazing <br />
            <span className="highlight">
              Aquarium Collection
            </span>
          </h1>

          <p>
            Discover premium quality aquatic life,
            accessories, and tanks designed for
            enthusiasts.
          </p>

          <a
            href="#top-selling"
            className="btn btn-primary"
          >
            Shop Now
          </a>
        </div>
      </FadeUp>
    </section>
  );
}

export default Hero;