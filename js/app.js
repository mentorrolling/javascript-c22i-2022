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
