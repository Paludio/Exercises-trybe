function sum(a, b) {
    return a + b;
}

const somaNumero = (numero) => {
    let contador = 0;

    for(let index = 0; index <= numero; index += 1) {
        contador += index;
    }
    return contador;
};

module.exports = {
    sum,
    somaNumero
};