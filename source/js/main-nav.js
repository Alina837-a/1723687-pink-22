var mainNav = document.querySelector(".main-nav");
var mainNavToggle = document.querySelector(".main-nav__toggle");
var pageHeader  = document.querySelector(".page-header");
mainNav.classList.remove("main-nav--nojs"),
mainNavToggle.addEventListener("click", function() {
  if (mainNav.classList.contains("main-nav--closed")) {
    mainNav.classList.remove("main-nav--closed");
    mainNav.classList.add("main-nav--opened");
    pageHeader.classList.add("page-header--opened");
  } else {
    mainNav.classList.add("main-nav--closed");
    mainNav.classList.remove("main-nav--opened");
    pageHeader.classList.remove("page-header--opened");
  }
});
