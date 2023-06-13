const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");
var elements = document.getElementsByClassName("header__item");

const toggle1 = document.getElementById("toggleDark-1");

var image2 = document.getElementById("footer-logo");
toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
  if (this.classList.toggle("bi-brightness-high-fill")) {
    body.style.background = "white";
    body.style.color = "black";
    body.style.transition = "2s";
    image2.src = "svg/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg";
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.color = "black";
    }
  } else {
    body.style.background = "black";
    body.style.color = "white";
    body.style.transition = "2s";
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
const Name = localStorage.getItem("Name");
const userName = localStorage.getItem("username");
const Balance = localStorage.getItem("Balance");
const AvlbBalance = localStorage.getItem("AvlbBalance");
const Date = localStorage.getItem("Date");
const Description = localStorage.getItem("Description");
const References = localStorage.getItem("Reference");
const Type = localStorage.getItem("Type");
const Transaction = localStorage.getItem("Transactions");

document.getElementById("nameUser").innerHTML = Name;
document.getElementById("Balance-1").innerHTML = "£" + Balance;
document.getElementById("Balance-2").innerHTML = "£" + AvlbBalance;

Transaction.forEach((element) => {
  if (Type == pending) {
  }
  if (Type == completed) {
  }
});
