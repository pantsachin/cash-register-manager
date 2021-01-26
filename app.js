var bill = document.querySelector("#amount");
var received = document.querySelector("#cash");
var notesNumber = document.querySelector("#notes");
var buttonPress = document.querySelector("#button");

var amount = bill.value;
var entry = received.value;
var bills = [];

function clickHandler() {
  var amount = parseInt(bill.value);
  var entry = parseInt(received.value);

  var a = entry - amount;

  var b = Math.floor(a / 2000); //number of 2000 notes
  a = a - b * 2000;
  bills.push(b);

  var c = Math.floor(a / 500); //number of 500 notes
  a = a - c * 500;
  bills.push(c);

  var d = Math.floor(a / 100); //number of 100 notes
  a = a - d * 100;
  bills.push(d);

  var e = Math.floor(a / 50); //number of 50 notes
  a = a - e * 50;
  bills.push(e);

  var f = Math.floor(a / 20); //number of 20 notes
  a = a - f * 20;
  bills.push(f);

  var g = Math.floor(a / 10); //number of 10 notes
  a = a - g * 10;
  bills.push(g);

  var h = Math.floor(a / 5); //number of 5 notes
  a = a - e * 5;
  bills.push(h);

  var i = Math.floor(a / 1); //number of 1 notes
  a = a - f * 1;
  bills.push(i);

  notesNumber.innerText = bills;
}

buttonPress.addEventListener("click", clickHandler);
