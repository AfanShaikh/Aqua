import "./Navbar.css";

import { useState } from "react";

import {
  FaFishFins,
  FaCartShopping,
  FaHeart,
  FaBars,
  FaXmark,
} from "react-icons/fa6";

import useAuth from "../../hooks/useAuth";
import UserMenu from "../Auth/UserMenu";

function Navbar({
  cartCount = 0,
  wishlistCount = 0,
  onOpenCart,
  onOpenWishlist,
  onOpenAuth,
  onLogout,
}) {
  const { user, isAuthenticated } = useAuth();

  const [showMenu, setShowMenu] = useState(false);

  function closeMenu() {
    setShowMenu(false);
  }

  function toggleMenu() {
    setShowMenu((current) => !current);
  }

  function handleCartClick() {
    closeMenu();

    if (onOpenCart) {
      onOpenCart();
    }
  }

  function handleWishlistClick() {
    closeMenu();

    if (onOpenWishlist) {
      onOpenWishlist();
    }
  }

  function handleAuthClick() {
    closeMenu();

    if (onOpenAuth) {
      onOpenAuth();
    }
  }

  function handleLogout(message) {
    closeMenu();

    if (onLogout) {
      onLogout(message);
    }
  }

  return (
    <header id="navbar">
      <div className="nav-container">
        <a href="#hero" className="logo" onClick={closeMenu}>
          <FaFishFins />
          AquaLife
        </a>

        <nav className={`nav-links ${showMenu ? "active" : ""}`}>
          <a href="#hero" onClick={closeMenu}>
            Home
          </a>

          <a href="#top-selling" onClick={closeMenu}>
            Shop
          </a>

          <a href="#categories" onClick={closeMenu}>
            Categories
          </a>

          <a href="#blog" onClick={closeMenu}>
            Blog
          </a>

          <a href="#footer" onClick={closeMenu}>
            Contact
          </a>

          {isAuthenticated ? (
            <UserMenu user={user} onLogout={handleLogout} />
          ) : (
            <button
              type="button"
              className="btn-auth"
              onClick={handleAuthClick}
            >
              Login / Sign up
            </button>
          )}
        </nav>

        <div className="nav-icons">
          <button
            type="button"
            className="nav-action wishlist-nav"
            aria-label={`Wishlist with ${wishlistCount} ${
              wishlistCount === 1 ? "item" : "items"
            }`}
            onClick={handleWishlistClick}
          >
            <FaHeart />

            {wishlistCount > 0 && (
              <span className="nav-count">{wishlistCount}</span>
            )}
          </button>

          <button
            type="button"
            className="nav-action cart-icon"
            aria-label={`Cart with ${cartCount} ${
              cartCount === 1 ? "item" : "items"
            }`}
            onClick={handleCartClick}
          >
            <FaCartShopping />

            {cartCount > 0 && <span className="nav-count">{cartCount}</span>}
          </button>

          <button
            type="button"
            className="hamburger"
            aria-label={showMenu ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
          >
            {showMenu ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
