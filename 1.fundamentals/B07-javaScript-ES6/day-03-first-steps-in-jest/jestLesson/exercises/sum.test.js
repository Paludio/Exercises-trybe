const sum = require('./sum');

describe('Testes da função sum', () => {

    test('Testa se a função retorna a soma de a com b', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('Testa se a soma de 5 com 4 é igual a 9', () => {
        expect(sum(4, 5)).toBe(9);
    });

    test('Testa se a soma de 0 com 0 é igual a 0', () => {
        expect(sum(0, 0)).toBe(0);
    });

    test('Testa se a função lança um erro com o parâmetro "5"', () => {
        expect( ()=> sum(4, '5')).toThrow(Error);
    });

    test('Testa se a messagem de erro é "parameters must be numbers"', () => {
        expect( () => sum(4, '5')).toThrowError(new Error('parameters must be numbers'));
    });
});