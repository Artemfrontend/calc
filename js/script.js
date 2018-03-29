var num1, num2, res = document.getElementById('res');

function calc() {
  num1 = document.getElementById('num1').value,
  num1 = parseFloat(num1),
  num2 = document.getElementById('num2').value,
  num2 = parseFloat(num2);
}

function plus() {
  calc();
  res.innerHTML = num1 + num2;
}

function minus() {
  calc();
  res.innerHTML = num1 - num2;
}

function divide() {
  calc();
  res.innerHTML = num1 / num2;
}

function multiply() {
  calc();
  res.innerHTML = num1 * num2;
}

function percent() {
  calc();
  res.innerHTML = num1 / 100 * num2;
}

function percent2() {
  calc();
  var parc = num1 / 100 * num2;
  res.innerHTML = num1 - parc;
}