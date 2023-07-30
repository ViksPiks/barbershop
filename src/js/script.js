const menu = document.querySelector(".header__nav");

function toggleHamburger(hamburger) {
  hamburger.classList.toggle("hamburger--open");
  menu.classList.toggle("header__nav--open");
}
