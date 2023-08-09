let result = document.getElementById('result');

function appendToResult(value) {
    result.value += value;
}

function appendOperator(operator) {
    if (result.value.length > 0) {
        const lastChar = result.value.slice(-1);
        if (!isNaN(lastChar) || lastChar === '.') {
            result.value += operator;
        }
    }
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}

function clearResult() {
    result.value = '';
}

function deleteLast() {
    result.value = result.value.slice(0, -1);
}

