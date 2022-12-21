//BOM
// ----

//location
// métodos
// location.assign('url') //agregar nueva página al historial
// location.replace('url') // Reemplazar página actual
// location.reload() //refrescar

// //propiedad
// location.href='url' //agregar nueva página al historial

//Navigator

if (navigator.onLine) {
  console.log("Estoy conectado");
} else {
  console.log("No tengo internet :(");
}

if (navigator.deviceMemory < 4) {
  console.log("Memoria Insuficiente");
} else {
  console.log("Todo Ok");
}

const miUbicacion = () => {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    const coordenadas = pos.coords;
    console.log("Tu ubicación actual es:");
    console.log(`Latitud: ${coordenadas.latitude}`);
    console.log(`Longitud: ${coordenadas.longitude}`);
    console.log(`Más o menos ${coordenadas.accuracy} metros`);
  }

  function error(err) {
    console.warn(`ERROR ${err.code}: ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error, options);
};

// history.go(1)

//Time

let intervalo = null;

const fechaActual = () => {
  let fecha = "";
  intervalo = setInterval(() => {
    fecha = new Date();
    document.body.innerText = "";
    document.write(`<h3>${fecha}</h3>`);
  }, 1000);
};

const detener = () => clearInterval(intervalo);

const redirigir = () => {
  document.write("<h3>Redireccionando a la página principal...</h3>");
  setTimeout(() => {
    location.replace("https://rollingcodeschool.com");
  }, 3000);
};
