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

// for (let index = 0; index < 6; index += 1) {
//     let sorteio = Math.floor(Math.random() *60) +1;
//     numerosSorteados.push(sorteio);
//     numerosSorteados.sort();
// }


let meuJogo = [8, 1, 54, 20, 17, 36]; //Meus números
let qtdSorteios = 0; //contador de sorteios
let numerosSorteados = []; // array dos números que vão ser sorteados

meuJogo.sort(); //deixar o array em ordem "crescente" (descobri que é igual quando é com pasta kk ele olha o primeiro número/string tipo se tiver 1, 8, 12, 20 vai ficar 1, 12, 20, 8)

for (index3 = 0; index3 <= 50063860; index3 +=1 ){ // for para repetir os jogos "50063860" é a chance da pessoa de ganhar
    qtdSorteios = qtdSorteios + 1; // para contar a quantidade de sorteios
    numerosSorteados.sort(); // ordenar o array dos números sorteados

    if (meuJogo === numerosSorteados) { // pra ver se eu ganhei
        console.log("Parabéns após " + qtdSorteios + "você ganhou!"); // vai mostrar depois de quantos sorteios ganhei
        break;
    } else if (numerosSorteados.length <= 6 && numerosSorteados.length > 0) { // aqui é uma condição pra limpar o array...
            console.log(numerosSorteados); // mostrar no console os números que foram sorteados
            for (let index4 = numerosSorteados.length; index4 > 0; index4 -= 1) { //um for com array.pop pra exluir os números
                numerosSorteados.pop();
            }
        } else { // aqui sorteia novos 6 números
        for (let index = 0; index < 6; index += 1) {
            let sorteio = Math.floor(Math.random() *60) +1;
            numerosSorteados.push(sorteio);
        }
    }
}