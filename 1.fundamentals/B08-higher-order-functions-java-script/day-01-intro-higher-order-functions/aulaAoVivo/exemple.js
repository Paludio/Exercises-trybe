const greetingRods = (who) => {
    return `Olá ${who}, tudo bem?`;
}

const countryGreetings = (who) => {
    return `Batarde ${who}, cê tá bão cumpadi?`;
} 

const broGreetings = (who) => {
    return `E aí ${who}, firmeza mano?`;
}

const greeting = (callback) => {
    const who = 'Rods';
    return callback(who);
}

let message = greeting(broGreetings);
console.log(message);