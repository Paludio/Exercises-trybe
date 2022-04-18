function primeiroFilhoBody (texto) {
    let paiBody = document.getElementsByTagName('body')[0];

    let filhoH1 = document.createElement('h1');
    filhoH1.innerText = texto;

    paiBody.appendChild(filhoH1);
}


function segundoFilhoBody (className, tag) {
    let paiBody = document.getElementsByTagName('body')[0];

    let filhoMain = document.createElement(tag);
    filhoMain.className = className;

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

    paiMain.appendChild(filhoSection);
}

primeiroFilhoBody('Exercício 5.2 - JavaScript DOM');
segundoFilhoBody('main-content', 'main');
primeiroFilhoMain('center-content', 'section');
primeiroFilhoSection('p');
segundoFilhoMain('left-content', 'section');
terceiroFilhoMain('right-content', 'section');