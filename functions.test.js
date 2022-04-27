const functions = require('./functions')

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});
test('Adds 2 + 3 to equal 4', () => {
    expect(functions.add(2, 3)).toBe(5);
});
test('Adds 2 + 22 to equal 24', () => {
    expect(functions.add(2, 22)).toBe(24);
});