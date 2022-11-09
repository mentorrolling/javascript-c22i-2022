//funciones

//Procedimientos encapsulados

// function <nombre>(<parametros>){

//   //instrucciones
// }

//Tipos
//funciones declarativas
let nombre = "Santiago";
let apellido = "Gonzalez";

function saludarPersona(param1, param2) {
  console.log(`Hola ${param1} ${param2}`);
}

saludarPersona("pepito", "calamardo");

//función con parámetros por defecto
function sumarValores(valor1 = 10, valor2 = 20) {
  if (isNaN(valor1) || isNaN(valor2)) {
    //no es un numero
    console.warn("Alguno de los valores no es un número");
  } else {
    console.log(`${valor1} + ${valor2} = ${valor1 + valor2} `); //3 + 2
  }
}

//funciones anónimas o de expresión
const saludarAlumno = function (nombre = "desconocido") {
  console.log(`Bienvenid@ ${nombre} 👍`);
};

saludarAlumno("José");

//Ejercicio
let valor1 = 3;
let valor2 = 55;
const calculadora = function (operador) {
  switch (operador) {
    case "+":
    case "suma":
      console.log(`${valor1} + ${valor2} = ${valor1 + valor2} `);
      break;
    case "-":
    case "resta":
      console.log(`${valor1} - ${valor2} = ${valor1 - valor2} `);
      break;
    case "x":
    case "multiplicación":
      console.log(`${valor1} x ${valor2} = ${valor1 * valor2} `);
      break;
    case "/":
    case "división":
      console.log(`${valor1} / ${valor2} = ${valor1 / valor2} `);
      break;
    default:
      console.warn("La operación ingresada no existe");
      break;
  }
};

//Diferencias entre declarativas y anónimas

// calcularDescuento(3500, 25);
// calcularDescuento2(3500, 25);

function calcularDescuento(precio, descuento = 15) {
  let descuentoCalculado = 100 - descuento; //100 - 15
  let montoConDescuento = (precio * descuentoCalculado) / 100;

  console.log(`El importe a abonar es de ${montoConDescuento}`);
}

const calcularDescuento2 = function (precio, descuento = 15) {
  let descuentoCalculado = 100 - descuento; //100 - 15
  let montoConDescuento = (precio * descuentoCalculado) / 100;

  console.log(`El importe a abonar es de ${montoConDescuento}`);
};

//return
//Detiene la ejecución
// Devuelve un resultado o un valor

const calcularDescuentoReturn = function (precio, descuento = 15) {
  let descuentoCalculado = 100 - descuento; //100 - 15
  let montoConDescuento = (precio * descuentoCalculado) / 100;

  return montoConDescuento;
};

console.log("El precio con descuento es de $", calcularDescuentoReturn(400));

// function cubo(num) {
//   return Math.pow(num, 3);
// }

const cubo = function (num) {
  return Math.pow(num, 3);
};

//Funcion de flecha o Arrow Function
const cuboArrow = (num) => Math.pow(num, 3);

const calculadoraArrow = (valor1, valor2, operador) => {
  switch (operador) {
    case "+":
    case "suma":
      return `${valor1} + ${valor2} = ${valor1 + valor2}`;
    case "-":
    case "resta":
      return `${valor1} - ${valor2} = ${valor1 - valor2}`;
    case "x":
    case "multiplicación":
      return `${valor1} x ${valor2} = ${valor1 * valor2}`;
    case "/":
    case "división":
      return `${valor1} / ${valor2} = ${valor1 / valor2}`;
    default:
      return "La operación ingresada no existe";
  }
};

//SCOPE Global
let heroe = "Superman";

const presentarHeroe = () => {
  //SCOPE local
  let heroe = "Batman";

  return `Bienvenido ${heroe}`;
};

//Tarea 1
/*
Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
- A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
*/

const examinarCadena = (frase) => {
  if (frase === frase.toUpperCase()) {
    return "La frase está en mayúsculas";
  }

  if (frase === frase.toLowerCase()) {
    return "La frase está en minúsculas";
  }

  return "La frase tiene mayúsculas y minúsculas";
};
