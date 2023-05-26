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
percentSign.addEventListener("click", percentage);



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







// function calculation(input) {
//     // let values = outputTexts;
//     let str = input;
//     let values = str.split(" ");
//     let len = values.length;

//     for (let i = 0; i < len; i++) {
//         if (!isNaN(values[i])) {
//             values[i] = parseFloat(values[i]);
//         }
//     }

//     console.log(len)
//     console.log(values)

//     // let total = eval(values);
//     let total = 0;
//     let operator;

//     for (let i = 0; i < len; i++) {

//         if ((values[i + 1] === "+" && i === 0) || values[i - 1] === "+") {
//             total += values[i];
//             console.log(total);
//             operator = "+";
//             console.log(operator)
//         }
//         else if ((values[i + 1] === "-" && i === 0) || values[i - 1] === "-") {
//             if ((values[i + 1] === "-" && i === 0)) {
//                 total = values[i];
//                 console.log(total);
//             }
//             else if (values[i - 1] === "-") {
//                 total -= values[i];
//                 console.log(total);
//             }
//             operator = "+";
//             console.log(operator)
//         }
//         else if ((values[i + 1] === "*" && i === 0) || values[i - 1] === "*") {
//             if ((values[i + 1] === "*" && i === 0)) {
//                 total = values[i];
//             }
//             else if (values[i - 1] === "*") {
//                 total *= values[i];
//             }
//             console.log(total);
//             operator = "*";
//             console.log(operator)
//         }
//         else if ((values[i + 1] === "/" && i === 0) || values[i - 1] === "/") {
//             if ((values[i + 1] === "/" && i === 0)) {
//                 total = values[i];
//                 console.log(total);
//             }
//             else if (values[i - 1] === "/") {
//                 total /= values[i];
//                 console.log(total);
//             }
//             console.log(total);
//             operator = "/";
//             console.log(operator)
//         }
//         else if (values[i] === "%") {
//             if (total === 0) {
//                 total = 1;
//             }

//             total /= 100;

//             console.log(total);
//             operator = "%";
//             console.log(operator)
//         }
//         else if (values[i].toString().match(/[%*+-/]/ig) || isNaN(values[i])) {
//             total = total;
//             console.log(total)
//             operator = "opp";
//             console.log(operator)
//         }
//         else if (Number(values[i])) {
//             total = values[i];
//             console.log(total)
//             operator = "numb";
//             console.log(operator)
//         }
//         else {
//             total = "Error";
//             console.log(total)
//             operator = "err";
//             console.log(operator)
//         }
//     }

//     console.log(total);
//     resultTexts.innerHTML = total;
//     return total;
// }
