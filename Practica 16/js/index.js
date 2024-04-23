let a = 10;
let b = 20;

let sumar = a + b;
console.log(sumar);

let restar = a - b;
console.log(restar);

let multiplicar = a * b;
console.log(multiplicar);

let dividir = a / b;
console.log(dividir);

let modulo = a % b;
console.log("El residuo de a%b es:", modulo);

let mayor = a > b;
console.log("a es mayor que b:", mayor);

let menor = a < b;
console.log("a es menor que b:", menor);

let mayorIgual = a >= b;
console.log("a es mayor o igual a b:", mayorIgual);

let menorIgual = a <= b;
console.log("a es menor o igual a b:", menorIgual);

let igual = a == b;
console.log("a es igual a b:", igual);

a = -50;
b = 10*(-1);

if(a != b){
    console.log("a es diferente de b");
} else {
    console.log("a es igual a b");
}

let comparacion = a > b ? "a es mayor que b" : "a es menor o igual que b";
console.log(comparacion);

let x = 100;
let y = 200;

function multiplicarNum(x,y){
    return x * y;
}

let resultado = multiplicarNum(x,y);
console.log("El resultado de la multiplicación es:", resultado);

function areaCirculo (radio) {
    // const PI = 3.1416;
    // let area =  PI * (radio ** 2);
    let area = Math.PI * Math.pow(radio,2);
    return area;
}

console.log("Área del círculo: ", areaCirculo(10));

function toCelsius(farenheit) {
    return (5/9) * (farenheit - 32);
}

let temp = toCelsius(77);
console.log("Temperatura en °C:",temp);

function dupEdad(edad) {
    return (edad * 2);
}

console.log("Edad por 2:", dupEdad(19));

let edad2 = (edad2) => {
    return (edad2 * 2);
}

console.log("Edad duplicada:", edad2(19));