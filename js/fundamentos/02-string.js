let nombre = "Eugenio";
let apellido = "FERNANDEZ";
let frase = "         Bienvenidos a la clase    ";

//concatenación

console.log(nombre + " " + apellido);
console.log(nombre, apellido);

//Template String
console.log(`Mi nombre es ${nombre} ${apellido}`);

//métodos de los string
console.log(nombre.toUpperCase()); //convertir en mayúsculas
console.log(apellido.toLowerCase()); //convertir en minúsculas
console.log(apellido.length); //cantidad de caracteres
console.log(nombre.length);
console.log(frase.length);

//Eliminar espacios delante y detras de un string
console.log(frase.trim().length);

//Obtener una letra
console.log(apellido.charAt(2));
console.log(apellido.charAt(apellido.length - 1)); //El ultimo caracter
console.log(apellido.substring(0, 5));

let alumno = "Francisco";

console.log(alumno.split(""));

/*
Tarea 1
------------
1 - ingreso el apellido
2 - calcular cantidad de caracteres
3 - obtener la última letra del apellido

Tarea 2
------------
Dada la siguiente palabra "marmota"
1 - Pasarla a mayuscula
2 - Pasarla a minuscula
3 - Capitalizar la palabra (Marmota)


*/
let palabra = "marmota";

//obtener la primera letra
// let primeraLetra = palabra.at(0).toUpperCase();

// let restoPalabra = palabra.substring(1);
// console.log(primeraLetra + restoPalabra);
// console.log(
//   `La palabra marmota capitalizada es ${primeraLetra}${restoPalabra}`
// );

let palabraCapitalizada = palabra.at(0).toUpperCase() + palabra.substring(1);
