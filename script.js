"use strict";

let toqlar = document.querySelectorAll(".box10");
let juftlar = document.querySelectorAll(".box20");

let scroll1;
let scroll2;

window.addEventListener("scroll", () => {
  for (let el of toqlar) {
    scroll1 = el.getBoundingClientRect();
    if (scroll1.top > 500) {
      // el.style.transform = "translate(-130%)";
      el.classList.add("box101");
    } else {
      el.classList.remove("box101");
    }
  }
  for (let el of juftlar) {
    scroll2 = el.getBoundingClientRect();
    if (scroll2.top > 500) {
      // el.style.transform = "translate(-130%)";
      el.classList.add("box201");
    } else {
      el.classList.remove("box201");
    }
  }
});
