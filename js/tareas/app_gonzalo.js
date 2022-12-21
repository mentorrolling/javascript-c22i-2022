// // ejercicio 1

// let age=parseInt(prompt("cuantos años tenes"))
// while (isNaN(age)){
//     console.error("pone tu edad 🤬")
//     age=parseInt(prompt("cuantos años tenes 😡"))
// }
// if (age>=18){
//     console.log("%cYa podes conducir 😎",
//             "background:linear-gradient(#4102ad, #000); color:#f80; padding: 5px 10px; border-radius: 8px");
// }else{
//     console.warn("sos muy joven para conducir 🤷‍♂️")
// }

// // ejercicio 2

// let result=parseFloat(prompt("cuanto te sacaste"))
// while (isNaN(result)){
//     console.error("cuanto te sacaste 🤬")
//     result=parseFloat(prompt("cuanto te sacaste (0-10)"))
// }
// switch(result){
//     case 0: case 1: case 2:
//         console.warn("muy deficiente 😭")
//     break
//     case 3: case 4:
//         console.warn("no es suficiente 😢")
//     break
//     case 5: case 6:
//         console.warn("nota suficiente 🦧")
//     break
//     case 7:
//         console.warn("bien 👍")
//     break
//     case 8: case 9:
//         console.warn("muy bien 😉")
//     break
//     case 10:
//         console.log("%cExcelente!! Sobresaliente 😎",
//             "background:linear-gradient(#4102ad, #000); color:#f80; padding: 5px 10px; border-radius: 8px");
//     break
//     default:
//         console.log("%cEl número que has ingresado no es válido 😡",
//             "background:linear-gradient(#F00, #000); color:#fff; padding: 5px 10px; border-radius: 8px");
// }

// // ejercicio 3

// let textt=[""]
// let words=prompt("introduce una palabra")
// while(words){
//     textt.push(words)
//     words=prompt("introduce una palabra")
//     if(!words){
//         let conf=confirm("seguro que quieres cancelar?")
//         if(conf){
//             console.info(textt.join("-"))
//         }
//     }
// }

// // ejercicio 4

// let numbers=0
// let verify=parseFloat(prompt("numero"))
// while(!isNaN(verify)){
//     numbers=numbers+verify
//     verify=parseFloat(prompt("numero"))
// }
// console.log(`%cLa suma final es ${numbers}`,
//             "background:linear-gradient(#4102ad, #000); color:#f80; padding: 5px 10px; border-radius: 8px");

// // ejercicio 5

// let DNI=true
//     while(DNI){
//         DNI=prompt("Ingresa tu DNI aqui (8 caracteres como máximo)")
//         if(DNI==null){
//             console.warn("operacion cancelada")}
//         else if(DNI.length>8 || isNaN(parseInt(DNI))){
//             console.error("porfavor, ingresa un valor correspondiente")}
//             else{
//             let calculation=DNI%23
//             let characters=["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"]
//             console.log(`%cLa letra de tu DNI es ${characters[calculation]}`,"background:linear-gradient(#4102ad, #000); color:#f80; padding: 5px 10px; border-radius: 8px")
//         }
//     }

// // ejercicio 6

// for(i=1;i<=30;i++){
//     for(r=0;r<i;r++){
//         document.write(i)
//     }
//     document.write("<br>")
// }

// document.write("<hr>")

// // ejercicio 7

// let usernum=parseInt(prompt("Introduce un numero"))
// while(isNaN(usernum) || usernum>50){
//     console.error("has ingresado valores incorrectos")
//     usernum=parseInt(prompt("Introduce un numero"))
// }

// for(i=usernum;i>=1;i--){
//     for(r=i;r>=1;r--){
//         document.write(i)
//     }
//     document.write("<br>")
// }

// document.write("<hr>")

// // ejercicio 8

// usernum=parseInt(prompt("Introduce un numero"))
// while(isNaN(usernum) || usernum>50){
//     console.error("has ingresado valores incorrectos")
//     usernum=parseInt(prompt("Introduce un numero"))
// }

// for(i=1;i<=usernum;i++){
//     for(r=1;r<=i;r++){
//         document.write(r)
//     }
//     document.write("<br>")
// }

// document.write("<hr>")

// // ejercicio 9
// let num=1
// for(cycle=1;cycle<=100;cycle++){
//     for(i=1;i<=5;i++){
//         if(num%4==0){
//             document.write(num+" (múltiplo de 4)")
//         }
//         else if(num%9==0){
//             document.write(num+" (múltiplo de 9)")
//         }
//         else{
//             document.write(num)
//         }
//         document.write("<br>")
//         num++
//     }
//     document.write("<hr>")
// }

// // ejercicio 10

let row = prompt("Nro de filas (no mayor a 30)");
let col = prompt("Nro de columnas (no mayor a 30)");

if (row == null || col == null) {
  console.warn("operacion cancelada");
} else {
  row = parseInt(row);
  col = parseInt(col);
  if (isNaN(row) || row > 30 || isNaN(col) || col > 30) {
    alert("error: has introducido un valor incorrecto");
    console.error("has introducido un valor incorrecto");
  } else {
    let nums = row * col;
    document.write(`<table border class="table">`);
    for (let r = 1; r <= row; r++) {
      document.write("<tr>");
      for (let c = 1; c <= col; c++) {
        document.write("<td>");
        document.write(nums);
        nums--;
        document.write("</td>");
      }
      document.write("</tr>");
    }
    document.write(`</table>`);
  }
}

// // ejercicio 11

// let p1=prompt("como se llama la persona 1")
// let e1=prompt("cuantos años tiene?")

// while (isNaN(e1)){
//     console.error("pone la edad 🤬")
//     e1=parseInt(prompt("cuantos años tiene? 😡"))
// }

// let p2=prompt("como se llama la persona 2")
// let e2=prompt("cuantos años tiene?")

// while (isNaN(e2)){
//     console.error("pone la edad 🤬")
//     e2=parseInt(prompt("cuantos años tiene? 😡"))
// }

// let p3=prompt("como se llama la persona 3")
// let e3=prompt("cuantos años tiene?")

// while (isNaN(e3)){
//     console.error("pone la edad 🤬")
//     e3=parseInt(prompt("cuantos años tiene? 😡"))
// }

// if(e1>e2 && e1>e3){
//     console.log(`${p1} es el/la mayor!`)
// }
// else if(e2>e1 && e2>e3){
//     console.log(`${p2} es el/la mayor!`)
// }
// else if(e3>e1 && e3>e2){
//     console.log(`${p3} es el/la mayor!`)
// }

// // ejercicio 12

// console.log(Math.round((Math.random()*99+1)))

// // ejercicio 13 14 15 16 17

// let text=prompt("Escribe un texto para pasarlo a mayusculas")
// let textsplit=text.split("")

// document.write(`Texto en mayúsculas: ${text.toUpperCase()}<br>`)
// document.write(`Texto con guión: ${textsplit.join("-")}<br>`)

// a=0;e=0;i=0;o=0;u=0;

// for(letter=0;letter<=text.length;letter++){
//     switch(textsplit[letter]){
//         case "a": case "á":
//             a++
//         break
//         case "e": case "é":
//             e++
//         break
//         case "i": case "í":
//             i++
//         break
//         case "o": case "ó":
//             o++
//         break
//         case "u": case "ú":
//             u++
//         break
//     }
// }

// let total=a+e+i+o+u
// document.write(`Total de vocales: ${total}<br>`)

// let reverse=[]

// for(p=text.length;p>=0;p--){
//     reverse.push(textsplit[p])
// }

// document.write(`Texto al revés: ${reverse.join("")}<br>`)

// // document.write(`la primer vocal esta en la posicion ${text.search("a","e","i","o","u")}<br>`)
