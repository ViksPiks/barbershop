const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".header__nav");
const body = document.body;

hamburger.addEventListener("click", () => {
  body.classList.toggle("disable-scroll");
  hamburger.classList.toggle("hamburger--open");
  menu.classList.toggle("header__nav--open");
});

const loginBtn = document.getElementById("login-btn");
const modalLogin = document.getElementById("modal-login");

loginBtn.addEventListener("click", () => {
  modalLogin.showModal();
});

modalLogin.addEventListener("click", (event) => {
  if (event.target !== modalLogin) return;

  const rect = event.target.getBoundingClientRect();

  if (
    rect.left > event.clientX ||
    rect.right < event.clientX ||
    rect.top > event.clientY ||
    rect.bottom < event.clientY
  ) {
    modalLogin.close();
  }
});
