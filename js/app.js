//condicionales

/*
si tal cosa se cumple
entonces hacer algo
sino
hacer otra cosa o no hacer nada

*/
// let cajaChica = 200;

// if (cajaChica > 0) {
//   console.log("Hay plata o dinero 😍");
// } else {
//   console.log("No hay dinero 😭");
// }

//Dado un número nos diga si ese número es par o no

//datos de entrada: número que ingresa
//Proceso: dividir en 2 y obtener el resto
//dato de salida o resultado: mensaje que diga si es par o no

// let numero = parseInt(prompt("Ingrese un número entero"));

// if (isNaN(numero)) {
//   console.warn(`El valor ${numero} ingresado no es un número`);
// } else {
//   if (numero % 2 == 0) {
//     console.log(`El número ${numero} es par`);
//   } else {
//     console.log("El número no es par");
//   }
// }
/*
1.- En una tienda de venta de repuestos automotrices se tiene que el descuento depende del monto de venta, asi:
Se ingresa el monto de venta y el sistema debe calcular el descuento y restarlo del total segun las reglas:
- Si el monto es menor que 500 no hay descuento
- Si el monto está comprendido entre 500 y 1000 inclusive, el descuento es de 5%
- Si el monto está comprendido entre 1000 y 7000 inclusive, el descuento es del 11%
- Si el monto está comprendido entre 7000 y 15000 inclusive, el descuento es del 18%
- Si el monto es mayor de 15000 el desc es del 25%.
por ejemplo si se ingresa un monto de 5000 el descuento sera 550, y por tanto el valor a pagar sera 4450.

*/

let monto = parseFloat(prompt("Ingrese el monto de la compra"));
let montoDescuento = 0;
let montoConDescuento = 0;

if (isNaN(monto)) {
  console.warn("El valor ingresado no es un monto válido");
} else {
  if (monto < 500) {
    console.log("Montos menores de $500 no tienen descuento");
  } else if (monto <= 1000) {
    montoDescuento = monto * 0.05;
    montoConDescuento = monto - montoDescuento;
    console.log(
      `El monto a pagar con el descuento del 5% es $${montoConDescuento}`
    );
  } else if (monto <= 7000) {
    montoDescuento = monto * 0.11;
    montoConDescuento = monto - montoDescuento;
    console.log(
      `El monto a pagar con el descuento del 11% es $${montoConDescuento}`
    );
  } else if (monto <= 15000) {
    console.log("El descuento es del 18%");
  } else {
    console.log("El descuento es del 25%");
  }
}

//fiesta
//--------
//Solo puede entrar un mayor de edad osea edad >= 18
// si no es mayor de edad entonces debe ir acompañado de un tutor

let edad = 30;
let tutor = true;

// if (edad >= 18) {
//   console.log("Bienvenido a la fiesta 😍");
// } else if (tutor) {
//   console.log("Podés entrar, pero no te separes de tu tutor 😄");
// } else {
//   console.log("Sos menor de edad, no podés entrar LOSER 😭");
// }

//otra forma
if (edad >= 18 || tutor) {
  console.log("Bienvenido a la fiesta 😍");
} else {
  console.log("Sos menor de edad, no podés entrar LOSER 😭");
}

//---------------------------------------------------
switch (edad) {
  case 15:
    console.log("Tengo 15 años");
    //acciones
    break;
  case 18:
    console.log("Tengo 18 años");
    //acciones
    break;
  default:
    console.log("no tengo ni 15 ni 18 años");
    break;
}

// Se nos pide hacer una aplicación para una verdulería que segun la fruta ingresada nos devuelva el precio del kilo
let fruta = prompt("Ingrese la fruta que desea comprar 😄");

switch (fruta) {
  case "manzana":
    console.log("El precio del kilo de manzana es de $350");
    break;
  case "naranja":
    console.log("El precio del kilo de naranja es de $180");
    break;
  case "banana":
    console.log("El precio del kilo de banana es de $200");
    break;
  case "pomelo":
  case "mango":
    console.log("El precio del kilo de pomelo o mango es de $300");
    break;
  default:
    console.log(`lo sentimos, pero no tenemos ${fruta} en stock`);
    break;
}
