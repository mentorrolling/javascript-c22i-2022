let reloj = document.getElementById("reloj");

let relojito = null;

const mostrarReloj = () => {
  let hora = new Date().getHours();
  let minutos = new Date().getMinutes();
  let segundos = new Date().getSeconds();

  if (hora <= 9) {
    hora = `0${new Date().getHours()}`;
  }

  if (minutos <= 9) {
    minutos = `0${new Date().getMinutes()}`;
  }
  if (segundos <= 9) {
    segundos = `0${new Date().getSeconds()}`;
  }

  relojito = `${hora} : ${minutos} : ${segundos}`;

  reloj.innerText = relojito;
};

setInterval(() => {
  //funcion del reloj
  mostrarReloj();
}, 1000);
