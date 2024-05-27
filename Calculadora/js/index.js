function asignar(value) {
    document.getElementById('screen').value += value;
}

function limpiar() {
    document.getElementById('screen').value = '';
}

function calcular() {
    try {
        let expression = document.getElementById('screen').value;

        // Reemplazar funciones y constantes
        expression = expression.replace(/sin\(/g, 'Math.sin(')
        expression = expression.replace(/cos\(/g, 'Math.cos(')
        expression = expression.replace(/tan\(/g, 'Math.tan(')
        expression = expression.replace(/sqrt\(/g, 'Math.sqrt(')
        expression = expression.replace(/log\(/g, 'Math.log(')
        expression = expression.replace(/π/g, 'Math.PI')
        expression = expression.replace(/e/g, 'Math.E')
        expression = expression.replace(/e/g, 'Math.E')
        expression = expression.replace(/\^/g, '**');

        // Evaluar la expresión
        let result = eval(expression);
        document.getElementById('screen').value = result;
    } catch (error) {
        document.getElementById('screen').value = 'Error';
    }
}
