//callbacks

const numeros = [37, 11, 2, 15, 56, 52, 8, 48, 100];

let numerosOrdenados = numeros.sort((a, b) => a - b);

//filter
//crea un nuevo arreglo con los elementos que cumplen la condición dada.
let pares = numeros.filter((numero) => numero % 2 === 0);

//find
//devuelve el valor del primer elemento que cumple la condición dada.
let alumnos = ["Jimena", "Juan", "Nicolás", "Lucas", "Gabriela"];

let resultadoBusqueda = alumnos.find((alumno) => {
  return alumno === "Lucas";
});

let resultadoBusquedaNumeros = numeros.find((numero) => {
  return numero <= 50;
});

//findIndex
let indice = alumnos.findIndex((alumno) => {
  return alumno === "Nicolás";
});

//forEach
alumnos.forEach((alumno) => {
  let nombreMayus = alumno.toUpperCase();
  console.log(`Hola, soy ${nombreMayus}`);
});

//map
//Crea un nuevo arreglo con los resultados del callback aplicado a cada elemento
let numerosDobles = numeros.map((numero) => numero * 2);

//Tarea 1
//Dado 3 arreglos de números unir todos en uno solo y ordenarlos de mayor a menor
let numeros1 = [13, 456, 786, 23, 45];
let numeros2 = [67, 3, 5];
let numeros3 = [90, 1245, 56000];

const tarea1 = () => {
  let numerosParaOrdenar = numeros3.concat(numeros1, numeros2);

  return numerosParaOrdenar.sort((a, b) => a - b).reverse();
};

console.log(tarea1());

/*
Tarea 2
---------
  Filtrar de un arreglo de personas todos los nombres que contengan la letra "m"
*/

let personas = [
  "Joaquín",
  "Daniel",
  "Magdalena",
  "Gonzalo",
  "Armando",
  "Samuel",
  "Valentina",
];

const obtenerNombresPorLetra = (letra) => {
  let nombres = personas.filter((persona) => {
    return persona.toUpperCase().includes(letra.toUpperCase());
  });

  return nombres;
};

// Tarea 3
// ----------
// Tomar una lista de lenguajes de programación y mostrar en consola una lista ordenada con los nombres ordenados alfabéticamente y en mayúsculas sin mutar el arreglo original.

let lenguajes = ["javascript", "python", "c++", "c#", "java", ".net"];

const ordenarLenguajes = () => {
  let lenguajesOrdenados = lenguajes.slice(0);
  lenguajesOrdenados.sort().forEach((lenguaje, index) => {
    console.log(`${index + 1} - ${lenguaje.toUpperCase()}`);
  });
};

//Aplicación de lista de compras

/*
- Agregar un producto a la lista
- Listar los productos de la lista numerados
- Eliminar un producto de la lista por su indice
- Buscar un producto
- Filtrar productos por una letra o palabra
*/

const lista = ["PAN", "LECHE", "CHOCOLATE"];

//agregar un producto
const agregarProducto = () => {
  let producto = prompt("Ingrese un producto");
  //agregar varios productos con la misma función
  while (producto) {
    lista.push(producto.toUpperCase());
    alert(`El producto ${producto} se agregó a la lista 🤙`);
    producto = prompt("Ingrese un producto");
  }
  alert("Finalizado el ingreso de productos");
};

//listar productos
const listarProductos = () => {
  document.body.innerHTML = "";
  document.write("<h1>");
  document.write("Lista de productos");
  document.write("</h1>");
  if (lista.length > 0) {
    document.write("<ol>");
    lista.forEach((producto) => {
      document.write("<li>");
      document.write(producto);
      document.write("</li>");
    });
    document.write("</ol>");
  } else {
    document.write("No hay elementos en la lista");
  }
};

//borrar producto
const borrarProducto = (
  producto = prompt("Ingrese el producto a eliminar")
) => {
  if (producto) {
    let indice = lista.indexOf(producto.toUpperCase());
    if (indice > -1) {
      let validar = confirm(
        `Está seguro que desea eliminar el producto ${lista[indice]}??`
      );
      if (validar) {
        lista.splice(indice, 1);
        alert("El producto se eliminó");
      }
    } else {
      alert("El producto no se encuentra en la lista");
    }
  } else {
    alert("Se canceló la operación");
  }
};

//Buscar un producto
const buscarProducto = (producto = prompt("Ingrese el producto a buscar")) => {
  if (producto) {
    // let encontrado = lista.find((item) => {
    //   return item === producto.toUpperCase();
    // });

    let encontrado = lista.includes(producto.toUpperCase());

    if (encontrado) {
      console.log(`El producto ${producto.toUpperCase()} está en la lista`);
    } else {
      console.warn(
        `El producto ${producto.toUpperCase()} no está en la lista :()`
      );
    }
  } else {
    alert("Se canceló la operación");
  }
};

//filtrar productos
const filtrarProductos = (termino = prompt("Ingrese el término a buscar")) => {
  if (termino) {
    let resultado = lista.filter((item) =>
      item.includes(termino.toUpperCase())
    );
    if (resultado.length > 0) {
      console.log("Productos encontrados");
      console.log("--------------------");
      for (let i = 0; i < resultado.length; i++) {
        console.log(`${i + 1} - ${resultado[i]}`);
      }
    } else {
      alert("No se encontraron coincidencias");
    }
  } else {
    alert("Se canceló la operación");
  }
};

//Modificar un producto
const modificarProducto = (
  producto = prompt("Ingrese el producto a modificar")
) => {
  if (producto) {
    let indice = lista.indexOf(producto.toUpperCase());
    if (indice > -1) {
      let nuevoValor = prompt("Ingrese el nuevo nombre del producto");
      if (nuevoValor) {
        lista.splice(indice, 1, nuevoValor.toUpperCase());
        alert("El producto ha sido modificado con éxito!");
      } else {
        alert("Se canceló la operación");
      }
    } else {
      alert("El producto no se encuentra en la lista");
    }
  } else {
    alert("Se canceló la operación");
  }
};

//CRUD
//Create Read Update Delete
