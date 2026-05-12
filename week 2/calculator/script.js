function getValues() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);

  return [num1, num2];
}

function showResult(value) {
  document.getElementById("result").innerHTML = "Result: " + value;
}

function add() {
  let [num1, num2] = getValues();
  showResult(num1 + num2);
}

function subtract() {
  let [num1, num2] = getValues();
  showResult(num1 - num2);
}

function multiply() {
  let [num1, num2] = getValues();
  showResult(num1 * num2);
}

function divide() {
  let [num1, num2] = getValues();

  if (num2 === 0) {
    showResult("Cannot divide by zero");
  } else {
    showResult(num1 / num2);
  }
}