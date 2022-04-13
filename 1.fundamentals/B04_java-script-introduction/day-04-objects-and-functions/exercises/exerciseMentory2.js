/* Crie uma função que, dado um array de números inteiros, retorne a quantidade de números pares e ímpares no formato: 
{
 pares: 0, 
 ímpares: 0 
} 
*/



function paresImpares (numero) {
    let array = [];
    let resultado = {
        pares: 0,
        impares: 0,
    };

    

    for (index = 0; index <= numero; index += 1){
        array.push(index);
    }

    for (index2 = 0; index2 <= array.length; index2 += 1){
        if (array[index2] % 2 === 0){
            resultado['pares'] += 1;
        } else {
            resultado['impares'] += 1;
        }
    }
    for (let key in resultado) {
        console.log(key + ':', resultado[key]);
    }
    return paresImpares;
}

paresImpares(150);