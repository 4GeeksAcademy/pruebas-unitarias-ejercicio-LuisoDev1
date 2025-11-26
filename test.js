
const { saludo } = require('./app.js');

const { sum } = require('./app.js');

test("la funsion debe devolver hola", () => {
    let miSaludo = saludo("hola");

    expect(miSaludo).toBe("hola");
})

test("add 14 + 9 to equal 23",() => {
    let total = sum(14,9);

    expect(total).toBe(23);
});