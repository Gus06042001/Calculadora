let display = document.getElementById('display');
let currentInput = '';

function AnexarNumero(number) {
    currentInput += number;
    display.value = currentInput;
}

function AnexarOperador(operator) {
    currentInput += operator;
    display.value = currentInput;
}

function calcularResultado() {
    try {
        let result = eval(currentInput);
        display.value = result;
        currentInput = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
}

function limparDisplay() {
    display.value = '';
    currentInput = '';
}