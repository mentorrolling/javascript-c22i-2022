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
