// let numero = 3;

// for (index = numero - 1; index > 0; index -= 1) {
//     numero = numero * index;
// }
// console.log(numero);

// let palavra = "trybe";
// let palavraInvertida = palavra.split("").reverse().join("");

// console.log(palavraInvertida);

let palavra = "escola";
let array1 = [];
let array2 = [];

for (let index = 0; index < palavra.length; index += 1) {
    array1.push(palavra[index]);
    array2.unshift(array1[index]);
}

let toString = array2.toString("");

console.log(toString.replace(/,/g, ""));