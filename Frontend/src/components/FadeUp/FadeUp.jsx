import "./FadeUp.css";

import {
  cloneElement,
  useEffect,
  useRef,
} from "react";

function FadeUp({ children }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return cloneElement(children, {
    ref: elementRef,
    className: `${children.props.className || ""} fade-up`.trim(),
  });
}

export default FadeUp;