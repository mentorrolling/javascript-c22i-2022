let data = [
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
  },
  {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://reqres.in/img/faces/10-image.jpg",
  },
  {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar: "https://reqres.in/img/faces/11-image.jpg",
  },
  {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar: "https://reqres.in/img/faces/12-image.jpg",
  },
];

//Mostremos una lista con los nombres de los usuarios en orden alfabético por apellido
const listarUsuarios = () => {
  let usuarios = data.map((usuario) => {
    return {
      nombre: usuario.first_name,
      apellido: usuario.last_name,
    };
  });
  usuarios.sort((u1, u2) => {
    if (u1.apellido < u2.apellido) {
      return -1;
    } else if (u1.apellido > u2.apellido) {
      return 1;
    } else {
      return 0; //si son iguales
    }
  });

  usuarios.forEach((usuario, index) => {
    console.log(`${index + 1} - ${usuario.nombre} ${usuario.apellido}`);
  });
};

//Crear tarjetas de presentación con los siguientes datos: apellido, nombre, correo

const tarjetasPresentacion = () => {
  /*
   ------Tarjeta de presentación-------
    nombre: Pepe Argento
    correo: peperacingclub@gmail.com
    */

  data.forEach((persona) => {
    document.write("<strong>------Tarjeta de presentación------</strong><br>");
    document.write(
      `<b>Nombre: </b>${persona.first_name} ${persona.last_name}<br>`
    );
    document.write(`<b>Correo: </b>${persona.email}<br>`);
  });
};
