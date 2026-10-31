let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let result = document.querySelector("#result");

let calculateButton = document.querySelector("#calculate");

let addButton = document.querySelector("#add");
let subtractButton = document.querySelector("#subtract");
let multiplyButton = document.querySelector("#multiply");
let divideButton = document.querySelector("#divide");

let selectedOperator = "+";

// Addition
addButton.addEventListener("click", function () {
    selectedOperator = "+";
});

// Subtraction
subtractButton.addEventListener("click", function () {
    selectedOperator = "-";
});

// Multiplication
multiplyButton.addEventListener("click", function () {
    selectedOperator = "*";
});

// Division
divideButton.addEventListener("click", function () {
    selectedOperator = "/";
});

// Calculate
calculateButton.addEventListener("click", function () {

    if (num1.value === ""||  num2.value === "") {
        result.textContent = "Please enter both numbers!";
        return;
    }

    let num1Value = Number(num1.value);
    let num2Value = Number(num2.value);

    let answer;

    if (selectedOperator === "+") {
        answer = num1Value + num2Value;
    }
    else if (selectedOperator === "-") {
        answer = num1Value - num2Value;
    }
    else if (selectedOperator === "*") {
        answer = num1Value * num2Value;
    }
    else if (selectedOperator === "/") {

        if (num2Value === 0) {
            result.textContent = "Cannot divide by zero!";
            return;
        }

        answer = num1Value / num2Value;
    }

    result.textContent = "Result: " + answer;

});