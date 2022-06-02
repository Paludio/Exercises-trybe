// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const jokeInDom = (data) => {
  const h2 = document.getElementById('jokeContainer');

  const divJoke = document.createElement('div');
  
  divJoke.innerHTML = data.joke;

  h2.appendChild(divJoke);
}

const fetchJoke = () => {
  const myObject = {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
  };

  fetch(API_URL, myObject)
      .then(response => response.json())
      .then((data) => {
        const joke = { joke: data.joke, };

      jokeInDom(joke);
      });
};

window.onload = () => fetchJoke();