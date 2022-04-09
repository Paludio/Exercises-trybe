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

let array = ['java', 'javascript', 'python', 'html', 'css'];
let comparador;
let comparador2 = "";
let comparador3 = "";

for (let index = 0; index < array.length; index += 1) {
    comparador = array[index];

    if (comparador.length >= comparador2.length) {
        comparador2 = array[index];
    } else {
        comparador3 = array[index];
    }
}

console.log("A string com maior números de letra é: " + comparador2);
console.log("A string com menor números de letra é: " + comparador3)