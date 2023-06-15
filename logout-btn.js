const Check = localStorage.getItem("LoggedIn");
console.log(Check);

if (Check == "Yes") {
  document.getElementById("login-btn").innerHTML = "Log Out";
} else {
  document.getElementById("login-btn").innerHTML = "Log In";
}
const value_btn = document.getElementById("login-btn").value;

function change() {
  localStorage.setItem("LoggedIn", "No");
}
