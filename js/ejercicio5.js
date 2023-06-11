// Ej. 5 : Declarar un array con los integrantes del grupo y sus notas registradas en la materia. Por ejemplo: 
// grupoTP = [‘Juan Perez’, 8, ‘Samuel Lopez’, 7.80, ‘Maria Gonzalez’, 5.34, ‘Analía Tolaba’, 3.25].
// a. Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
// b. Muestra la nota más alta y la más baja.

const grupoTP=['Romero Nahuel',9,'Quiroz Alvaro',9.25,'Copa Pablo',9.5,'Antonello Octavio',8.75];

function iterarElementos(notas){
    let sum=0;
    let cantidadNotas=0;
    for(var i=1;i<notas.length;i+=2){
        sum+=notas[i];
        cantidadNotas++;
    } 
    let promedio=sum/cantidadNotas;
    return promedio;
}
let promedioNotas=iterarElementos(grupoTP)
console.log('El promedio de notas es: ' + promedioNotas);

function mostrarNotas(notas){
    let notaMayor=0;
    let notaMenor=Infinity;
    for(var i=1;i<notas.length;i+=2){
        if(notaMayor<notas[i]){
            notaMayor=notas[i];

        } if(notas[i]<notaMenor){
            notaMenor=notas[i];
        }

    }
    return{
        menor: notaMenor,
        mayor: notaMayor
    }
}
const nota=mostrarNotas(grupoTP);

console.log('la nota mayor es: ' + nota.mayor);
console.log('la nota menor es: ' + nota.menor);
