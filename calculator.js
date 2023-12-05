/*let total = 0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector(".screen");

function buttonClick(value) {
  if (isNaN(value)) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  screen.innerText = buffer;
}

function handleSymbol(symbol) {
  switch (symbol) {
    case "AC":
      buffer = "0";
      total = 0;
      break;
    case "=":
      if (previousOperator === null) {
        return;
      }
      flusOperation(parseInt(buffer));
      previousOperator = null;
      buffer = total;
      total = 0;
      break;
    case "←":
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;
    case "+":
    case "-":
    case "×":
    case "÷":
      handleMath(symbol);
      break;
  }
}

function handleMath(symbol) {
  if (buffer === "0") {
    return;
  }
  const intBuffer = parseInt(buffer);
  if (total === 0) {
    total = intBuffer;
  } else {
    flusOperation(intBuffer);
  }
  previousOperator = symbol;
  buffer = "0";
}

function flusOperation(intBuffer) {
  if (previousOperator === "+") {
    total += intBuffer;
  } else if (previousOperator === "-") {
    total -= intBuffer;
  } else if (previousOperator === "×") {
    total *= intBuffer;
  } else if (previousOperator === "÷") {
    total /= intBuffer;
  }
}

function handleNumber(numberString) {
  if (buffer === "0") {
    buffer = numberString;
  } else {
    buffer += numberString;
  }
}

function init() {
  document
    .querySelector(".cal-button")
    .addEventListener("click", function (event) {
      buttonClick(event.target.innerText);
    });
}

function init() {
  document
    .querySelector(".cal-button")
    .addEventListener("click", function (event) {
      buttonClick(event.target.innerText);
    });
}

init();
*/

let total = 0;
let buffer = "0";
let previousOperator = null;

const screen = document.querySelector(".screen");

function buttonClick(value) {
  if (isNaN(value)) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  updateScreen();
}

function handleSymbol(symbol) {
  switch (symbol) {
    case "AC":
      clearCalculator();
      break;
    case "=":
      if (previousOperator === null) {
        return;
      }
      performCalculation(parseFloat(buffer));
      previousOperator = null;
      buffer = total.toString();
      total = 0;
      break;
    case "←":
      deleteLastDigit();
      break;
    case "+":
    case "-":
    case "×":
    case "÷":
      handleMath(symbol);
      break;
  }
}

function handleMath(symbol) {
  if (buffer === "0") {
    return;
  }
  const intBuffer = parseFloat(buffer);
  if (total === 0) {
    total = intBuffer;
  } else {
    performCalculation(intBuffer);
  }
  previousOperator = symbol;
  buffer = "0";
}

function performCalculation(intBuffer) {
  switch (previousOperator) {
    case "+":
      total += intBuffer;
      break;
    case "-":
      total -= intBuffer;
      break;
    case "×":
      total *= intBuffer;
      break;
    case "÷":
      if (intBuffer !== 0) {
        total /= intBuffer;
      } else {
        // Handle division by zero error
        clearCalculator();
        alert("Cannot divide by zero");
      }
      break;
  }
}

function handleNumber(numberString) {
  if (buffer === "0") {
    buffer = numberString;
  } else {
    buffer += numberString;
  }
}

function clearCalculator() {
  buffer = "0";
  total = 0;
}

function deleteLastDigit() {
  if (buffer.length === 1) {
    buffer = "0";
  } else {
    buffer = buffer.substring(0, buffer.length - 1);
  }
}

function updateScreen() {
  screen.innerText = buffer;
}

function init() {
  document
    .querySelector(".cal-button")
    .addEventListener("click", function (event) {
      buttonClick(event.target.innerText);
    });
}

init();
