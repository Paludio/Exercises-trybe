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

let jogo = [1, 3, 23, 54, 59, 23];
let sorteio = [];

for (index = 0; index < 6; index += 1) {
    numeroAleatorio = Math.floor(Math.random() * 60) + 1;
    sorteio.push(numeroAleatorio);
}




console.log(sorteio);

