"use strict";
const btn = document.querySelector(".burger-menu");
const nav = document.querySelector(".nav-list");
btn.addEventListener("click", function () {
  btn.classList.toggle("active");
  nav.classList.toggle("active");
});

document.querySelectorAll(".nav-list").forEach((list) =>
  list.addEventListener("click", function () {
    btn.classList.remove("active");
    nav.classList.remove("active");
  })
);
