//Array o Arreglos
//listas
let alumnos = ["Jimena", "Juan", "Nicolás", "Lucas", "Gabriela"];

//Mostrar un elemento
console.log(alumnos[2]);

//Obtener la cantidad de elementos
console.log(alumnos.length);

//mostrar el último elemento
console.log(alumnos[alumnos.length - 1]);
console.log("Obteniendo elementos con at:", alumnos.at(-1));

//Concatenar string con arreglo
console.log(`Los alumnos más copados son: ${alumnos.join(", ")}`);

//Iterar un arreglo
for (let i = 0; i < alumnos.length; i++) {
  console.log(`Hola soy ${alumnos[i]} `);
}

//Agregar elementos en un arreglo
alumnos.push("Renzo", "Facundo"); //al final
alumnos.unshift("Joaquin"); //al principio

//Eliminar elementos
alumnos.pop(); //al final
alumnos.shift(); //al principio

//Obtener el índice o posición
let pos = alumnos.indexOf("Lucas");

//Saber si un elemento está en el arreglo
console.log(alumnos.includes("Jimena"));

//Eliminar un elemento según su posición
alumnos.splice(2, 1);

//Agregar elementos desde una posición
alumnos.splice(1, 0, "Facundo", "Gonzalo");

//modificar elementos
alumnos.splice(4, 2, "Ivan", "Rocio");

//nuevo arreglo
let alumnos2 = ["Alfredo", "Guillermo", "Rosita", "Rupertina"];

//Concatenar arreglos
let comision = alumnos.concat(alumnos2);

//Ordenar un arreglo alfabéticamente
console.log(comision.sort());

//ordenar arreglo en reversa
console.log(comision.reverse());

//Extraer un nuevo arreglo
let ausentes = comision.slice(4, 7);

//ENIGMA UNIVERSAL
console.log(["🥚", "🐔"].sort());

//Tarea 1

let frase = "La sonrisa es la mejor respuesta para una mirada";

let palabras = frase.toLowerCase().split(" ");
console.log(`La cantidad de palabras en la frase es de ${palabras.length}`);

console.log(`La primera palabra es "${palabras.at()}"`);

console.log(`La última palabra es "${palabras.at(-1)}"`);
let palabrasReverse = palabras.reverse();
console.log(palabras.sort());
console.log(palabras.sort().reverse());

//tarea 2
let lista = [23, 45, 78, 96, 145, 745];
let numero = Number(prompt("Ingrese un número"));

if (lista.includes(numero)) {
  console.log("Adivinaste el número 👍");
} else {
  console.log("El número no existe en la lista 😭");
}

// for(let i=0; i<lista.length; i++){
// if(numero==lista[i]){
// console.log('Adivinaste el número 👍')
// }

// }
// do {
//   let numero=Number(prompt('Ingrese un número'))

//   contador++

// } while (contador<lista.length);
