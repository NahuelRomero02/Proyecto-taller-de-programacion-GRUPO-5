//Ej. 6 : Cargar en un array, una lista de cantidad desconocida con códigos no nulos (el último código de la 
//    lista de cero), correspondientes a artículos de comercio. Luego buscar un código (COD) requerido por 
//    el usuario y mostrar la posición de la primera carga en el vector. En caso de no encontrarlo, mostrar 
//    “Código no cargado”.

let lista=[823,213,532,552,934,111,555,9892];
var numIngresado=prompt('Ingrese el codigo: ')
function encontrarCodigo(lista,numIngresado){
    for(var i=0;i<lista.length;i++){
        if(lista[i]==numIngresado){
            console.log('El valor ingresado esta en la posicion: '+ (i+1));
            return;
        }
    }
    console.log('El codigo no existe');
}
encontrarCodigo(lista,numIngresado);
