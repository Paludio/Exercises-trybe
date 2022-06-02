const url = 'https://api.coincap.io/v2/assets';

const append = (data) => {
  const ul = document.getElementById('moedas');

  data.forEach((element) => {
    const li = document.createElement('li');
    const div = document.createElement('div');
    const toFix = parseFloat(element.priceUsd, 10).toFixed(2);


    div.innerHTML = `${element.name} (${element.symbol}): $ ${toFix}`

    li.appendChild(div);
    ul.appendChild(li);
  });
};

const arrayCripto = () => {
  fetch(url).then((response) => response.json()).then((data) => {
    const arrayData = data.data;
    const newArray = [];
    arrayData.forEach((cripto) => {
      if (newArray.length <= 9) newArray.push(cripto);
    });
    append(newArray);
  })
};

window.onload = arrayCripto();