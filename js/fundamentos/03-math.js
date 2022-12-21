//Math

//Redondear números
console.log(Math.floor(45.89)); //número más bajo

console.log(Math.round(45.8)); //número más alto si el valor decimal es mayor que 5

console.log(Math.ceil(45.15)); //número más alto

//Máximo de una lista de números
console.log(`El número máximo es ${Math.max(56.7, 45, 2500, -47, -120, 9800)}`);

//mínimo de una lista de números
console.log(`El número mínimo es ${Math.min(56.7, 45, 2500, -47, -120, 9800)}`);

//Número string convertirlo a tipo número
let numero = "67.567843";
//obtener el entero de un string
let numeroEntero = parseInt(numero);
let numeroFlotante = parseFloat(numero);

console.log(numeroEntero);
console.log(numeroFlotante);

//Números con dos decimales
console.log(Math.round(numeroFlotante * 100) / 100);
console.log(parseFloat(numeroFlotante.toFixed(2)));

//Elevar un número a una potencia
let base = numeroEntero;
let exponente = 3;
console.log(Math.pow(base, exponente));

//calcular raiz cuadrada
console.log(parseFloat(Math.sqrt(numeroFlotante)).toFixed(2));

//Random de 1 a 100
console.log(Math.ceil(Math.random() * 100));

/*
Tarea 1
-------
- Obtener un número aleatorio entre 1 y 100
- Calcular su raiz cuadrada y mostrar en consola el resultado
- Elevarlo a la quinta potencia y mostrar en consola el resultado


Tarea 2
--------

- Según la siguiente lista de números 120,250,-78,96,-38,45.72,1450,2380
- Mostrar en consola el menor 
- Mostrar en consola el mayor

Tarea 3
--------

- Dado los siguientes números, dejarlos con dos decimales y mostrar en consola los mismos redondeados:
45.895025
56.788789
78.413582
*/

// let arrayNumber = [120, 250, -78, 96, -38, 45.72, 1450, 2380];
// console.log(...arrayNumber);

let numeroFixed = 45.895025;
numeroFixed = numeroFixed.toFixed(2);
console.log(numeroFixed);
