var bill = document.querySelector("#amount");
var received = document.querySelector("#cash");
var notesNumber2000 = document.querySelector("#notes2000");
var notesNumber500 = document.querySelector("#notes500");
var notesNumber100 = document.querySelector("#notes100");
var notesNumber50 = document.querySelector("#notes50");
var notesNumber20 = document.querySelector("#notes20");
var notesNumber10 = document.querySelector("#notes10");
var notesNumber5 = document.querySelector("#notes5");
var notesNumber1 = document.querySelector("#notes1");

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

  notesNumber500.innerText = "The number of 2000 notes is: " + bills[0];
  notesNumber500.innerText = "The number of 500 notes is: " + bills[1];
  notesNumber100.innerText = "The number of 100 notes is: " + bills[2];
  notesNumber50.innerText = "The number of 50 notes is: " + bills[3];
  notesNumber20.innerText = "The number of 20 notes is: " + bills[4];
  notesNumber10.innerText = "The number of 10 notes is: " + bills[5];
  notesNumber5.innerText = "The number of 5 notes is: " + bills[6];
  notesNumber1.innerText = "The number of 1 notes is: " + bills[7];
}

buttonPress.addEventListener("click", clickHandler);
