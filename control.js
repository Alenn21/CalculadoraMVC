function calcular() {
    const num1 = parseFloat(document.getElementById('txtNum1').value);
    const num2 = parseFloat(document.getElementById('txtNum2').value);
    const operacion = document.getElementById('operacion').value;
    let resultado = calculadora(num1, num2, operacion);
    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
}
