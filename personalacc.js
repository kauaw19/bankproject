const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");
var elements = document.getElementsByClassName("header__item");
const toggle1 = document.getElementById("toggleDark-1");

var image1 = document.getElementById("logo-app-showcase");
var image2 = document.getElementById("footer-logo");

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
  if (this.classList.toggle("bi-brightness-high-fill")) {
    body.style.background = "white";
    body.style.color = "black";
    body.style.transition = "2s";

    image1.src = "svg/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg";
    image2.src = "svg/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg";
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.color = "black";
    }
  } else {
    body.style.background = "black";
    body.style.color = "white";
    body.style.transition = "2s";
    image1.src = "svg/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg";
    image2.src = "svg/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg";
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.color = "white";
    }
  }
});

toggle1.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
  if (this.classList.toggle("bi-brightness-high-fill")) {
    body.style.background = "white";
    body.style.color = "black";
    body.style.transition = "2s";
    for (var i = 0; i < elements1.length; i++) {
      elements1[i].style.color = "black";
    }
  } else {
    body.style.background = "black";
    body.style.color = "white";
    body.style.transition = "2s";
    for (var i = 0; i < elements1.length; i++) {
      elements1[i].style.color = "white";
    }
  }
});

const CheckLog = localStorage.getItem("LoggedIn");
console.log(CheckLog);
if (CheckLog == "Yes") {
  document.getElementById("CheckPage").className = document
    .getElementById("CheckPage")
    .className.replace(/(?:^|\s)account-options--hide(?!\S)/g, "");
}
