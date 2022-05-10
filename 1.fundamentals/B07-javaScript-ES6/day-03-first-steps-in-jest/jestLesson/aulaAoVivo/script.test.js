const { sum, somaNumero } = require('./script');

describe('Teste da função sum', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    }); 
    
    test('Somando 0 + 0 igual a 0', () => {
        expect(sum(0, 0)).toBe(0);
    });
    
    test('Somando 0.5 + 0.8 igual a 1.3', () => {
        expect(sum(0.5, 0.8)).toBeCloseTo(1.3);
    });
});
 
describe('Teste da função somaNumero', () => {
    it('Espera que a soma de 1 seja igual a 1', () => {
        expect(somaNumero(1)).toBe(1);
    });
    
    it('Espera que a soma de 3 seja igual a 6', () => {
        expect(somaNumero(3)).toBe(6);
    });
    
    it('Espera que a soma de 5 seja igual a 15', () => {
        expect(somaNumero(5)).toBe(15);
    });
});

