const disconto20 = (total) => total *0.2;

const disconto20Reais = (total) => 20.0;

const checkout = (itens, callback) => {
    let total = 0;
    for(const item of itens) {
        total += item;
    }
    total -= callback(total);
    return total;
}

const itens = [5, 10, 15, 20];

let total = checkout(itens, disconto20);

console.log(total)