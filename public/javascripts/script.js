// DOM Objects
const html = document.querySelector("html");
const body = document.querySelector("body");
const nav = document.querySelector(".nav");
const popup = document.querySelector(".popup-form");
const btn_form = document.querySelector(".btn-form");
const popup__close = document.querySelector(".popup__close");
const empty = document.querySelector(".empty");
// Popup open and blur
const popup_func = function () {
  popup.classList.toggle("display-none");
  html.classList.toggle("blur");
};
if (empty) body.style.overflowY = "hidden";
// Making hover effect
const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
console.log("rabotaet");
// passing "argument" into handler
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));
btn_form.addEventListener("click", function (e) {
  e.preventDefault();
  popup_func();
});
// Closing Popup on Escape
window.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape" && html.classList.contains("blur")) {
    evt.preventDefault();
    popup_func();
  }
});
// click on close
popup__close.addEventListener("click", (e) => {
  e.preventDefault();
  popup_func();
});
// click outside the box
document.addEventListener("click", (e) => {
  // Check if the filter list parent element exist
  const isClosest = e.target.closest(".popup-form");
  console.log(e.target.tagName !== "BUTTON");
  console.log(e.target.tagName);
  console.log(isClosest);
  console.log(!popup.classList.contains("display-none"));

  // If `isClosest` equals falsy & popup has the class `show`
  // then hide the popup
  if (
    !isClosest &&
    !popup.classList.contains("display-none") &&
    e.target.tagName !== "BUTTON"
  ) {
    popup_func();
  }
});
