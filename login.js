const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");
var elements = document.getElementsByClassName("header__item");
var elements1 = document.getElementsByClassName("menu__item");
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
// function validate() {
//   var log_btn = document.getElementById("login-click");
//   var input_box_id = document.getElementById("input-box-id").value;
//   var input_box_pass = document.getElementById("input-box-pass").value;
//   var test = document.getElementById("name-location").innerHTML;
//   var status = "true";
//   log_btn.addEventListener("click", function () {
//     if (input_box_id == "11" || input_box_pass == "11") {
//       location.replace("http://127.0.0.1:5502/bankproject/personalacc.html");
//       status = "true";
//     }
//     if (input_box_id == "" || input_box_pass == "") {
//       document.getElementById("name-location").innerHTML = "<p>Wrong</p>";
//       status = "false";
//     }
//     if ((status = "false")) {
//       return false;
//     }
//   });
// }

let loggedIn = false;
let loginForm = document.getElementById("loginForm");

const users = [
  {
    name: "John Doe",
    username: "johndoe",
    password: "password123",
    balance: 1000,
    availableBalance: 1000,
    transactions: [
      {
        date: "2023-06-01",
        description: "Deposit",
        reference: "ABC123",
        type: "completed",
        day: "Thursday",
        balance: "£1100",
        transaction: "143",
      },
      {
        date: "2023-06-03",
        description: "Withdrawal",
        reference: "DEF456",
        type: "completed",
        day: "Saturday",
        balance: "£1080",
        transaction: "145",
      },
      {
        date: "2023-06-06",
        description: "Purchase",
        reference: "GHI789",
        type: "pending",
        day: "Tuesday",
        balance: "£1000",
        transaction: "144",
      },
      // Additional transactions for John Doe
      {
        date: "2023-06-08",
        description: "Deposit",
        reference: "XYZ987",
        type: "completed",
        day: "Thursday",
        balance: "£1120",
        transaction: "146",
      },
      {
        date: "2023-06-10",
        description: "Purchase",
        reference: "QWE123",
        type: "completed",
        day: "Saturday",
        balance: "£1050",
        transaction: "147",
      },
      {
        date: "2023-06-12",
        description: "Withdrawal",
        reference: "ASD456",
        type: "completed",
        day: "Monday",
        balance: "£1000",
        transaction: "148",
      },
      // Add more transactions here...
      // ...
    ],
  },
  {
    name: "Jane Smith",
    username: "janesmith",
    password: "password123",
    balance: 5000,
    availableBalance: 5000,
    transactions: [
      {
        date: "2023-06-02",
        description: "Deposit",
        reference: "JKL012",
        type: "completed",
        day: "Friday",
        balance: "£5500",
        transaction: "2938",
      },
      {
        date: "2023-06-04",
        description: "Purchase",
        reference: "MNO345",
        type: "completed",
        day: "Sunday",
        balance: "£5300",
        transaction: "2939",
      },
      {
        date: "2023-06-07",
        description: "Withdrawal",
        reference: "PQR678",
        type: "pending",
        day: "Wednesday",
        balance: "£5000",
        transaction: "2340",
      },
      // Additional transactions for Jane Smith
      {
        date: "2023-06-09",
        description: "Withdrawal",
        reference: "STU012",
        type: "completed",
        day: "Friday",
        balance: "£4900",
        transaction: "2341",
      },
      {
        date: "2023-06-11",
        description: "Deposit",
        reference: "VWX345",
        type: "completed",
        day: "Sunday",
        balance: "£5000",
        transaction: "2342",
      },
      {
        date: "2023-06-13",
        description: "Purchase",
        reference: "YZA678",
        type: "completed",
        day: "Tuesday",
        balance: "£4800",
        transaction: "2343",
      },
      // Add more transactions here...
      // ...
    ],
  },
  {
    name: "Keven Cunha",
    username: "kcmg",
    password: "123",
    balance: 115000,
    availableBalance: 235000,
    transactions: [
      {
        date: "2023-06-02",
        description: "Deposit",
        reference: "JKL012",
        type: "completed",
        day: "Friday",
        balance: "£5500",
        transaction: "2938",
      },
      {
        date: "2023-06-04",
        description: "Purchase",
        reference: "MNO345",
        type: "completed",
        day: "Sunday",
        balance: "£5300",
        transaction: "2939",
      },
      {
        date: "2023-06-07",
        description: "Withdrawal",
        reference: "PQR678",
        type: "pending",
        day: "Wednesday",
        balance: "£5000",
        transaction: "2340",
      },
      // Additional transactions for Jane Smith
      {
        date: "2023-06-09",
        description: "Withdrawal",
        reference: "STU012",
        type: "completed",
        day: "Friday",
        balance: "£4900",
        transaction: "2341",
      },
      {
        date: "2023-06-11",
        description: "Deposit",
        reference: "VWX345",  
        type: "completed",
        day: "Sunday",
        balance: "£5000",
        transaction: "2342",
      },
      {
        date: "2023-06-13",
        description: "Purchase",
        reference: "YZA678",
        type: "completed",
        day: "Tuesday",
        balance: "£4800",
        transaction: "2343",
      },
      {
        date: "2023-06-02",
        description: "Deposit",
        reference: "JKL012",
        type: "completed",
        day: "Friday",
        balance: "£5500",
        transaction: "2938",
      },
      {
        date: "2023-06-04",
        description: "Purchase",
        reference: "MNO345",
        type: "completed",
        day: "Sunday",
        balance: "£5300",
        transaction: "2939",
      },
      {
        date: "2023-06-07",
        description: "Withdrawal",
        reference: "PQR678",
        type: "pending",
        day: "Wednesday",
        balance: "£5000",
        transaction: "2340",
      },
      // Additional transactions for Jane Smith
      {
        date: "2023-06-09",
        description: "Withdrawal",
        reference: "STU012",
        type: "completed",
        day: "Friday",
        balance: "£4900",
        transaction: "2341",
      },
      {
        date: "2023-06-11",
        description: "Deposit",
        reference: "VWX345",
        type: "completed",
        day: "Sunday",
        balance: "£5000",
        transaction: "2342",
      },
      {
        date: "2023-06-13",
        description: "Purchase",
        reference: "YZA678",
        type: "completed",
        day: "Tuesday",
        balance: "£4800",
        transaction: "2343",
      },
      {
        date: "2023-06-02",
        description: "Deposit",
        reference: "JKL012",
        type: "completed",
        day: "Friday",
        balance: "£5500",
        transaction: "2938",
      },
      {
        date: "2023-06-04",
        description: "Purchase",
        reference: "MNO345",
        type: "completed",
        day: "Sunday",
        balance: "£5300",
        transaction: "2939",
      },
      {
        date: "2023-06-07",
        description: "Withdrawal",
        reference: "PQR678",
        type: "pending",
        day: "Wednesday",
        balance: "£5000",
        transaction: "2340",
      },
      // Additional transactions for Jane Smith
      {
        date: "2023-06-09",
        description: "Withdrawal",
        reference: "STU012",
        type: "completed",
        day: "Friday",
        balance: "£4900",
        transaction: "2341",
      },
      {
        date: "2023-06-11",
        description: "Deposit",
        reference: "VWX345",
        type: "completed",
        day: "Sunday",
        balance: "£5000",
        transaction: "2342",
      },
      {
        date: "2023-06-13",
        description: "Purchase",
        reference: "YZA678",
        type: "completed",
        day: "Tuesday",
        balance: "£4800",
        transaction: "2343",
      },
      // Add more transactions here...
      // ...
    ],
  },
  // Rest of the users...
];

const CheckLog = localStorage.getItem("LoggedIn");
console.log(CheckLog);
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let idInput = document.getElementById("input-box-id").value;
  let passInput = document.getElementById("input-box-pass").value;
  // we need check if user exists and username and password is correct

  users.forEach((user) => {
    var userName = user.username;
    var userPass = user.password;
    var name = user.name;
    var balance = user.balance;
    var availableBalance = user.availableBalance;

    if (userName == idInput && userPass == passInput) {
      localStorage.setItem("Name", name);
      localStorage.setItem("Balance", balance);
      localStorage.setItem("AvlbBalance", availableBalance);
      localStorage.setItem("LoggedIn", "Yes");
      const player = user;

      const usersJSON = JSON.stringify(player);

      localStorage.setItem("users", usersJSON);

      window.location = "/personalacc.html";
      return;
    } else if (userName != idInput && userPass != passInput) {
      localStorage.setItem("LoggedIn", "No");
      document.getElementById("error-msg").innerHTML =
        "<p>Username or Password incorect</p>";
    }
  });
});
