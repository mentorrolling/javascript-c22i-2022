class Usuario {
  constructor(nombre, username, password, estado = true) {
    this.nombre = nombre;
    this.username = username;
    this.pass = password;
    this.estado = estado;
  }
  presentacion() {
    console.log("------Tarjeta de presentación------");
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Nombre de usuario: ${this.username}`);
  }
  cambiarEstado() {
    this.estado = !this.estado;
  }
}

let user1 = new Usuario("Pablo", "pmarino", "12345678");
let user2 = new Usuario("Jimena", "katu", "123456");

Usuario.prototype.saludar = function () {
  console.log(`Hola soy ${this.nombre}`);
};

//Herencia
class Administrador extends Usuario {
  constructor(nombre, username, password, cargo, estado = true) {
    super(nombre, username, password, estado);
    this.cargo = cargo;
  }

  superPresentacion() {
    this.presentacion();
    console.log(`Cargo: ${this.cargo}`);
  }
}

/*
Cuenta bancaria
    1-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
    - Una propiedad titular.
    - Una propiedad saldo, teniendo como valor inicial 0.
    - Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
    - Un método extraer() que permita retirar la cantidad pasada como parámetro.
    - Un método informar() que retorne la información del estado de la cuenta. 
    - Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
*/

class Cuenta {
  constructor(titular, saldo = 0) {
    this.titular = titular;
    this.saldo = saldo;
  }
  ingresar(valor = 0) {
    if (valor > 0) {
      this.saldo += valor;
      this.informar();
    } else {
      console.warn("El monto debe ser mayor que 0");
    }
  }
  extraer(valor) {
    if (valor > this.saldo || valor < 0) {
      console.warn("Monto inválido o saldo insuficiente");
    } else {
      this.saldo -= valor;
    }
    this.informar();
  }

  informar() {
    console.log("-----Estado de la cuenta-----");
    console.log(`Titular: ${this.titular}`);
    console.log(`Saldo: $${this.saldo}`);
  }
}

let cuenta001 = new Cuenta("Marcos Vignoli");
let cuenta002 = new Cuenta("Jimena Martinez", 100000);

//Ejercicio 2
//Generaciones
/*
2- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
*/

class Persona {
  constructor(nombre, edad, sexo, peso, altura, nacimiento, dni = "") {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.nacimiento = nacimiento;
  }
  mostrarGeneracion() {
    switch (true) {
      case this.nacimiento <= 1948:
        console.log(
          "Perteneces a la generación Silent Genartion y tu razgo característico es la austeridad 😐"
        );
        break;
      case this.nacimiento <= 1968:
        console.log(
          "Perteneces a la generación Baby Boom y tu razgo característico es la ambición 🤑"
        );
        break;
      case this.nacimiento <= 1980:
        console.log(
          "Perteneces a la generación X y tu razgo característico es la obseción por el éxito 😎"
        );
        break;
      case this.nacimiento <= 1993:
        console.log(
          "Perteneces a la generación Y y tu razgo característico es la frustración 😖"
        );
        break;
      case this.nacimiento <= 2010:
        console.log(
          "Perteneces a la generación Z y tu razgo característico es la irreverencia 😋"
        );
        break;
    }
  }

  mostrarDatos() {}

  esMayorDeEdad() {}
  generaDNI() {}
}

let jose = new Persona("José Gonzalez", 60, "Masculino", 80, 1.8, 1962);

let maximiliano = new Persona(
  "Maxi Rodriguez",
  25,
  "Masculino",
  71,
  1.7,
  1997,
  "14345678"
);
