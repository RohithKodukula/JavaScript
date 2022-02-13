const defaultResult = 0;
let currentResult = defaultResult;

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)

function add() {
    currentResult = currentResult + parseFloat(userInput.value);
    outputResult(currentResult, '');
}

function subtract() {
    currentResult = currentResult - parseFloat(userInput.value);
    outputResult(currentResult, '');
}

function multiply() {
    currentResult = currentResult * parseFloat(userInput.value);
    outputResult(currentResult, '');
}

function divide() {
    currentResult = currentResult / parseFloat(userInput.value);
    outputResult(currentResult, '');
}
