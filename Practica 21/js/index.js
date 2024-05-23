let resultado = document.getElementById('resultado');

let asignar = (valor) => resultado.value += valor;


let calcular = () => {
    if(resultado.value != '')
        resultado.value = eval(resultado.value);
    else
        alert('Ingrese un valor');
}

let limpiar = () => resultado.value = ''; 