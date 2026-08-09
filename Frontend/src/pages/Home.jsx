import { useEffect, useState } from "react";

import useAuth from "../hooks/useAuth";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";
import AuthModal from "../components/Auth/AuthModal";
import Products from "../components/Product/Products";
import CountdownOffer from "../components/Countdown/CountdownOffer";
import VideoPromo from "../components/Video/VideoPromo";
import VideoModal from "../components/Video/VideoModal";
import Gallery from "../components/Gallery/Gallery";
import GalleryLightbox from "../components/Gallery/GalleryLightbox";
import Blog from "../components/Blog/Blog";
import BlogModal from "../components/Blog/BlogModal";
import Newsletter from "../components/Newsletter/Newsletter";
import BackToTop from "../components/BackToTop/BackToTop";
import Footer from "../components/Footer/Footer";
import Toast from "../components/Toast/Toast";
import CartModal from "../components/Cart/CartModal";
import CheckoutModal from "../components/Checkout/CheckoutModal";
import WishlistModal from "../components/Wishlist/WishlistModal";

function Home() {
  const { isAuthenticated } = useAuth();

  const [searchQuery, setSearchQuery] = useState("");

  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const [showBlogModal, setShowBlogModal] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);

  const [authForCheckout, setAuthForCheckout] = useState(false);

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("aqualife-cart");

    if (!savedCart) {
      return [];
    }

    try {
      const parsedCart = JSON.parse(savedCart);

      return Array.isArray(parsedCart) ? parsedCart : [];
    } catch (error) {
      console.error("Failed to load cart:", error);

      return [];
    }
  });

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("aqualife-wishlist");

    if (!savedWishlist) {
      return [];
    }

    try {
      const parsedWishlist = JSON.parse(savedWishlist);

      return Array.isArray(parsedWishlist) ? parsedWishlist : [];
    } catch (error) {
      console.error("Failed to load wishlist:", error);

      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("aqualife-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("aqualife-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  function displayToast(message) {
    if (!message) {
      return;
    }

    setToastMessage(message);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  }

  function addToCart(product) {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id,
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });

    displayToast(`${product.name} added to cart`);
  }

  function increaseQuantity(id) {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  }

  function decreaseQuantity(id) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function removeFromCart(id) {
    const product = cart.find((item) => item.id === id);

    setCart((currentCart) => currentCart.filter((item) => item.id !== id));

    if (product) {
      displayToast(`${product.name} removed from cart`);
    }
  }

  function toggleWishlist(product) {
    setWishlist((currentWishlist) => {
      const isWishlisted = currentWishlist.some(
        (item) => item.id === product.id,
      );

      if (isWishlisted) {
        displayToast(`${product.name} removed from wishlist`);

        return currentWishlist.filter((item) => item.id !== product.id);
      }

      displayToast(`${product.name} added to wishlist`);

      return [...currentWishlist, product];
    });
  }

  function removeFromWishlist(id) {
    const product = wishlist.find((item) => item.id === id);

    setWishlist((currentWishlist) =>
      currentWishlist.filter((item) => item.id !== id),
    );

    if (product) {
      displayToast(`${product.name} removed from wishlist`);
    }
  }

  function addWishlistItemToCart(product) {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id,
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });

    setWishlist((currentWishlist) =>
      currentWishlist.filter((item) => item.id !== product.id),
    );

    displayToast(`${product.name} added to cart and removed from wishlist`);
  }

  function handleCheckout() {
    if (!isAuthenticated) {
      setShowCart(false);
      setAuthForCheckout(true);
      setShowAuth(true);

      return;
    }

    setShowCart(false);
    setShowCheckout(true);
  }

  function handleAuthSuccess(message) {
    setShowAuth(false);

    displayToast(message || "Authentication successful");

    if (authForCheckout) {
      setShowCheckout(true);
      setAuthForCheckout(false);
    }
  }

  function handleOpenAuth() {
    setAuthForCheckout(false);
    setShowAuth(true);
  }

  function placeOrder(orderDetails) {
    const savedOrders = localStorage.getItem("aqualife_orders");

    let orders = [];

    if (savedOrders) {
      try {
        orders = JSON.parse(savedOrders);

        if (!Array.isArray(orders)) {
          orders = [];
        }
      } catch (error) {
        console.error("Failed to load orders:", error);

        orders = [];
      }
    }

    const updatedOrders = [...orders, orderDetails];

    localStorage.setItem("aqualife_orders", JSON.stringify(updatedOrders));

    setCart([]);
    setShowCheckout(false);
    setShowCart(false);

    localStorage.removeItem("aqualife-cart");

    displayToast("Order placed successfully!");
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Navbar
        cartCount={cart.length}
        wishlistCount={wishlist.length}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenCart={() => setShowCart(true)}
        onOpenWishlist={() => setShowWishlist(true)}
        onOpenAuth={handleOpenAuth}
        onLogout={displayToast}
      />

      <main>
        <Hero />

        <Categories />

        <Products
          searchQuery={searchQuery}
          onAddToCart={addToCart}
          wishlist={wishlist}
          onToggleWishlist={toggleWishlist}
        />

        <CountdownOffer />

        <VideoPromo onPlay={() => setShowVideoModal(true)} />

        <Gallery
          onImageClick={(image) => {
            setSelectedImage(image);
            setShowLightbox(true);
          }}
        />

        <Blog
          onReadMore={(blog) => {
            setSelectedBlog(blog);
            setShowBlogModal(true);
          }}
        />

        <Newsletter onToast={displayToast} />
      </main>

      <Footer />

      <BackToTop />

      <CartModal
        show={showCart}
        cart={cart}
        onClose={() => setShowCart(false)}
        onIncrease={increaseQuantity}
        onDecrease={decreaseQuantity}
        onRemoveItem={removeFromCart}
        onCheckout={handleCheckout}
      />

      <WishlistModal
        show={showWishlist}
        wishlist={wishlist}
        onClose={() => setShowWishlist(false)}
        onRemove={removeFromWishlist}
        onAddToCart={addWishlistItemToCart}
      />

      <CheckoutModal
        show={showCheckout}
        cart={cart}
        total={total}
        onClose={() => setShowCheckout(false)}
        onPlaceOrder={placeOrder}
      />

      <AuthModal
        show={showAuth}
        onClose={() => setShowAuth(false)}
        onToast={displayToast}
        onSuccess={handleAuthSuccess}
      />

      <Toast show={showToast} message={toastMessage} />

      <VideoModal
        show={showVideoModal}
        onClose={() => setShowVideoModal(false)}
      />

      <GalleryLightbox
        show={showLightbox}
        image={selectedImage}
        onClose={() => setShowLightbox(false)}
      />

      <BlogModal
        show={showBlogModal}
        blog={selectedBlog}
        onClose={() => setShowBlogModal(false)}
      />
    </>
  );
}

export default Home;
