// let diasDaSemana = {
//     1: 'domingo',
//     2: 'segunda',
//     3: 'terça',
//     4: 'quarta',
//     5: 'quinta',
//     6: 'sexta',
//     7: 'sábado',
//     };
    
//     // diasDaSemana.[1]; // SyntaxError: Unexpected number
//     console.log(diasDaSemana['1']); // domingo

// let conta = {
//     agencia: '0000',
//     banco: {
//       cod: '012',
//       id: 4,
//       nome: 'TrybeBank',
//     },
//   };
  
//   let infoDoBanco = 'banco';
//   console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
//   console.log(conta[infoDoBanco]['nome']); // TrybeBank
  
//   console.log(conta.agencia); // 0000
//   console.log(conta['agencia']); // 0000
  
//   console.log(conta.banco.cod); // 012
//   console.log(conta['banco']['id']); // 4

// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: {
//         golden: 2,
//         silver: 3,
//         bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018], 
//     }
// }

// console.log('A jogadora ' + player.name + ' ' + player.lastName + " tem " + player['age'] + " anos." );

// console.log('A jogadora ' + player.name + ' ' + player.lastName + " foi eleita a melhor do mundo por " + player.medals.bestInTheWorld.length + " vezes.");

// console.log('A jogadora possui ' + player.medals['golden'] + ' medalhas de ouro ' + ' e ' + player.medals['silver'] + ' medalhas de prata.');

// let car = {
//     type: 'Fiat',
//     model: '500',
//     color: 'white',
//   };
  
//   for (let index in car) {
//     console.log(index, car[index]);
//   }

// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };

//   for (let index in names) {
//       console.log('Olá ' + names[index])
//   }

// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };

//   for (let index in car) {
//       console.log(index, car[index]);
//   }

let statusCarro = "Desligado"
let aceleracao = 0;
let rotacaoVolante = 0;

function ligarDesligar() {
    if (statusCarro === "Desligado") {
        statusCarro = "Ligado";
    } else {
        statusCarro = "Desligado";
    }
    console.log(statusCarro);
}

function acelerar(incremento) {
    aceleracao = aceleracao + incremento;
    console.log("Acelerando a " + aceleracao + "m/s²");
}

function frear(decremento) {
    aceleracao = aceleracao - decremento;
    console.log("desacelerando a " + aceleracao + "m/s²");
}

function girarVolante(anguloRotacao) {
    rotacaoVolante = anguloRotacao;

    console.log(rotacaoVolante + "°");
}

ligarDesligar();
acelerar(20);
girarVolante(-45);
frear(5);
girarVolante(0);
