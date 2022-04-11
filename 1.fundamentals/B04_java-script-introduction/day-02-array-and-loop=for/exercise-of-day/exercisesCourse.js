// let numero = 3;

// for (index = numero - 1; index > 0; index -= 1) {
//     numero = numero * index;
// }
// console.log(numero);

// let palavra = "trybe";
// let palavraInvertida = palavra.split("").reverse().join("");

// console.log(palavraInvertida);

// let palavra = "tijolo";
// let array1 = [];
// let array2 = [];

// for (let index = 0; index < palavra.length; index += 1) {
//     array1.push(palavra[index]);
//     array2.unshift(array1[index]);
// }

// let toString = array2.toString("");

// console.log(toString.replace(/,/g, ""));

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let comparador;
// let comparador2 = "";
// let comparador3 = "";

// for (let index = 0; index < array.length; index += 1) {
//     comparador = array[index];

//     if (comparador.length >= comparador2.length) {
//         comparador2 = array[index];
//     } else {
//         comparador3 = array[index];
//     }
// }

// console.log("A string com maior números de letra é: " + comparador2);
// console.log("A string com menor números de letra é: " + comparador3)

// let numero = 600;
// let divisores = 0;
// let contador;
// let maiorNumero = 0;
// let primos = [];

// for (let index = 1; index <= numero; index += 1) { // para contar de 1 até o número de entrada
//     contador = index;

//     if (divisores === 2) { //para verificar se a quantidade de divisores é igual a 2, se sim o contador vai empurrar o número para dentro do array primos
//         primos.push(contador - 1); //esse -1 é porque o contador vai estar com o próximo valor a ser dividido e nós queremos o valor que já foi dividido
//     }

//     divisores = 0; //para reiniciar o valor da quantidade de divisores

//     for (let index2 = 0; index2 <= contador; index2 += 1) { //para dividir o numero que vai estar no contador por 0 até ele mesmo
//         if (contador % index2 === 0) {
//             divisores += 1; //soma +1 ao divisor, se ele passar de 2 divisores significa que não é primo
//         }
//     }
// }

// for (index4 = 0; index4 < primos.length; index4 += 1){ //para percorrer o array primo e comparar qual é o maior
//     if (maiorNumero < primos[index4]) {
//         maiorNumero = primos[index4];
//     }
// }

// let toString = primos.toString(""); //transformando o array em string

// console.log("Os números primos de 1 a " + numero + " são: " + primos + "."); //imprimindo os números primos
// console.log("O maior número primo entre esses é: " + maiorNumero + "."); //imprimindo o maior número entre eles


// let numero = 5;
// let coluna = "";

// for (let index = 1; index <= numero; index += 1) {
//     coluna = coluna + "*";
//     console.log(coluna);
// ;}

// let numero = 5;
// let coluna = "";

// for (let index = 1; index <= numero; index += 1) {
//     coluna = coluna + "*";
// ;}

// for (let index2 = 1; index2 <= numero; index2 += 1){
//     console.log(coluna);
// }



