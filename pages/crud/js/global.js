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

let btnLogin = document.querySelector("#btn-login");
let usuario = JSON.parse(localStorage.getItem("user")) || null;

if (usuario) {
  btnLogin.innerText = usuario;
} else {
  btnLogin.innerText = "Inicio de sesión";
}

const sesion = () => {
  if (usuario) {
    localStorage.removeItem("user");
    btnLogin.innerText = "Inicio de sesión";
    location.replace("http://127.0.0.1:5500/pages/crud/index.html");
  } else {
    location.replace("http://127.0.0.1:5500/pages/crud/pages/login.html");
  }
};

const marcarFavorito = (id) => {
  let index = productos.findIndex((item) => {
    return item.id == id;
  });

  productos[index].favorito = !productos[index].favorito;
  localStorage.setItem("productos", JSON.stringify(productos));

  listarProductos();
};

document.querySelector("#btn-login").addEventListener("click", sesion);
