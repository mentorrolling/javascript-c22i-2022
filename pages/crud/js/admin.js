let main = document.querySelector("#main");
let contenedorTabla = document.querySelector("#contenedor-tabla");
let cuerpoTabla = document.querySelector("#cuerpo-tabla");

const myModal = new bootstrap.Modal(document.getElementById("productoModal"));

let productos = JSON.parse(localStorage.getItem("productos")) || [];
let indexUpdate = null;

//Cargar la tabla

const cargarTabla = () => {
  cuerpoTabla.innerHTML = "";
  productos.forEach((producto) => {
    let tableRow = document.createElement("tr");
    let contenidoHtml = `<th scope="row">${producto.title}</th>
    <td>${producto.description}</td>
    <td>${producto.category}</td>
    <td>$${producto.price}</td>
    <td>
    <div class="d-flex gap-2">
    <i class="fa fa-pencil text-success puntero" onclick="abrirModal(${producto.id})" aria-hidden="true"></i>
    <i class="fa fa-trash-o text-danger puntero" onclick="eliminarProducto(${producto.id})" aria-hidden="true"></i>
    </div>
    </td>
    `;

    // tableRow.append(contenidoHtml); NO FUNCIONA
    tableRow.innerHTML = contenidoHtml;

    cuerpoTabla.append(tableRow);
  });
};

//Crear el producto
const guardarProducto = (event) => {
  event.preventDefault();

  //obtenemos los datos de los inputs del formulario
  let id = productos.at(-1).id + 1;
  let titulo = document.querySelector("#titulo").value;
  let descripcion = document.querySelector("#descripcion").value;
  let categoria = document.querySelector("#categoria").value;
  let precio = document.querySelector("#precio").value;
  let imagen = document.querySelector("#imagen").value;

  //Creamos la instancia u objeto de producto
  let producto = new Producto(
    id,
    titulo,
    precio,
    descripcion,
    categoria,
    imagen
  );

  //Guardar ese nuevo producto en el arreglo
  productos.push(producto);

  localStorage.setItem("productos", JSON.stringify(productos));

  document.querySelector("#titulo").value = "";
  document.querySelector("#descripcion").value = "";
  document.querySelector("#categoria").value = "";
  document.querySelector("#precio").value = "";
  document.querySelector("#imagen").value = "";

  cargarTabla();
};

//Eliminar producto
const eliminarProducto = (id) => {
  let nuevoArreglo = productos.filter((producto) => {
    return producto.id != id;
  });

  let validar = confirm(
    `Esta seguro que desea eliminar el producto con el id ${id}`
  );

  if (validar) {
    productos = [...nuevoArreglo]; //spread
    localStorage.setItem("productos", JSON.stringify(productos));
    cargarTabla();
  }

  //deberian obtener la posición con el id
  // const index = productos.findIndex((item) => {
  //   return item.id == id;
  // });

  // productos.splice(index,1)
};

//Abrir un modal con los datos
const abrirModal = (id) => {
  console.log(id);
  indexUpdate = productos.findIndex((item) => {
    return item.id == id;
  });

  document.querySelector("#tituloModal").value = productos[indexUpdate].title;
  document.querySelector("#descripcionModal").value =
    productos[indexUpdate].description;
  document.querySelector("#categoriaModal").value =
    productos[indexUpdate].category;
  document.querySelector("#precioModal").value = productos[indexUpdate].price;
  document.querySelector("#imagenModal").value = productos[indexUpdate].image;
  console.log(indexUpdate);
  myModal.show();
};
//Actualizar producto

cargarTabla();
