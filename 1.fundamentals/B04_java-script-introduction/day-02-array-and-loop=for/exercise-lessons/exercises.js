// // let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// // let menuServices = menu.indexOf('Serviços');

// console.log(menuServices);

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let position = menu.indexOf('Portfólio');

// console.log(position);

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

// menu.push('Contato');

// console.log(menu);

// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

// for (index = 0; index < groceryList.length; index += 1) {
//     console.log(groceryList[index]);
// }

// let names = ['João', 'Maria', 'Antônio', 'Margarida'];

// for (let index of names) {
//     console.log(index);
// }

let meuJogo = [8, 1, 54, 20, 17, 36];
let numerosSorteados = [];

meuJogo.sort();

for (let index = 0; index < 6; index += 1) {
    let sorteio = Math.floor(Math.random() *60) +1;
    numerosSorteados.push(sorteio);
    numerosSorteados.sort();
}


console.log(numerosSorteados);