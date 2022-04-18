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

primeiroFilhoBody('Exercício 5.2 - JavaScript DOM');
segundoFilhoBody('main-content', 'main');
primeiroFilhoMain('center-content', 'section');