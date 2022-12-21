//Tareas []
//arreglo de objetos
//id
//text
//done

class Tarea {
  constructor(id, text, done = false) {
    this.id = id;
    this.text = text;
    this.done = done;
  }
}

let tareas = JSON.parse(localStorage.getItem("tareas"));

let contenedorTarjetas = document.getElementById("contenedor-tarjetas");

const agregarTarea = (event) => {
  event.preventDefault();
  //obtener lo que está escrito en el input
  let tarea = document.querySelector("#textTarea").value;
  //validar que no esté vacio
  if (tarea.length > 5) {
    //crear la tarea con la clase Tarea
    //la voy a guardar en el arreglo
    tareas.push(new Tarea(new Date().getTime(), tarea));
    //guardar el arreglo localStorage
    localStorage.setItem("tareas", JSON.stringify(tareas));
    //limpiar el input
    document.querySelector("#textTarea").value = "";
    //listar las tareas nuevas ?
    listarTareas();
  }
};

const listarTareas = () => {
  contenedorTarjetas.innerHTML = "";
  /*
    <div class="card">
  <div class="card-body">
    This is some text within a card body.
  </div>
</div>
    */
  //   if (item.done) {
  //     ("text-decoration-line-through");
  //   } else {
  //     ("");
  //   }

  //   item.done ? "text-decoration-line-through" : "";

  tareas.map((item) => {
    let columna = document.createElement("div");
    columna.classList = "col-12 col-md-6 offset-md-3 mb-2";
    let tarjeta = `<div class="card">
<div class="card-body d-flex justify-content-between align-items-center">
  <span class="${
    item.done ? "text-decoration-line-through" : ""
  }" onclick="marcarTarea(${item.id})">${item.text}</span>
  <div>
  <button class="btn btn-danger btn-sm" onclick="eliminarTarea(${
    item.id
  })">x</button>
  </div>
</div>
</div>`;

    columna.innerHTML = tarjeta;

    contenedorTarjetas.append(columna);
  });

  let tareasPendientes = tareas.filter((tarea) => tarea.done === false);
  document.querySelector("#tareas_pendientes").innerText =
    tareasPendientes.length;
  document.querySelector("#tareas_total").innerText = tareas.length;
};

const eliminarTarea = (id) => {
  let index = tareas.findIndex((item) => {
    return item.id == id;
  });
  console.log(index);

  tareas.splice(index, 1);
  localStorage.setItem("tareas", JSON.stringify(tareas));
  listarTareas();
};

const marcarTarea = (id) => {
  let index = tareas.findIndex((item) => {
    return item.id == id;
  });

  tareas[index].done = !tareas[index].done;
  localStorage.setItem("tareas", JSON.stringify(tareas));
  listarTareas();
};

listarTareas();
