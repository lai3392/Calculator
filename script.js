let currentInput = '';

function appendToResult(value) {
    currentInput += value;
    updateResult();
}

function updateResult() {
    document.getElementById('result').value = currentInput;
}

function calculate() {
    try {
        const result = eval(currentInput);
        currentInput = result.toString();
        updateResult();
    } catch (error) {
        currentInput = 'Error';
        updateResult();
    }
}

function clearResult() {
    currentInput = '';
    updateResult();
}
