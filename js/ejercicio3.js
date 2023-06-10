// Ej. 3 : Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así 
// sucesivamente. Realiza un algoritmo donde dado el número del día de la semana, retorne: "Es fin de 
// semana" si el día corresponde a "Sábado" o "Domingo", y "Es día de Clases" en caso contrario.

// creamos un array con objetos numero y dia, con sus respectivos valores

var dias = [
    { numero: 1, dia: 'Domingo' },
    { numero: 2, dia: 'Lunes' },
    { numero: 3, dia: 'Martes' },
    { numero: 4, dia: 'Miércoles' },
    { numero: 5, dia: 'Jueves' },
    { numero: 6, dia: 'Viernes' },
    { numero: 7, dia: 'Sábado' }
  ];
  
  var numIngresado = parseInt(prompt('Ingrese un número del 1 al 7 para representar un día de la semana:'));
  obtenerDia(dias, numIngresado);
  
  function obtenerDia(dias, numIngresado) {
    var encontrado = false;
  
    for (var i = 0; i < dias.length; i++) {
      if (numIngresado === dias[i].numero) {
        encontrado = true;
        break;
      }
    }
  
    if (encontrado) {
      if (numIngresado === 1 || numIngresado === 7) {
        console.log('Es fin de semana');
      } else {
        console.log('Es día de clases');
      }
    } else {
      console.log('El número ingresado no corresponde a ningún día de la semana');
    }
  }
  