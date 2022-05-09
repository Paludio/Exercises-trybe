const verifica = (value1, value2) => {
    if (value1 === '' || value2 === '') {
        throw new Error('Existe um campo vazio!');
    } else if (isNaN(value1) || isNaN(value2)) {
        throw new Error('Insira somente números!');
    }
}

function sum() {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    const result = parseInt(value1) + parseInt(value2);

    try {
        verifica(value1, value2);
        document.getElementById('result').innerHTML = `Resultado: ${result}`;
        document.getElementById('value1').value = '';
        document.getElementById('value2').value = '';
    } catch (error) {
        document.getElementById('result').innerHTML = error.message;
        document.getElementById('value1').value = '';
        document.getElementById('value2').value = '';
        console.error(error);
    }
}


window.onload = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', sum);
}