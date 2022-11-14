//callbacks

const numeros = [37, 11, 2, 15, 56, 52, 8, 48, 100];

let numerosOrdenados = numeros.sort((a, b) => a - b);

//filter
//crea un nuevo arreglo con los elementos que cumplen la condición dada.
let pares = numeros.filter((numero) => numero % 2 === 0);

//find
//devuelve el valor del primer elemento que cumple la condición dada.
let alumnos = ["Jimena", "Juan", "Nicolás", "Lucas", "Gabriela"];

let resultadoBusqueda = alumnos.find((alumno) => {
  return alumno === "Lucas";
});

let resultadoBusquedaNumeros = numeros.find((numero) => {
  return numero <= 50;
});

//findIndex
let indice = alumnos.findIndex((alumno) => {
  return alumno === "Nicolás";
});

//forEach
alumnos.forEach((alumno) => {
  let nombreMayus = alumno.toUpperCase();
  console.log(`Hola, soy ${nombreMayus}`);
});

//map
//Crea un nuevo arreglo con los resultados del callback aplicado a cada elemento
let numerosDobles = numeros.map((numero) => numero * 2);

//Tarea 1
//Dado 3 arreglos de números unir todos en uno solo y ordenarlos de mayor a menor
let numeros1 = [13, 456, 786, 23, 45];
let numeros2 = [67, 3, 5];
let numeros3 = [90, 1245, 56000];

const tarea1 = () => {
  let numerosParaOrdenar = numeros3.concat(numeros1, numeros2);

  return numerosParaOrdenar.sort((a, b) => a - b).reverse();
};

console.log(tarea1());

/*
Tarea 2
---------
  Filtrar de un arreglo de personas todos los nombres que contengan la letra "m"
*/

let personas = [
  "Joaquín",
  "Daniel",
  "Magdalena",
  "Gonzalo",
  "Armando",
  "Samuel",
  "Valentina",
];

const obtenerNombresPorLetra = (letra) => {
  let nombres = personas.filter((persona) => {
    return persona.toUpperCase().includes(letra.toUpperCase());
  });

  return nombres;
};

// Tarea 3
// ----------
// Tomar una lista de lenguajes de programación y mostrar en consola una lista ordenada con los nombres ordenados alfabéticamente y en mayúsculas sin mutar el arreglo original.

let lenguajes = ["javascript", "python", "c++", "c#", "java", ".net"];

const ordenarLenguajes = () => {
  let lenguajesOrdenados = lenguajes.slice(0);
  lenguajesOrdenados.sort().forEach((lenguaje, index) => {
    console.log(`${index + 1} - ${lenguaje.toUpperCase()}`);
  });
};

//Aplicación de lista de compras

/*
- Agregar un producto a la lista
- Listar los productos de la lista numerados
- Eliminar un producto de la lista por su indice
- Buscar un producto
- Filtrar productos por una letra o palabra
*/

const lista = [];

//agregar un producto
const agregarProducto = () => {};

//listar productos
const listarProductos = () => {};

//borrar producto
const borrarProducto = (producto) => {};

//Buscar un producto
const buscarProducto = (producto) => {};

//filtrar productos
const filtrarProductos = (termino) => {};

//Modificar un producto
const modificarProducto = (producto) => {};

//CRUD
//Create Read Update Delete
