// let n1 = 5;
// let n2 = 6;
// const n3 = 456;
// const n4 = 986;
// const n5 = 844;
// const sinal = true;
// let result ="";

// console.log(n1 + n2);
// console.log(n1 - n2);
// console.log(n1 * n2);
// console.log(n1 / n2);
// console.log(n1 % n2);

// if (n3 > n4) {
//     result = "n3 maior";
// } else {
//     result = "n4 maior";
// }
// console.log(result);

// if (n3 > n4 && n3 > n5) {
//     result = "n3 é maior";
// } else if (n4 > n3 && n4 > n5) {
//     result = "n4 é maior";
// } else {
//     result = "n5 é maior";
// }

// console.log(result);

// if (sinal = true) {
//     result = "positivo";
// } else if (sinal = false) {
//     result = "negativo";
// } else {
//     result = "zero";
// }

// console.log(result)

// const a1 = 20;
// const a2 = 10;
// const a3 = 0;
// let result = true;

// if (a1 + a2 + a3 === 180) {
//     console.log(result);
// } else if (a1 + a2 + a3 > 180 || a1 + a2 + a3 < 180 && a1 + a2 + a3 > 0) {
//     console.log(!result);
// } else if (a1 + a2 + a3 < 0) {
//     console.log("Entrada inválida.");
// } else {
//     console.log("Erro");
// }

let peca ="REi";
let result = peca.toLowerCase();

switch (result) {
    case "peão":
        console.log("Se move para frente uma casa por vez. No primeiro lance pode se mover duas");
        break;

    case "torre":
        console.log("Se move em angulos retos sem limites de casas");
        break;

    case "cavalo":
        console.log("Se move em 'l' sendo duas casas para frente e 1 para o lado");
        break;

    case "bispo":
        console.log("Se move pelas diagonais");
        break;

    case "rei":
        console.log("Se move para qualquer direção uma casa por vez");
        break;

    case "rainha":
        console.log("se move em qualquer direção sem limites de casa")
        break;

    default:
        console.log("Peça inexistente");
}