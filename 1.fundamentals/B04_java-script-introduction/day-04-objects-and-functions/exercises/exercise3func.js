function menorIndice (array) {
    let numero = array[0];
    for (index = 0; index < array.length; index += 1) {
        if (numero > array[index]) {
            numero = index;
        }
    }
    if (numero === array[0]) {
        numero = 0;
    }
    return numero;
}

console.log(menorIndice(array = [2, 4, 6, 7, 10, 0, -3]));