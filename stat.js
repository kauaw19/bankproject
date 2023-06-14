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

const usersJSON = localStorage.getItem("users");
const users = JSON.parse(usersJSON);

const Name = localStorage.getItem("Name");
const Balance = localStorage.getItem("Balance");
const AvlbBalance = localStorage.getItem("AvlbBalance");

document.getElementById("nameUser").innerHTML = Name;
document.getElementById("Balance-1").innerHTML = "£" + Balance;
document.getElementById("Balance-2").innerHTML = "£" + AvlbBalance;

const pendingTransactions = users.transactions.filter(
  (transaction) => transaction.type === "pending"
);
const completedTransactions = users.transactions.filter(
  (transaction) => transaction.type === "completed"
);
pendingTransactions.forEach((transaction) => {
  const dateTable = document.createElement("table");
  dateTable.style.margin = "0 auto";
  dateTable.style.padding = "10px";

  const dateRow = dateTable.insertRow();
  const dateCell = dateRow.insertCell();

  dateCell.textContent = transaction.date;

  document.getElementById("pending-dateHTML").appendChild(dateTable);

  const descTable = document.createElement("table");
  descTable.style.margin = "0 auto";
  descTable.style.padding = "10px";

  const descRow = descTable.insertRow();
  const descCell = descRow.insertCell();

  descCell.textContent = transaction.description;

  document.getElementById("pending-descHTML").appendChild(descTable);

  const refTable = document.createElement("table");
  refTable.style.margin = "0 auto";
  refTable.style.padding = "10px";

  const refRow = refTable.insertRow();
  const refCell = refRow.insertCell();

  refCell.textContent = transaction.reference;

  document.getElementById("pending-refHTML").appendChild(refTable);

  const dayTable = document.createElement("table");
  dayTable.style.margin = "0 auto";
  dayTable.style.padding = "10px";

  const dayRow = dayTable.insertRow();
  const dayCell = dayRow.insertCell();

  dayCell.textContent = transaction.day;

  document.getElementById("pending-dayHTML").appendChild(dayTable);

  const transacTionTable = document.createElement("table");
  transacTionTable.style.margin = "0 auto";
  transacTionTable.style.padding = "10px";

  const transacTionRow = transacTionTable.insertRow();
  const transacTionCell = transacTionRow.insertCell();

  transacTionCell.textContent = transaction.transacTion;

  document
    .getElementById("pending-transactionHTML")
    .appendChild(transacTionTable);

  const balanceTable = document.createElement("table");
  balanceTable.style.margin = "0 auto";
  balanceTable.style.padding = "10px";

  const balanceRow = balanceTable.insertRow();
  const balanceCell = balanceRow.insertCell();

  balanceCell.textContent = transaction.balance;

  document.getElementById("pending-balanceHTML").appendChild(balanceTable);
});
completedTransactions.forEach((transaction) => {
  const dateTable = document.createElement("table");
  dateTable.style.margin = "0 auto";
  dateTable.style.padding = "10px";

  const dateRow = dateTable.insertRow();
  const dateCell = dateRow.insertCell();

  dateCell.textContent = transaction.date;

  document.getElementById("done-dateHTML").appendChild(dateTable);

  const descTable = document.createElement("table");
  descTable.style.margin = "0 auto";
  descTable.style.padding = "10px";

  const descRow = descTable.insertRow();
  const descCell = descRow.insertCell();

  descCell.textContent = transaction.description;

  document.getElementById("done-descHTML").appendChild(descTable);

  const refTable = document.createElement("table");
  refTable.style.margin = "0 auto";
  refTable.style.padding = "10px";

  const refRow = refTable.insertRow();
  const refCell = refRow.insertCell();

  refCell.textContent = transaction.reference;

  document.getElementById("done-refHTML").appendChild(refTable);

  const dayTable = document.createElement("table");
  dayTable.style.margin = "0 auto";
  dayTable.style.padding = "10px";

  const dayRow = dayTable.insertRow();
  const dayCell = dayRow.insertCell();

  dayCell.textContent = transaction.day;

  document.getElementById("done-dayHTML").appendChild(dayTable);

  const transacTionTable = document.createElement("table");
  transacTionTable.style.margin = "0 auto";
  transacTionTable.style.padding = "10px";

  const transacTionRow = transacTionTable.insertRow();
  const transacTionCell = transacTionRow.insertCell();

  transacTionCell.textContent = transaction.transacTion;

  document.getElementById("done-transactionHTML").appendChild(transacTionTable);

  const balanceTable = document.createElement("table");
  balanceTable.style.margin = "0 auto";
  balanceTable.style.padding = "10px";

  const balanceRow = balanceTable.insertRow();
  const balanceCell = balanceRow.insertCell();

  balanceCell.textContent = transaction.balance;

  document.getElementById("done-balanceHTML").appendChild(balanceTable);
});
