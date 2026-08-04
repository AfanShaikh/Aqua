import { useState } from "react";
import {
  FaFishFins,
  FaCartShopping,
  FaBars,
  FaXmark,
} from "react-icons/fa6";

function Navbar({
  cartCount = 0,
  onOpenCart,
  onOpenAuth,
}) {
  const [showMenu, setShowMenu] = useState(false);

  function closeMenu() {
    setShowMenu(false);
  }

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <header id="navbar">
      <div className="nav-container">
        <a
          href="#hero"
          className="logo"
          onClick={closeMenu}
        >
          <FaFishFins /> AquaLife
        </a>

        <nav
          className={`nav-links ${
            showMenu ? "active" : ""
          }`}
        >
          <a
            href="#hero"
            onClick={closeMenu}
          >
            Home
          </a>

          <a
            href="#top-selling"
            onClick={closeMenu}
          >
            Shop
          </a>

          <a
            href="#categories"
            onClick={closeMenu}
          >
            Categories
          </a>

          <a
            href="#blog"
            onClick={closeMenu}
          >
            Blog
          </a>

          <a
            href="#footer"
            onClick={closeMenu}
          >
            Contact
          </a>

          <button
            className="btn-auth"
            onClick={() => {
              closeMenu();

              if (onOpenAuth) {
                onOpenAuth();
              }
            }}
          >
            Login / Sign up
          </button>
        </nav>

        <div className="nav-icons">
          <div
            className="cart-icon"
            aria-label="Cart"
            onClick={() => {
              if (onOpenCart) {
                onOpenCart();
              }
            }}
          >
            <FaCartShopping />

            <span id="cart-count">
              {cartCount}
            </span>
          </div>

          <button
            className="hamburger"
            aria-label="Menu"
            onClick={toggleMenu}
          >
            {showMenu ? (
              <FaXmark />
            ) : (
              <FaBars />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;