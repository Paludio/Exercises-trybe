function inteiros (array) {
    let numero;
    let contador = 0;
    let contador2 =0;
    let numeroMaisAparece = 0;

    for (let index = 0; index < array.length; index += 1){

        if (contador2 < contador){
            contador2 = contador;
        }
        contador = 0;

        numero = array[index];
        for (let index2 = 0; index2 < array.length; index2 += 1){
            if (numero === array[index2]) {
                contador += 1;

                if (contador > contador2){
                    numeroMaisAparece = array[index];
                }
            }
        }
    }
    return numeroMaisAparece;
}

console.log(inteiros([3, 3, 2, 5, 8, 8, 5, 8, 8, 2, 3, 5, 7, 5, 9, 5, 10]));