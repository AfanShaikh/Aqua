import { useEffect, useRef, cloneElement } from "react";

function FadeUp({ children }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return cloneElement(children, {
    ref: elementRef,
    className: `${children.props.className || ""} fade-up`.trim(),
  });
}

export default FadeUp;