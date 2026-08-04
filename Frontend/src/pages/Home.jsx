import { useEffect, useState } from "react";

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

function Home() {
  // ==========================
  // Video Modal State
  // ==========================
  const [showVideoModal, setShowVideoModal] =
    useState(false);

  // ==========================
  // Gallery Lightbox State
  // ==========================
  const [showLightbox, setShowLightbox] =
    useState(false);

  const [selectedImage, setSelectedImage] =
    useState("");

  // ==========================
  // Blog Modal State
  // ==========================
  const [showBlogModal, setShowBlogModal] =
    useState(false);

  const [selectedBlog, setSelectedBlog] =
    useState(null);

  // ==========================
  // Toast State
  // ==========================
  const [showToast, setShowToast] =
    useState(false);

  const [toastMessage, setToastMessage] =
    useState("");

  // ==========================
  // Cart State
  // ==========================
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem(
      "aqualife-cart"
    );

    return savedCart
      ? JSON.parse(savedCart)
      : [];
  });

  const [showCart, setShowCart] =
    useState(false);

  // ==========================
  // Checkout State
  // ==========================
  const [showCheckout, setShowCheckout] =
    useState(false);

  // ==========================
  // Auth Modal State
  // ==========================
  const [showAuth, setShowAuth] =
    useState(false);

  // ==========================
  // Save Cart To LocalStorage
  // ==========================
  useEffect(() => {
    localStorage.setItem(
      "aqualife-cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  // ==========================
  // Toast Function
  // ==========================
  function displayToast(message) {
    setToastMessage(message);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  }

  // ==========================
  // Add To Cart
  // ==========================
  function addToCart(product) {
    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );

      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }

    displayToast(`${product.name} added to cart`);
  }

  // ==========================
  // Increase Quantity
  // ==========================
  function increaseQuantity(id) {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );

    setCart(updatedCart);
  }

  // ==========================
  // Decrease Quantity
  // ==========================
  function decreaseQuantity(id) {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
  }

  // ==========================
  // Remove From Cart
  // ==========================
  function removeFromCart(id) {
    const updatedCart = cart.filter(
      (item) => item.id !== id
    );

    setCart(updatedCart);

    displayToast("Product removed");
  }

  // ==========================
  // Open Checkout
  // ==========================
  function handleCheckout() {
    setShowCheckout(true);
  }

  // ==========================
  // Place Order
  // ==========================
  function placeOrder() {
    displayToast("Order placed successfully!");

    setCart([]);
    setShowCheckout(false);
    setShowCart(false);

    localStorage.removeItem(
      "aqualife-cart"
    );
  }

  // ==========================
  // Cart Total
  // ==========================
  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar
        cartCount={cart.length}
        onOpenCart={() => setShowCart(true)}
        onOpenAuth={() => setShowAuth(true)}
      />

      <Hero />

      <Categories />

      <Products
        onAddToCart={addToCart}
      />

      <CountdownOffer />

      <VideoPromo
        onPlay={() =>
          setShowVideoModal(true)
        }
      />

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

      <Newsletter />

      <Footer />

      <BackToTop />

      {/* Cart Modal */}
      <CartModal
        show={showCart}
        cart={cart}
        onClose={() => setShowCart(false)}
        onIncrease={increaseQuantity}
        onDecrease={decreaseQuantity}
        onRemoveItem={removeFromCart}
        onCheckout={handleCheckout}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        show={showCheckout}
        cart={cart}
        total={total}
        onClose={() =>
          setShowCheckout(false)
        }
        onPlaceOrder={placeOrder}
      />

      <AuthModal
        show={showAuth}
        onClose={() =>
            setShowAuth(false)
        }
      />

      {/* Toast */}
      <Toast
        show={showToast}
        message={toastMessage}
      />

      {/* Video Modal */}
      <VideoModal
        show={showVideoModal}
        onClose={() =>
          setShowVideoModal(false)
        }
      />

      {/* Gallery Lightbox */}
      <GalleryLightbox
        show={showLightbox}
        image={selectedImage}
        onClose={() =>
          setShowLightbox(false)
        }
      />

      {/* Blog Modal */}
      <BlogModal
        show={showBlogModal}
        blog={selectedBlog}
        onClose={() =>
          setShowBlogModal(false)
        }
      />
    </>
  );
}

export default Home;