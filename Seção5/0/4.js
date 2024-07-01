function classificarNumero(numero) {
    if (numero > 0) {
        if (numero % 2 === 0) {
            return 'Positivo e Par';
        } else {
            return 'Positivo e Ímpar'; // alterado para remover o acento
        }
    } else if (numero < 0) {
        return 'Negativo';
    } else {
        return 'Neutro';
    }
}