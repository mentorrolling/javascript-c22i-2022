// document.getElementById('id_del_elemento')
// document.querySelector('#id_del_elemento')

// document.createElement('etiqueta_html')

// el_elemento.append(nodo)

// document.body.append(nodo)
// document.body.removeChild(nodo)
class Usuario {
  constructor(id, first_name, last_name, email, avatar) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.avatar = avatar;
  }
}

// const usuarios = [
//   {
//     id: 7,
//     email: "michael.lawson@reqres.in",
//     first_name: "Michael",
//     last_name: "Lawson",
//     avatar: "https://reqres.in/img/faces/8-image.jpg",
//   },
//   {
//     id: 8,
//     email: "lindsay.ferguson@reqres.in",
//     first_name: "Lindsay",
//     last_name: "Ferguson",
//     avatar: "https://reqres.in/img/faces/7-image.jpg",
//   },
//   {
//     id: 9,
//     email: "tobias.funke@reqres.in",
//     first_name: "Tobias",
//     last_name: "Funke",
//     avatar: "https://reqres.in/img/faces/9-image.jpg",
//   },
//   {
//     id: 10,
//     email: "byron.fields@reqres.in",
//     first_name: "Byron",
//     last_name: "Fields",
//     avatar: "https://reqres.in/img/faces/10-image.jpg",
//   },
//   {
//     id: 11,
//     email: "george.edwards@reqres.in",
//     first_name: "George",
//     last_name: "Edwards",
//     avatar: "https://reqres.in/img/faces/11-image.jpg",
//   },
//   {
//     id: 12,
//     email: "rachel.howell@reqres.in",
//     first_name: "Rachel",
//     last_name: "Howell",
//     avatar: "https://reqres.in/img/faces/12-image.jpg",
//   },
// ];
// localStorage.setItem("usuarios", JSON.stringify(usuarios));

const data = JSON.parse(localStorage.getItem("usuarios"));

let contenedorCards = document.querySelector("#contenedor-cards");

const listarUsuarios = () => {
  data.forEach((item) => {
    let columna = document.createElement("div"); //PADRE
    columna.classList = "col";

    //el contenido del nodo PADRE
    let tarjeta = `<div class="card h-100">
    <div class="text-center">
        <img src="${item.avatar}" class="card-img-top img-avatar" alt="${item.first_name}" />
        </div>
        <div class="card-body text-center">
          <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
          <p class="card-text">
            ${item.email}
          </p>
        </div>
      </div>`;

    columna.innerHTML = tarjeta;

    contenedorCards.appendChild(columna);
  });
};

/*
<div class="col">NODO PADRE
          <div class="card"> CONTENIDO DEL NODO PADRE
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
*/

const ordenarPorApellido = (valor = 0) => {
  //   alert("Hola soy un evento 👍");
  contenedorCards.innerHTML = "";
  data.sort((u1, u2) => {
    if (u1.last_name < u2.last_name) {
      return -1;
    } else if (u1.last_name > u2.last_name) {
      return 1;
    } else {
      return 0;
    }
  });

  if (valor != 0) {
    data.reverse();
  }

  listarUsuarios();
};

const agregarUsuario = (event) => {
  event.preventDefault();

  let id = data.at(-1).id + 1;
  let first_name = document.querySelector("#nombre").value;
  let last_name = document.querySelector("#apellido").value;
  let email = document.querySelector("#correo").value;
  let avatar = document.querySelector("#imagen").value;

  let usuario = new Usuario(id, first_name, last_name, email, avatar);

  data.push(usuario);

  localStorage.setItem("usuarios", JSON.stringify(data));

  document.querySelector("#nombre").value = "";
  document.querySelector("#apellido").value = "";
  document.querySelector("#correo").value = "";
  document.querySelector("#imagen").value = "";

  ordenarPorApellido();
};

listarUsuarios();
