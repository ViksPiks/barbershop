const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".header__nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger--open");
  menu.classList.toggle("header__nav--open");
});
