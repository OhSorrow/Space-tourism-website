const menuToggle = document.querySelector(".mobile-nav-toggle");
const mobileNav = document.querySelector(".primary-navigation");

menuToggle.addEventListener("click", () => {
  const visibility = mobileNav.dataset.visible;
  if (visibility === "false") {
    mobileNav.dataset.visible = "true";
    menuToggle.setAttribute("aria-expanded", "true");
  } else {
    mobileNav.dataset.visible = "false";
    menuToggle.setAttribute("aria-expanded", "false");
  }
});