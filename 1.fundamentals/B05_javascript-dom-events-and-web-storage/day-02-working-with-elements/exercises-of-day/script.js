function primeiroFilhoBody (texto) {
    let paiBody = document.getElementsByTagName('body')[0];

    let filhoH1 = document.createElement('h1');
    filhoH1.innerText = texto;
    filhoH1.className = 'title';

    paiBody.appendChild(filhoH1);
}


function segundoFilhoBody (className, tag) {
    let paiBody = document.getElementsByTagName('body')[0];

    let filhoMain = document.createElement(tag);
    filhoMain.className = className;
    filhoMain.style.backgroundColor = 'purple';

    paiBody.appendChild(filhoMain);
}

function primeiroFilhoMain (className, tag) {
    let paiMain = document.querySelector('.main-content');

    let filhoSection = document.createElement(tag);
    filhoSection.className = className;

    paiMain.appendChild(filhoSection);
}

function primeiroFilhoSection (tag) {
    let paiSection = document.querySelector('.center-content');

    let filhoP = document.createElement(tag);
    filhoP.innerText = 'Vamo que vamo Trybe';

    paiSection.appendChild(filhoP);
}

function segundoFilhoMain (className, tag) {
    let paiMain = document.querySelector('.main-content');

    let filhoSection = document.createElement(tag);
    filhoSection.className = className;

    paiMain.appendChild(filhoSection);
}

function terceiroFilhoMain (className, tag) {
    let paiMain = document.getElementsByTagName('main')[0];

    let filhoSection = document.createElement(tag);
    filhoSection.className = className;
    filhoSection.style.marginRight = 'auto';

    paiMain.appendChild(filhoSection);
}

function imagemSection (className, tag, src) {
    let paiImagem = document.querySelector('.left-content');

    let filhoImagem = document.createElement(tag);
    filhoImagem.src = src;
    filhoImagem.className = className;

    paiImagem.appendChild(filhoImagem);
}

let numeros = ['um', 'dois','três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

function listaNaoOrdenada () {
    let paiSection = document.querySelector('.right-content');
    let listaUl = document.createElement('ul');

    paiSection.appendChild(listaUl);

    let itemLista = document.querySelector('ul');

    for (let index = 0; index < numeros.length; index += 1) {
        let indice = numeros[index];

        let filhoLi = document.createElement('li');
        filhoLi.innerText = indice;

        itemLista.appendChild(filhoLi);
    }
}

function criaTresTags (qtd, tag) {
    let paiMain = document.querySelector('.main-content');

    for (let index = qtd; index > 0; index -= 1) {
        let novaTag = document.createElement(tag);
        novaTag.className = 'description';

        paiMain.appendChild(novaTag);
    }
}

primeiroFilhoBody('Exercício 5.2 - JavaScript DOM');
segundoFilhoBody('main-content', 'main');
primeiroFilhoMain('center-content', 'section');
primeiroFilhoSection('p');
segundoFilhoMain('left-content', 'section');
terceiroFilhoMain('right-content', 'section');
imagemSection ('small-image', 'img', 'https://picsum.photos/200');
listaNaoOrdenada();
criaTresTags(3, 'h3');