const numberKeys = document.querySelectorAll('.number');
const operatorKeys = document.querySelectorAll('.operator');
const clearKey = document.querySelector('.clear');
const deleteKey = document.querySelector('.delete');
const resultScreen = document.querySelector('.screen__result');
const inputScreen = document.querySelector('.screen__input');

function clearScreen() {
    resultScreen.innerHTML = "";
    inputScreen.innerHTML = "";
}
function deleteChar(){
    // inputScreen.innerText = inputScreen.innerText.slice(0,this.length - 1);
    let inputText = inputScreen.innerText;
    inputScreen.innerText = inputText.slice(0,inputText.length - 1);
}

numberKeys.forEach((key) => {
    key.addEventListener("click",() => {
        inputScreen.innerText += key.innerText;
    });
});











clearKey.addEventListener("click",clearScreen);
deleteKey.addEventListener("click", deleteChar);

