import "./BackToTop.css";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

function BackToTop() {
  const [showButton, setShowButton] =
    useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      id="back-to-top"
      className={
        showButton ? "show" : ""
      }
      onClick={scrollToTop}
      aria-label="Back To Top"
    >
      <FaArrowUp />
    </button>
  );
}

export default BackToTop;