function maiorNome (array) {
    let nome = array[0]
    let comparador;
    for (let index = 0; index < array.length; index += 1) {
        comparador = array[index];
        if (nome.length < comparador.length){
            nome = array[index];
        }
    }
    return nome;
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));