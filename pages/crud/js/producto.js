const parametro = new URLSearchParams(location.search);
const idProducto = parametro.get("id");

let contenedor = document.querySelector("#contenedor");
let productos = JSON.parse(localStorage.getItem("productos")) || [];

const traerDatosProducto = () => {
  //encontrar el producto find(id)
  let producto = productos.find((item) => item.id == idProducto);

  //si existe creamos la tarjeta
  if (producto) {
    let col = document.createElement("div");
    col.classList = "col";
    let tarjeta = `<div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${producto.image}" class="img-fluid rounded-start p-3" alt="${producto.title}">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${producto.title}</h5>
          <p class="card-text">${producto.description}</p>
          <p class="card-text"><small class="text-muted">Precio: $${producto.price}</small></p>
        </div>
      </div>
    </div>
  </div>`;

    col.innerHTML = tarjeta;
    contenedor.append(col);
  } else {
    console.log("No existe un producto con el id recibido");
  }
  //si no existe mostramos un mensaje
};

traerDatosProducto();
