const sum = require('./script');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
}); 

test('Somando 0 + 0 igual a 0', () => {
    expect(sum(0, 0)).toBe(0);
});

test('Somando 0.5 + 0.8 igual a 1.3', () => {
    expect(sum(0.5, 0.8)).toBeCloseTo(1.3);
}); 