import { useEffect, useRef } from "react";
const scrollToHideHeader = () => {
  const ref = useRef();
  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll === 0) {
        ref.current.style.top = "0";
      } else if (currentScroll > lastScroll) {
        ref.current.style.top = "-100px";
      } else {
        ref.current.style.top = "0";
      }
      lastScroll = currentScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return ref;
};

export default scrollToHideHeader;
