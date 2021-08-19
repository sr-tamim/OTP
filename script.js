const showPin = document.getElementById('show-pin');
const generateBtn = document.querySelector('.generate-btn');
const inputPinScreen = document.getElementById('input-pin-display');
const successMessage = document.getElementById('notify-success');
const failMessage = document.getElementById('notify-fail');

let pin;
let actionLeft = 3;

generateBtn.addEventListener('click', function () {
    pin = Math.floor(Math.random() * 10000);
    showPin.innerText = pin;
    if (pin.toString().length != 4) { generateBtn.click() }
})

document.querySelector('.pin-input').addEventListener('click', function (event) {
    const pressedBtn = event.target.innerText;
    if (event.target.className == 'button') {
        if (isNaN(inputPinScreen.innerText)) { inputPinScreen.innerText = '' }
        if (pressedBtn == 'C') {
            inputPinScreen.innerText = '';
        }
        else if (pressedBtn == '<') {
            inputPinScreen.innerText = inputPinScreen.innerText.slice(0, inputPinScreen.innerText.length - 1);
        } else {
            inputPinScreen.innerText += pressedBtn;
        }
        if (inputPinScreen.innerText == '') {
            inputPinScreen.innerText = 'Input';
        }
    }
    else if (event.target.className == 'submit-btn') {
        if (pin == undefined) { alert('Generate pin first') }
        else if (isNaN(inputPinScreen.innerText)) { alert('Type your pin') }
        else if (inputPinScreen.innerText == pin.toString()) { successMessage.style.display = 'block'; failMessage.style.display = 'none'; actionLeft = 3; }
        else { failMessage.style.display = 'block'; successMessage.style.display = 'none'; actionLeft--; }
        document.getElementById('action-count').innerText = actionLeft;
        if (actionLeft == 0) {
            event.target.setAttribute('disabled', true);
        }
    }
})