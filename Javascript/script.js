// Make var for result
const refreshBtn = document.querySelector(".refresh-btn");
refreshBtn.addEventListener("click", refresh);

let resultTexts = document.getElementById("resultTexts")
resultTexts.innerHTML = "";

let inputValue;
let inputNumber;
let lastResult = 0;
let lastAnswer;
let initialResult;


// Output Element
let outputTexts = document.getElementById("inputTexts");

// Take The ans button
const ans = document.querySelector(".ans");


// Adding Event Listeners For Numbers
ans.addEventListener("click", answerAdd);

// Function for number input

function clickOnNumber(num) {

    outputReset(outputTexts);

    outputTexts.innerHTML += `${num}`;

    initialResult = calculation(outputTexts.textContent);

    primaryResult(initialResult);

    console.log(outputTexts.textContent)
}

function answerAdd() {

    lastAnswer = lastResult;

    outputReset(outputTexts);

    inputValue = `${lastResult}`;

    inputNumber = Number(inputValue);

    outputTexts.innerHTML += `${inputNumber}`;
    resultTexts.innerHTML = "Ans";

    lastResult = 0;

    console.log(outputTexts.textContent);
}


function primaryResult(initialResult) {
    resultTexts.innerHTML = initialResult;
    if (resultTexts.textContent === "Error") {
        resultTexts.innerHTML = "0";
    }
    if (outputTexts.textContent === "") {
        outputTexts.innerHTML = "0";
    }
}


// Reset Functions
function refresh() {
    lastAnswer = 0;
    lastResult = 0;
    outputTexts.innerHTML = "0";
    resultTexts.innerHTML = "";
}

function outputReset(htmlContent) {
    if(htmlContent.textContent === "0" || htmlContent.textContent === `${lastResult}`){
        htmlContent.innerHTML = "";
    }
}
