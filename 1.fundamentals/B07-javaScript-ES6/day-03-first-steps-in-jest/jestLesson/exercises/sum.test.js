const {sum, myRemove} = require('./sum');

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

describe('Testar a função myRemove', () => {
    test('Verificar se myRemove([1, 2, 3, 4], 3), retorna um array', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toBeTruthy();
    });

    test('Verificar se myRemove([1, 2, 3, 4], 3), não retorna [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });

    test('Verificar se myRemove([1, 2, 3, 4], 5), retorna [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
});

