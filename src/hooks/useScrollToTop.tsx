import { useState, useEffect } from "react";
import { FiChevronUp } from "react-icons/fi";

function useScrollToTop() {
  const [showScroll, setShowScroll] = useState<boolean>(false);

  useEffect(() => {
    const scrollToTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", scrollToTop);
    return function cleanup() {
      window.removeEventListener("scroll", scrollToTop);
    };
  }, [showScroll]);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <FiChevronUp
        className="scrollToTop"
        onClick={backToTop}
        style={{
          height: 40,
          width: 40,
          padding: 7,
          borderRadius: 50,
          right: 50,
          bottom: 50,
          display: showScroll ? "flex" : "none",
          position: "fixed",
          cursor: "pointer",
          backgroundColor: "white",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      />
    </>
  );
}

export default useScrollToTop;
