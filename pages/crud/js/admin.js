class Producto {
  constructor(
    id,
    title,
    price,
    description,
    category,
    image,
    favorito = false
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.category = category;
    this.image = image;
    this.favorito = favorito;
  }
}

let main = document.querySelector("#main");
let contenedorTabla = document.querySelector("#contenedor-tabla");
let cuerpoTabla = document.querySelector("#cuerpo-tabla");
const myModal = new bootstrap.Modal(document.getElementById("productoModal"));
let productos = JSON.parse(localStorage.getItem("productos")) || [];
let indexUpdate = null;
