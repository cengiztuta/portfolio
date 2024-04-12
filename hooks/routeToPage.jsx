import React from "react";

const routeToPage = (percentage) => {
  const windowHeight = window.innerHeight;
  const bodyHeight = document.body.clientHeight;
  const scrollTo = (bodyHeight - windowHeight) * (percentage / 100);
  window.scrollTo({
    top: scrollTo,
    behavior: "smooth",
  });
};

export default routeToPage;
