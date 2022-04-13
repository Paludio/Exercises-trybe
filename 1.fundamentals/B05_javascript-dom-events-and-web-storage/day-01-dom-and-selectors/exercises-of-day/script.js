       /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 
 Crie uma função que mude a cor do quadrado vermelho para branco.
 
 Crie uma função que corrija o texto da tag <h1>.
 
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */
function textoP () {
    document.getElementsByTagName('p')[0].innerText = 'Eu me vejo formado na trybe.';
}

function cor () {
    document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109)';
}

function corQuadrado () {
    document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white';
}

function mudarH1 () {
    document.getElementsByTagName('h1')[0].innerText = 'Exercício 5.1 - JavaScript';
}

function upperCase () {
     let upper = document.getElementsByTagName('p');
     for (let i = 0; i < upper.length; i += 1){
         upper[i].innerText = upper[i].innerText.toUpperCase();
     }
     return upper;
 }

function exibir () {
    let conteudo = document.getElementsByTagName('p');
     for (let i = 0; i < conteudo.length; i += 1){
         console.log(conteudo[i])
     }
     return conteudo;
}
textoP();
cor();
corQuadrado();
mudarH1();
upperCase();
exibir();
upperCase();