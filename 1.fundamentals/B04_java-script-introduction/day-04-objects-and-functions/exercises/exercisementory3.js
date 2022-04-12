/*  Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word. 

Valor de teste: 'trybe' e 'be'
valor esperado no retorno da função: true
Dica: Use o SPLIT. */

// function finalWord (word, ending) {
//    let palavras = {
//        array1: word.split(""),
//        array2: ending.split(""),
//    };

//    for (let index = palavras.array2.length; index >= 0; index -= 1){
//        for (let index2 = palavras.array1.length; index2 >= palavras.array2.length; index2 -= 1){

//        }
//    }
// }

// finalWord("pablo", "lo");

// ------------------------------------------------------------------------


function finalWord (word, ending) {

        let array1 = word.split("");
        let array2 = ending.split("");
        let prova = true;
 
    for (let index = array2.length; index >= 0; index -= 1){
        for (let index2 = array1.length; index2 >= array2.length; index2 -= 1){
            if (array1[index2] === array2[index]){
                prova = true;
            } else {
                prova = false;
            }
        }
    }
    
    console.log(prova);
    return finalWord;
 }

 finalWord("pablo", "lo");