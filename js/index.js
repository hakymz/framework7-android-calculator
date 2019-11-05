function displayInput(input) {
  let currentInputs = document.getElementById("inputs");
  if (input == "+" || input == "-" || input == "x" || input == "÷") {
    if (
      currentInputs.innerText.split("").pop() == "+" ||
      currentInputs.innerText.split("").pop() == "-" ||
      currentInputs.innerText.split("").pop() == "x" ||
      currentInputs.innerText.split("").pop() == "÷"
    ) {
      let newInputs = currentInputs.innerText.split("");
      newInputs.pop();
      newInputs = newInputs.join("") + input;
      currentInputs.innerText = newInputs;
    } else if (currentInputs.innerText != "0") {
      currentInputs.innerText += input;
    }
  } else {
    if (currentInputs.innerText == "0" && currentInputs.innerText.length == 1) {
      currentInputs.innerText = "";
    }
    currentInputs.innerText += input;
  }
}

function calculate() {
  let currentInputs = document.getElementById("inputs").innerText;
  let answer = document.getElementById("answer");
  let evalInputs = "";
  let operator = false;
  for (i = 0; i < currentInputs.length; i++) {
    if (currentInputs[i] == "x") {
      evalInputs += "*";
    } else if (currentInputs[i] == "÷") {
      evalInputs += "/";
    } else {
      evalInputs += currentInputs[i];
    }

    if (
      currentInputs[i] == "x" ||
      currentInputs[i] == "-" ||
      currentInputs[i] == "÷" ||
      currentInputs[i] == "+"
    ) {
      operator = true;
    }
  }

  let lastChar = currentInputs.split("").pop();
  if (evalInputs == "0" || operator == false) {
    answer.innerText = "";
  } else if (
    lastChar != "x" &&
    lastChar != "+" &&
    lastChar != "÷" &&
    lastChar != "-" &&
    operator
  ) {
    answer.innerText = eval(evalInputs);
  }
}
function buttonPressed(input) {
  if (input == "=") {
    calculate();
  } else if (input == "DEL") {
    deleteInputs();
  } else {
    displayInput(input);
  }
}

function deleteInputs() {
  let currentInputs = document.getElementById("inputs");
  let newInputs = currentInputs.innerText.split("");
  newInputs.pop();
  newInputs = newInputs.join("");
  if (newInputs == "") {
    newInputs = "0";
  }
  currentInputs.innerText = newInputs;
  calculate();
}

//add numbers and operators to the dom
function addNumbers() {
  let numCol = document.getElementById("numCol");
  let numbers = [
    ["7", "8", "9"],
    ["4", "5", "6"],
    ["1", "2", "3"],
    [".", "0", "="]
  ];
  for (let i = 0; i < numbers.length; i++) {
    numCol.innerHTML += `<div class="row"
      style="height: 25%; color: white; text-align: center;" id="numRows${i}"
    ></div>`;

    for (let j = 0; j < numbers[i].length; j++) {
      document.getElementById("numRows" + i).innerHTML += `<div class="col">
      <span class="link" style="font-size: 30px; margin:20px;"
      onclick="buttonPressed('${numbers[i][j]}')"
        >${numbers[i][j]}</span
      >
    </div>`;
    }
  }

  let operators = ["DEL", "÷", "x", "-", "+"];
  let operatorCol = document.getElementById("operatorCol");
  for (let i = 0; i < operators.length; i++) {
    operatorCol.innerHTML += `<div class="row"
       style="height: 20%; color: white; text-align: center;" id="numRows${i}"
     >
     <div class="col">
      <span class="link" style="font-size: 20px; margin:20px;"
      onclick="buttonPressed('${operators[i]}')"
        >${operators[i]}</span
      >
    </div>
     </div>`;
  }
}

addNumbers();
