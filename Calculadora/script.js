let currentInput = '0';
let operator = null;
let previousInput = null;

function press(num) {
    if (currentInput === '0' && num !== '.') {
        currentInput = `${num}`;
    } else {
        currentInput += `${num}`;
    }
    updateDisplay();
}

function setOP(op) {
    if (currentInput === '') return;

    if (previousInput !== null) {
        calculate();
    }

    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = `${result}`;
    operator = null;
    previousInput = null;
    updateDisplay();
}

function clr() {
    currentInput = '0';
    operator = null;
    previousInput = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = currentInput;
}

document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (!isNaN(key) || key === '.') {
        press(key);
    } else if (key === '+' || key === '-') {
        setOP(key);
    } else if (key === '*' || key === '/') {
        setOP(key);
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        clr();
    }
});