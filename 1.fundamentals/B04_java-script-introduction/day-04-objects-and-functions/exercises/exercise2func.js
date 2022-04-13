function maiorIndice (array) {
    let numero = array[0];
    for (index = 0; index < array.length; index += 1) {
        if (numero < array[index]) {
            numero = index;
        }
    }
    if (numero === array[0]) {
        numero = 0;
    }
    return numero;
}

console.log(maiorIndice(array = [20, 3, 6, 7, 10, 15]));