//Objetos
let alumno = {
  nombre: "Josefina Alvarez",
  edad: 38,
  dni: 29456378,
  curso: "Fullstack",
  saludar: function () {
    console.log(`Hola! soy ${this.nombre}`);
  },
};

// let otroAlumno = {
//   nombre: "Pedro Picapiedra",
//   edad: 56,
//   dni: 16456378,
//   curso: "UI",
//   saludar: function () {
//     console.log(`Hola! soy ${this.nombre}`);
//   },
// };

//Obtener valores
alumno.nombre;
alumno["curso"];

//Agregar una nueva propiedad al objeto
alumno.domicilio = "Esquina Norte";

//Modificar un valor de alguna propiedad
alumno.nombre = "Josefina Gonzalez";

//Elimino una propiedad del objeto
delete alumno.edad;

for (const propiedad in alumno) {
  if (propiedad !== "saludar") {
    console.log(`${propiedad}:${alumno[propiedad]}`);
  }
}

/*
  1- Objeto Persona con las propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.
  */

const persona = {
  nombre: "Martín Riquelme",
  edad: 29,
  genero: "Masculino",
  obtDetalles: function () {
    for (const propiedad in this) {
      if (propiedad !== "obtDetalles") {
        console.log(`${propiedad}:${this[propiedad]}`);
      }
    }
  },
};

//Arreglos de objetos
let alumnos = [
  { nombre: "Fabrizio", curso: "Fullstack" },
  { nombre: "Gabriela", curso: "Javascript Avanzado" },
  { nombre: "Felipe", curso: "Backend desde cero" },
];

// for (let index = 0; index < alumnos.length; index++) {
//   console.log(`Nombre: ${alumnos[index].nombre} - ${alumnos[index].curso}`);
// }

alumnos.forEach((alumno) => {
  console.log(`Nombre: ${alumno.nombre} - Curso: ${alumno.curso}`);
});
