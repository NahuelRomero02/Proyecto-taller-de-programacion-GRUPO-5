// Ej. 2 : El argumento "palabras" es un arreglo de strings. Mostrar un string donde todas las palabras estén 
// concatenadas con un espacio entre cada palabra. Ejemplo: ['Hola', 'mundo'] -> ‘Hola Mundo!'.
// a. Utilice push() y concat() y describas sus observaciones.

function addPalabras(palabras){
    var nuevoArray=[];
    for(var i=0; i<palabras.length;i++){
        nuevoArray.push(palabras[i]);
    }
    var resultadoConcatenado=nuevoArray.join(' ');
    return resultadoConcatenado

}
var palabras=['Hola', 'mundo' ,',', 'estoy' ,'programando'];
mostrar=addPalabras(palabras);
console.log(mostrar)

//Lo que puedo observar es que debo utilizar el metodo join para poder 
//concatenar los elementos de un array en una cadena de texto, utilizando un separador especificado
