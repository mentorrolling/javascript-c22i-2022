//Bucles
// -----------

//While

//mientras se cumple una condición hacer algo
// while (condition) {
//   //acciones
//   //controlemos el bucle
// }

// let vecesASumar = 10; //iterador
// let totalSuma = 0;

// while (vecesASumar > 0) {
//   totalSuma += 10;
//   vecesASumar--;
//   console.log(
//     `Total de la suma: ${totalSuma} | veces quedan por sumar: ${vecesASumar}`
//   );
// }

// console.log(`Total: ${totalSuma}`);

//tarea: calcular la tabla del 2

// let tabla = 5;
// let valor = 1; //iterador

// while (valor <= 10) {
//   console.log(`${tabla} x ${valor} = ${tabla * valor}`);
//   valor++;
// }

//--------------------
//Pokedex
// let pokemon = prompt("Ingrese el nombre del pokemon capturado");
// let pokedex = "";

// while (pokemon) {
//   if (pokedex) {
//     pokedex = pokedex + " | " + pokemon;
//   } else {
//     pokedex = pokemon;
//   }
//   pokemon = prompt("Ingrese el nombre del pokemon capturado");
// }
// console.log(pokedex);

//Do while--------------------
// let vueltas = 0;
// let respuesta = "";

// do {
//   //acciones
//   respuesta = prompt("Ingrese un nombre");
//   console.log(`Hola ${respuesta}! Bienvenid@ 😍`);
//   vueltas--;
// } while (vueltas > 0);

//Tarea
/*
Crear un script tipo trivia que pregunte al usuario la capital de un pais. El usuario tendrá tres intentos, si falla pierde.
*/

// let respuestaCorrecta = "HELSINKI";
// let acierto = false;
// let contador = 3;

// while (contador > 0 && acierto == false) {
//   let respUsuario = prompt("Capital de Finlandia");

//   if (respUsuario.toUpperCase() == respuestaCorrecta) {
//     acierto = true;
//     console.log("MUY BIEN!! ACERTASTE!! 😍");
//   } else {
//     contador--;
//     console.log(`Te quedan ${contador} intentos`);
//   }
// }

// if (acierto == false) {
//   console.error("LO SIENTO PERDISTE...LOSER 😭");
// }

//--------------
//for
// let cantidad = 3;
// for (let i = 0; i < cantidad; i++) {
//   //acciones
//   let nombre = prompt("Ingrese el alias de un superhéroe");
//   console.log(`Bienvenido ${nombre} al equipo! 👍`);
// }

//tablas
// let tablita = parseInt(prompt("Ingrese la tabla a calcular"));

// for (let i = 1; i <= 10; i++) {
//   console.log(`${tablita} x ${i} = ${tablita * i}`);
// }

//multi tablas
// let tabla = null;
// do {
//   tabla = parseInt(prompt("Ingrese la tabla a calcular"));
//   if (tabla) {
//     console.log("==================");
//     console.log(`Tabla del ${tabla}`);
//     console.log("==================");

//     for (let i = 1; i <= 10; i++) {
//       console.log(`${tabla} x ${i} = ${tabla * i}`);
//     }
//   } else {
//     console.log("No es una tabla válida");
//   }
// } while (tabla);

// Tarea segun la cantidad de alumnos ingresada cargar los nombres en una lista y luego mostrar esa lista en consola

//cantidad de alumnos
//lista con los nombres
//mostrar la lista

let cantidadDeAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos"));
let nombre = "";
let lista = "";

if (cantidadDeAlumnos) {
  for (let i = 0; i < cantidadDeAlumnos; i++) {
    nombre = prompt("Ingrese el nombre del alumno");
    if (nombre) {
      lista += `${nombre}\n`;
    } else {
      console.warn("Uno de los datos no fué válido");
    }
  }
  console.log(lista);
} else {
  console.log("La cantidad ingresada no es válida");
}
