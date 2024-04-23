let hora = 14;
if(hora < 12) {
    console.log("Bueos dias");
} else if(hora < 19) {
    console.log("Buenas tardes");
} else {
    console.log("Buenas noches");
}

let diaDeLaSemana = new Date().getDay();

console.log(diaDeLaSemana);

switch(diaDeLaSemana) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    default:
        console.log("Día no válido");
}