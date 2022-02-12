// Open burger menu

const burgerButton = document.querySelector(".header-burger");
const burgerAside = document.querySelector(".burger-aside");

burgerButton.addEventListener("click", (event) => {
  burgerAside.classList.toggle("menu-animation");
  burgerAside.classList.toggle("show-button");
});
