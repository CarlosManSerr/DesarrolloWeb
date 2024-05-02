let lista = document.getElementById("lista");
let texto = "Hola mi nombre es Carlos, y voy a cumplir 18 años";
console.log(texto);

lista.innerHTML = texto;

texto = 'Esta es otra cadena';

lista.innerHTML = texto;

texto = `Esta es otra forma`;

let text = `Cadena multilinea
    La Salle
    Alumnos 301
    ESTA SEMANA COMIENZAN LOS examenes del 2do parcial
    Suerte!
`;

console.log(text);

let a = 5;
let b = 10;

let resultado = `El resultado de la suma de ${a} + ${b} es: ${a + b}
    La multiplicación de ${a} * ${b} es: ${a * b}`;
console.log(resultado);
lista.innerHTML = resultado;

let persona = 'Pablo';
let edad = 16;

function miFuncion(cadenas, personaX, edadExp){
    let resultado = ``;
    cadenas += personaX + ' Edad:' + edadExp + ' años';
    console.log(cadenas);
}

miFuncion("Nombre:",persona,edad);

let resultado2 = `El nombre de la persona es ${persona} y su edad es de ${edad} años`
console.log(resultado2);

function mostrarNombre(name){
    console.log(name);
    return name;
}

let resultado3 = mostrarNombre(`Hola mi nombre es raul`);

let titulo = "Ganadores de los Oscares 2024";
let cantantes = ["Billie Eilish", "Lady Gaga", "Adele"];
let cadenaHTML = `<h1>${titulo}</h1>`;

cadenaHTML += `<ul>`;
for(let cantante of cantantes){
    cadenaHTML += `<li>${cantante}</li>`;
}
cadenaHTML += `</ul>`;

lista.innerHTML = cadenaHTML;