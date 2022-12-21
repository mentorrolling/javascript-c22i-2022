let contenedor = document.querySelector("#contenedor");

let productos = JSON.parse(localStorage.getItem("productos")) || [];

const listarProductos = () => {
  contenedor.innerHTML = "";
  let productosFavoritos = productos.filter((producto) => {
    return producto.favorito === true;
  });

  if (productosFavoritos.length > 0) {
    productosFavoritos.forEach((item) => {
      let columna = document.createElement("div");
      columna.className = "col";
      let tarjeta = `<div class="card h-100">
          <div class="contenedor-img">
          <img src="${item.image}" class="card-img-top img-tarjeta" alt="${item.title}">
          </div>
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <div class="text-muted puntero" >
        <i class="fa fa-times fa-2x" aria-hidden="true" onclick="marcarFavorito(${item.id})"></i>
        </div>
      </div>
      </div>`;

      columna.innerHTML = tarjeta;
      contenedor.appendChild(columna);
    });
  } else {
    let columna = document.createElement("div");
    let mensaje = `<h3>No existen productos favoritos</h3>`;
    columna.innerHTML = mensaje;
    contenedor.appendChild(columna);
  }
};

listarProductos();
