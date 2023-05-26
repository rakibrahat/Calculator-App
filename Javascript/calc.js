// Take Operators
const deleteLast = document.querySelector(".remove");
const plusSign = document.querySelector(".plus");
const minusSign = document.querySelector(".minus");
const multiplySign = document.querySelector(".multi");
const divideSign = document.querySelector(".divide");
const equalSign = document.querySelector(".equal");



// Adding Event Listeners For Operators
deleteLast.addEventListener("click", deleteTheLastChar);
minusSign.addEventListener("click", minus)
plusSign.addEventListener("click", add);
multiplySign.addEventListener("click", multiply);
divideSign.addEventListener("click", division)
equalSign.addEventListener("click", result);


// Main Calculation
let outputText = document.getElementById("inputTexts");
let valueTexts = outputText.textContent;


function calculation(input) {
    console.log(eval(input));

    return eval(input);
}

// Percentage
function percentage() {
    outputText.innerHTML += " % ";
    calculation(outputText.textContent);
}

// Addition
function add() {
    outputTexts.innerHTML += " + ";
}

// Substraction
function minus() {
    outputTexts.innerHTML += " - ";

}

// Multiplication
function multiply() {
    outputTexts.innerHTML += " * ";
}

// Division
function division() {
    outputTexts.innerHTML += " / ";
}

// Final Result
function result() {

    console.log(outputText.textContent)

    calculation(outputText.textContent);

    lastResult = calculation(outputText.textContent);

    outputTexts.innerHTML = lastResult;
    resultTexts.innerHTML = "Ans";
    console.log(lastResult)
}



// Delete Last Number
function deleteTheLastChar() {
    if (outputTexts.textContent[outputTexts.textContent.length - 1] === " ") {
        outputTexts.innerHTML = outputTexts.textContent.slice(0, -3);
    }
    else if (outputTexts.textContent === "0") {
        outputTexts.innerHTML = "0";
    }
    else {
        outputTexts.innerHTML = outputTexts.textContent.slice(0, -1);
    }

    initialResult = calculation(outputTexts.textContent);

    primaryResult(initialResult);
}
