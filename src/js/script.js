"use strict";
document.querySelector(".header__burger").onclick = () => {
  document.querySelector(".header__burger").classList.toggle("active");
  document.querySelector(".nav-menu").classList.toggle("show");
};
