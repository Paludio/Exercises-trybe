let h1 = document['body'];

function setH1 (tag, content) {
    let title = document.createElement(tag);
    title.innerText = content;
    h1.appendChild(title);
}

setH1('h1', 'Exercício 5.2 - JavaScript DOM');

//-------------------- exercise 1 -----------------------------

let main1 = document['body'];

function setMain (tag, features) {
    let contentMain = document.createElement(tag);
    contentMain.className = features;

    main1.appendChild(contentMain);
}

setMain('main', 'main-content');