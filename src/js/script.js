"use strict";

//*=== Mobile-Nav Clicked toggle ===

const nav = document.querySelector(".navigation");
const mobBtn = document.querySelector(".navigation__hamburger");

mobBtn.addEventListener("click", () => {
  nav.classList.toggle("navigation--active");
});
