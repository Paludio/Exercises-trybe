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

        let arrayWord = word.split("");
        let arrayAnding = ending.split("");
        let contador = 0;
        let prova;

        for (index  = arrayAnding.length; index > 0; index -= 1){ //aqui é uma repetição combase no length do ending (ultimas letras)
            if (arrayAnding[arrayAnding.length -1] === arrayWord[arrayWord.length -1]){ //para comparar o final dos 2 array
                contador += 1; //se forem iguais soma 1.
            }
            arrayAnding.pop();//esses 2 pop apaga o ultimo valor do array
            arrayWord.pop();
        }
        
        arrayAnding = ending.split("");//para reiniciar o length do array ending já que eu apaguei ele no for em cima kk
        
        if (contador == arrayAnding.length){ //se o valor do contador for igual ao valor do length do anding significa que as letras são iguais
            prova = true;
        } else {
            prova = false;
        }
    console.log(prova);
    return finalWord;
 }

 finalWord("helicoptero", "tero");