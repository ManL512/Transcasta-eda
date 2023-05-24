function toggleDescripcion(descripcionId) {
  const descripcionElement = document.getElementById(descripcionId);

  // Cerrar todas las descripciones
  const descriptionElements = document.querySelectorAll('.description');
  descriptionElements.forEach((description) => {
    description.style.display = 'none';
  });

  // Mostrar la descripción correspondiente
  descripcionElement.style.display = 'block';
}

function toggleMadgalenaMedio(){
  toggleDescripcion('')
}

function mostrarContenidoZona_1() {
  var contenido = document.getElementById("contenido_Zona1");
  var icono = document.getElementById("icono");

  if (contenido.style.height === "0px") {
    contenido.style.height = "auto";
    icono.setAttribute("name", "chevron-up-outline");
  } else {
    contenido.style.height = "0px";
    icono.setAttribute("name", "chevron-down-outline");
  }
}

function mostrarContenidoZona_2() {
  var contenido = document.getElementById("contenido_Zona2");
  var icono = document.getElementById("icono");

  if (contenido.style.height === "0px") {
    contenido.style.height = "auto";
    icono.setAttribute("name", "chevron-up-outline");
  } else {
    contenido.style.height = "0px";
    icono.setAttribute("name", "chevron-down-outline");
  }
}

function mostrarContenidoZona_3() {
  var contenido = document.getElementById("contenido_Zona3");
  var icono = document.getElementById("icono");

  if (contenido.style.height === "0px") {
    contenido.style.height = "auto";
    icono.setAttribute("name", "chevron-up-outline");
  } else {
    contenido.style.height = "0px";
    icono.setAttribute("name", "chevron-down-outline");
  }
}
