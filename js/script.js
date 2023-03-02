const numberKeys = document.querySelectorAll('.number');
const operatorKeys = document.querySelectorAll('.operator');
const clearKey = document.querySelector('.clear');
const deleteKey = document.querySelector('.delete');
const resultScreen = document.querySelector('.screen__result');
const inputScreen = document.querySelector('.screen__input');
let listenMode = false;
let activeOperation;
let memory = 0;
function clearScreen() {
    resultScreen.innerHTML = "";
    inputScreen.innerHTML = "";
    memory = 0;
    listenMode = false;
}
function deleteChar() {
    // inputScreen.innerText = inputScreen.innerText.slice(0,this.length - 1);
    let inputText = inputScreen.innerText;
    inputScreen.innerText = inputText.slice(0, inputText.length - 1);
}

function calculate(first, operator, second) {
    first = parseFloat(first);
    second = parseFloat(second);
    switch (operator) {
        case "+":
            return first + second;
        case "-":
            return first - second;
        case "*":
            return first * second;
        case "/":
            return first / second;
        default:
            break;
    }
}

function keysAction(e) {
    let activeKey = e.target.innerText;
    if (activeKey != ".") parseFloat(activeKey);
    inputScreen.innerText += `${activeKey}`;
}

function opteratorAction(e) {
    if (e.target.innerText == "=") {
        let activeInput = parseFloat(inputScreen.innerText);
        memory = calculate(memory, activeOperation, activeInput);
        inputScreen.innerText = `${memory}`;
        resultScreen.innerText = '';
        memory = 0;
        listenMode = false;
        return;
    }
    if (!listenMode) {
        activeOperation = e.target.innerText;
        memory = parseFloat(inputScreen.innerText);
        resultScreen.innerText = inputScreen.innerText + activeOperation;
        inputScreen.innerText = '';
        listenMode = true;
        console.log(memory);
        return;
    }
    let activeInput = parseFloat(inputScreen.innerText);
    memory = calculate(memory, activeOperation, activeInput);
    activeOperation = e.target.innerText;
    resultScreen.innerText = `${memory}` + activeOperation;
    inputScreen.innerText = '';
}

numberKeys.forEach((key) => key.addEventListener("click", keysAction));
operatorKeys.forEach((key) => key.addEventListener("click", opteratorAction));
clearKey.addEventListener("click", clearScreen);
deleteKey.addEventListener("click", deleteChar);













