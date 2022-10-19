// console.log("Esto es un mensaje en consola");

// console.log(2 * 5);

//variables
//declarar una variable
//inicializar la variable
var nombre = "Josefina";
// console.log(nombre);

let apellido = "Gonzalez";

console.log(apellido);

const pi = 3.14;

let suma = 0;
const num1 = 35;
const num2 = 90;
suma = num1 + num2;

console.log(suma);

//nombre de variables
// -----------------------
// 1 Caracteres aceptados
//letras del alfabeto en ingles mayúsculas como minúsculas
//números del 0 al 9
//signos $ y _

//2 no podemos iniciar con un número

//3 no se pueden usar palabras reservadas

//camelCase variables comunes
let sumaDeNumerosPares = 0;

//SNAKE_CASE variable de solo lectura
const LLAVE_DE_SEGURIDAD = "adfg5678$";

//UpperCamelCase
let AlumnosDestacados = "";

//tipos de datos

//number
let numeroPrincipal = 34;
let numeroSEcundario = -52;
let numeroDecimal = 56.89;

//String
let academia = "RollingCode";
let numeroString = "22";
let mensaje = "El número es: ";
let vacio = "";

//Boolean
let comprar = true;
let comerEnCasa = false;

//null
let billeteraDePablo = null;

//undefined
let cajaDeAhorros;

//Arreglos o Arrays
let alumnos = ["Jimena", "Juan", "Alberto"];
let numeros = [234, 466, 789, 0];
let cualquiera = ["Pablito", 456, true, ["perro", "gato", "jirafa"]];

//Objetos Object
let persona = {
  nombre: "Agustina",
  apellido: "Gonzalez",
  edad: 23,
  domicilio: ["juan b justo", 45, "Madrid"],
};

//Operadores

//aritméticos
let numero1 = 22;
let numero2 = 45.78;

suma = numero1 + numero2;
console.log(numero1 - numero2);
console.log(numero1 * numero2);
console.log(numero1 / numero2);
console.log(numero1 % numero2);
//hacer un programa que me diga si un número es par

//unitarios
++numero1;
--numero2;

//Relacionales
console.log(numero1 == numero2); //igualdad
console.log(numero1 > numero2); //mayor
console.log(numero1 < numero2); //menor
console.log(numero1 >= numero2); //mayor o igual
console.log(numero1 <= numero2); //menor o igual
console.log(numero1 != numero2); //distinto

//negación
let verdadero = false;
console.log(!verdadero);

//Lógicos
let estudia = true;
let practica = false;

console.log(estudia && practica); //AND
console.log(estudia || practica); //OR

//Tarea
// Crear dos variables de tipo number
// mostrar por consola los resultados de las siguientes operaciones:
// Sumar las dos variables
// Restar las dos variables
// Multiplicar las dos variables
// Dividir ambas variables
// comparar si la primera variable es mayor o igual que la segunda
// Comparar si la primera variable es distinta de la segunda

// Crear dos variables de tipo number
let valor1 = 5;
let valor2 = 10;
// Sumar las dos variables
console.log(
  "La suma de " + valor1 + " con " + valor2 + " es igual a",
  valor1 + valor2
);

console.log(
  "La resta de " + valor1 + " menos " + valor2 + " es igual a",
  valor1 - valor2
);
