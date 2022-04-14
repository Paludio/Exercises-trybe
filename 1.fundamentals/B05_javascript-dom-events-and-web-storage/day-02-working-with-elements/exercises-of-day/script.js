let h1 = document.querySelector('body');

function setH1 (tag, conteudo) {
    let titulo = document.createElement(tag);
    titulo.innerText = conteudo;
    h1.appendChild(titulo);
}

setH1('h1', 'Exercício 5.2 - JavaScript DOM');