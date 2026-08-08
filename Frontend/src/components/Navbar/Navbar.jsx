import "./Navbar.css";

import { useState } from "react";

import {
  FaFishFins,
  FaCartShopping,
  FaHeart,
  FaBars,
  FaXmark,
  FaMagnifyingGlass,
} from "react-icons/fa6";

import useAuth from "../../hooks/useAuth";
import UserMenu from "../Auth/UserMenu";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

function Navbar({
  cartCount = 0,
  wishlistCount = 0,
  searchQuery = "",
  onSearchChange,
  onOpenCart,
  onOpenWishlist,
  onOpenAuth,
  onLogout,
}) {
  const { user, isAuthenticated } = useAuth();

  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  function closeMenu() {
    setShowMenu(false);
  }

  function toggleMenu() {
    setShowMenu((current) => !current);
    setShowSearch(false);
  }

  function toggleSearch() {
    setShowSearch((current) => !current);
  }

  function handleSearchChange(event) {
    if (onSearchChange) {
      onSearchChange(event.target.value);
    }
  }

  function clearSearch() {
    if (onSearchChange) {
      onSearchChange("");
    }
  }

  function handleCartClick() {
    closeMenu();
    setShowSearch(false);

    if (onOpenCart) {
      onOpenCart();
    }
  }

  function handleWishlistClick() {
    closeMenu();
    setShowSearch(false);

    if (onOpenWishlist) {
      onOpenWishlist();
    }
  }

  function handleAuthClick() {
    closeMenu();
    setShowSearch(false);

    if (onOpenAuth) {
      onOpenAuth();
    }
  }

  function handleLogout(message) {
    closeMenu();
    setShowSearch(false);

    if (onLogout) {
      onLogout(message);
    }
  }

  return (
    <header id="navbar">
      <div className="nav-container">
        <a
          href="#hero"
          className="logo"
          aria-label="AquaLife home"
          onClick={closeMenu}
        >
          <FaFishFins />
          <span>AquaLife</span>
        </a>

        <nav
          className={`nav-links ${showMenu ? "active" : ""}`}
          aria-label="Main navigation"
        >
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
          {showSearch && (
            <div className="nav-search">
              <FaMagnifyingGlass />

              <input
                type="search"
                value={searchQuery}
                placeholder="Search products..."
                aria-label="Search products"
                onChange={handleSearchChange}
              />

              {searchQuery && (
                <button
                  type="button"
                  className="search-clear"
                  aria-label="Clear search"
                  onClick={clearSearch}
                >
                  <FaXmark />
                </button>
              )}
            </div>
          )}

          <button
            type="button"
            className={`nav-action search-nav ${showSearch ? "active" : ""}`}
            aria-label={showSearch ? "Close search" : "Open search"}
            aria-expanded={showSearch}
            onClick={toggleSearch}
          >
            {showSearch ? <FaXmark /> : <FaMagnifyingGlass />}
          </button>

          <ThemeToggle />

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
            aria-expanded={showMenu}
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
