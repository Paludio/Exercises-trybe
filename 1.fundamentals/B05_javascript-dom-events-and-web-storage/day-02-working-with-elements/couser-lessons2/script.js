let container = document.getElementById('primeiroFilho');

let newSection = document.createElement('section');

newSection.innerText = 'gosto de tentar';

container.appendChild(newSection);

let conteiner2 = document.getElementById('elementoOndeVoceEsta');

let newSection2 = document.createElement('li');

newSection2.innerText = 'eu sou filho do elementoOndeVoceEsta';

conteiner2.appendChild(newSection2);

let container3 = document.getElementById('primeiroFilhoDoFilho');

let newSection3 = document.createElement('article');

newSection.innerText = 'Vou tentar trocar a cor';

newSection3.style.color = 'blue';

conteiner2.appendChild(newSection3);

document.getElementsByTagName('article')