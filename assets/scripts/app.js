/*const enteredNumber = +userInput.value;*/
const defaultResult = 0;
let currentResult = defaultResult;
let calcLog;

function getUserInput () {
    return +userInput.value
}

function calcOutput (prevResult, operator, enteredValue){
    const calculationDescription = `${prevResult}${operator}${enteredValue}`;
    outputResult (currentResult,calculationDescription );
    calcLog = [enteredValue];
    console.log(calcLog);
}

function add() {
    const enteredNumber = getUserInput();   //Why not, initiate const with parseInt(userInput.value)
    const prevResult = currentResult;
    currentResult += enteredNumber;
    calcOutput(prevResult, '+', enteredNumber);
}
function subtract() {
    const enteredNumber = getUserInput();
    const prevResult = currentResult;
    currentResult -= enteredNumber;
    calcOutput(prevResult, '-', enteredNumber);
}

function multiply() {
    const enteredNumber = getUserInput();
    const prevResult = currentResult;
    currentResult *= enteredNumber;
    calcOutput(prevResult, '*', enteredNumber);
}

function division() {
    const enteredNumber = getUserInput();
    const prevResult = currentResult;
    currentResult /= enteredNumber;
    calcOutput(prevResult, '/', enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', division)
