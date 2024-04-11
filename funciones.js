function calculadora(num1, num2, operador) {
    switch(operador) {
        case 'suma':
            return num1 + num2;
        case 'resta':
            return num1 - num2;
        case 'multiplicacion':
            return num1 * num2;
        case 'division':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "No se puede dividir entre 0";
            }
        case 'modulo':
            return num1%num2;
        default:
            return "Elige una opción";
    }
}