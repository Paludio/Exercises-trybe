function primeiroFilhoBody (texto) {
    let paiBody = document.getElementsByTagName('body')[0];

    let filhoH1 = document.createElement('h1');
    filhoH1.innerText = texto;

    paiBody.appendChild(filhoH1);
}

primeiroFilhoBody('Exercício 5.2 - JavaScript DOM');