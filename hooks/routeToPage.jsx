export const handleNavigation = (name) => {
  const targetElement = document.getElementById(name);
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
};