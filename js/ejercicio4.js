// Ej 4: Método de Búsqueda Secuencial: (Tomando los arrays del Ej. 1)
// a. Muestra el primer día en los que su temperatura promedio del dia fue igual al promedio 
// mensual. Qué ciclo utilizó? Justifique.
// b. Muestra el o los días en los que su temperatura promedio fue igual al promedio mensual.

var tempEnero = [25.3, 26.1, 24.8, 25.6, 27.2, 28.4,
    29.1, 28.6, 27.9, 26.7, 25.4, 24.9, 26.3, 27.5, 28.9, 
    29.7, 28.2, 26.8, 25.7, 24.5, 25.8, 27.3, 28.1, 28.7, 
    29.2, 29.8, 29.6, 28.3, 27.1, 26.4, 25.9, 26.5];

    function sumarArray(tempEnero){
        sum=0
        for(var i=0; i<tempEnero.length;i++){
            sum+=tempEnero[i];
        }
        return sum
    }
     total=sumarArray(tempEnero);
     resultado=total/tempEnero.length;
    
     var primerDia = -1;

     for(var i =0;i<tempEnero.length;i++){
        if(tempEnero[i]===resultado){
            primerDia=i;
            break
        }
     }
     if(primerDia !== -1){
        console.log('El primer día con temperatura igual al promedio mensual es el día ' + (primerDia + 1));
     } else{
        console.log('No se encontro ningun dia con la temperatura igual al promedio')
     }
// Utilize un ciclo for para reccorer cada elemento del array.
