function somatorio (numero) {
    let soma = 0;

    if (numero > 0) {
        for (let index = 0; index <= numero; index += 1) {
            soma += index;
        }
    }
    return soma;
}

console.log(somatorio(25));