//calculate
function calculate() {
  let currentInputs = document.getElementById("inputs").innerText.split("");
  let evalInputs = "";
  let answer = document.getElementById("answer");

  for (i = 0; i < currentInputs.length; i++) {
    if (currentInputs[i] == "x") {
      evalInputs += "*";
    } else if (currentInputs[i] == "÷") {
      evalInputs += "/";
    } else {
      evalInputs += currentInputs[i];
    }
  }

  if (evalInputs == 0) {
    answer.innerText = "";
  } else {
    answer.innerText = eval(evalInputs);
  }
}

//display input
function displayInput(input) {
  let currentInputs = document.getElementById("inputs");
  //check for zero
  if (inputs.innerText.length == 1 && inputs.innerText == 0) {
    inputs.innerText = "";
  }
  currentInputs.innerText += input;
}

function buttonPressed(input) {
  let currentInputs = document.getElementById("inputs");
  if (input == "+" || input == "x" || input == "÷" || input == "-") {
    //check if the was an operator
    if (
      currentInputs.innerText.split("").pop() == "+" ||
      currentInputs.innerText.split("").pop() == "x" ||
      currentInputs.innerText.split("").pop() == "÷" ||
      currentInputs.innerText.split("").pop() == "-"
    ) {
      let newInput = currentInputs.innerText.split("");
      newInput.pop();
      newInput = newInput.join("") + input;
      currentInputs.innerText = newInput;
    } else if (currentInputs.innerText != "0") {
      displayInput(input);
    }
  } else if (input == "=") {
    calculate();
  } else if (input == "DEL") {
    deleteInputs();
    calculate();
  } else {
    displayInput(input);
  }
}

//delete inputs
function deleteInputs() {
  let currentInputs = document.getElementById("inputs");
  let totalInputs = currentInputs.innerText.split("");
  totalInputs.pop();
  totalInputs = totalInputs.join("");
  //check empty input
  if (totalInputs == "") {
    totalInputs = 0;
  }
  currentInputs.innerText = totalInputs;
}

//add numbers and symbols
(function() {
  let numbers = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    [".", "0", "="]
  ];
  let numCol = document.getElementById("numCol");
  for (i = 0; i < numbers.length; i++) {
    numCol.innerHTML += `<div class="row" style="color:#fff; text-align:center; height: 25%; font-size: 30px" id=numRow${i}> </div>`;

    for (j = 0; j < numbers[i].length; j++) {
      document.getElementById(
        `numRow${i}`
      ).innerHTML += `<div class="col" style="background: #3c4043;">
      <div class="card ripple no-shadow" style="background: #3c4043;" onclick="buttonPressed('${numbers[i][j]}')">
            ${numbers[i][j]}
          </div>
        </div>`;
    }
  }
})();

//add operators
(function() {
  let operators = ["DEL", "÷", "x", "-", "+"];
  let operatorCol = document.getElementById("operatorCol");
  for (i = 0; i < operators.length; i++) {
    operatorCol.innerHTML += ` <div class="row" style="color:#fff ; text-align:center; height: 20%; font-size: 20px"> 
    <div class="col" style="background: #5f6368;">
      <div class="card no-shadow" style="background: #5f6368;" onclick="buttonPressed('${operators[i]}')"> ${operators[i]}
     </div></div>`;
  }
})();
