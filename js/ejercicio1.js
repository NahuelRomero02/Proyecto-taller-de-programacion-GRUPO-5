// Ej. 1 : Declare un vector de capacidad que representan los valores de temperatura promedio diaria 
// tempEnero[] registrada en la ciudad de Salta durante el mes de enero.
// a. Mostrar el primer elemento del arreglo.
// b. Mostrar el último elemento del arreglo.
// c. Mostrar la longitud del arreglo recibido por parámetro.
// d. Mostrar un arreglo diasCalidos[] cuyos elementos son los días en los cuales las 
// temperaturas estuvieron por encima del promedio mensual.
// e. Agrega el "promedio" al final del arreglo tempEnero[].
// f. Agrega el "promedio" al principio del arreglo diasCalidos[].

// Creamos el array con sus temperaturas para cada dia de enero
var tempEnero = [25.3, 26.1, 24.8, 25.6, 27.2, 28.4,
     29.1, 28.6, 27.9, 26.7, 25.4, 24.9, 26.3, 27.5, 28.9, 
     29.7, 28.2, 26.8, 25.7, 24.5, 25.8, 27.3, 28.1, 28.7, 
     29.2, 29.8, 29.6, 28.3, 27.1, 26.4, 25.9, 26.5];

// Mostramos el primero valor del array
     var primerValor=tempEnero[0];
     console.log(primerValor);

// Mostramos el ultimo valor del array
     var ultimoValor=tempEnero[tempEnero.length -1];
     console.log(ultimoValor);

// Mostramos la longitud del array atravez de una funcion pasandolo por medio de parametros
    function mostrarLongitud(tempEnero){
        console.log('La longiutd del array es: ' + tempEnero.length)
    }
    mostrarLongitud(tempEnero)

// Sacamos el promedio del array

    function sumarArray(tempEnero){
        sum=0
        for(var i=0; i<tempEnero.length;i++){
            sum+=tempEnero[i];
        }
        return sum
    }
     total=sumarArray(tempEnero);
     resultado=total/tempEnero.length;
     console.log('El promedio del array es: ' + total);

// Una vez tenemos el promedio, si una temperatura es mayor a "resultado", lo agregamos a un nuevo array
var diasCalidos=[];
function obtenerDiasCalidos(tempEnero,resultado){
    
    for(var i = 0;i<tempEnero.length;i++){
        if(tempEnero[i]>resultado){ 
            diasCalidos.push(tempEnero[i]);
        }
    }
    return diasCalidos;
}
obtenerDiasCalidos(tempEnero,resultado);
console.log(diasCalidos);

// Agregamos el promedio al final del arreglo tempEnero

function agregarPromedio(tempEnero,resultado){
    tempEnero.push(resultado);
}
agregarPromedio(tempEnero,resultado);
console.log(tempEnero)

// Agregamos al principio el promedio en el arreglo diasCalidos

function addPromedio(diasCalidos,resultado){
    diasCalidos.unshift(resultado)
}
addPromedio(diasCalidos,resultado)
console.log(diasCalidos)
