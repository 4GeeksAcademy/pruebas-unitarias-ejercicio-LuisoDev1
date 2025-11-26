const saludo = (mensaje) => {
    console.log(mensaje);
    return mensaje;
}

const sum = (a,b) => {
    return a + b;
}

console.log(sum(7,3));
console.log("hola");


module.exports = {sum, saludo};