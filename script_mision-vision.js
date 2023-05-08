


function toggleMision() {
  toggleDescripcion('mision');
}

function toggleVision() {
  toggleDescripcion('vision');
}

function toggleSistema() {
  toggleDescripcion('sistema');
}

function toggleMadgalenaMedio(){
  toggleDescripcion('')
}


                          /*Despliega la descripcion de mision.*/ 
function toggleMision() {
  var icono = document.getElementById("mision");
  var descripcion = document.getElementById("descripcion_mision");
  var descripcionVision = document.getElementById("descripcion_vision");
  var descripcionSistema = document.getElementById("descripcion_sistema");


  // Cerrar otras descripciones si están abiertas
  if (descripcionVision.style.display === "block") {
    toggleVision();
  }
  if (descripcionSistema.style.display === "block") {
    toggleSistema();
  }

  if (icono.getAttribute("name") === "chevron-up-outline") {
      icono.setAttribute("name", "chevron-down-outline");
      descripcion.style.display = "none"; // Oculta la descripción
      descripcion.style.height = "0"; // Establece la altura a 0px
      document.querySelector('.mision').style.height = "120px"; // Establece la altura del div mision a 120px
  } else {
      icono.setAttribute("name", "chevron-up-outline");
      descripcion.style.display = "block"; // Muestra la descripción
      descripcion.style.height = "350px"; // Establece la altura fija en 350px
      document.querySelector('.mision').style.height = "350px"; // Ajusta la altura del div mision a 350px
  }
}


                          /*Despliega la descripcion de vision.*/ 
function toggleVision() {
var icono = document.getElementById("vision");
var descripcion = document.getElementById("descripcion_vision");
var descripcionMision = document.getElementById("descripcion_mision");
var descripcionSistema = document.getElementById("descripcion_sistema");

// Cerrar otras descripciones si están abiertas
if (descripcionMision.style.display === "block") {
  toggleMision();
}
if (descripcionSistema.style.display === "block") {
  toggleSistema();
}

if (icono.getAttribute("name") === "chevron-up-outline") {
  icono.setAttribute("name", "chevron-down-outline");
  descripcion.style.display = "none"; // Oculta la descripción
  descripcion.style.height = "0"; // Establece la altura a 0px
  document.querySelector('.vision').style.height = "120px"; // Establece la altura del div vision a 120px
} else {
  icono.setAttribute("name", "chevron-up-outline");
  descripcion.style.display = "block"; // Muestra la descripción
  descripcion.style.height = descripcion.scrollHeight + "px"; // Establece la altura dinámicamente
  document.querySelector('.vision').style.height = "360px"; // Establece la altura del div vision a 350px
}
}


                          /*Despliega la descripcion de sistemas.*/ 
function toggleSistema() {
var icono = document.getElementById("sistema");
var descripcion = document.getElementById("descripcion_sistema");
var descripcionMision = document.getElementById("descripcion_mision");
var descripcionVision = document.getElementById("descripcion_vision");

// Cerrar otras descripciones si están abiertas
if (descripcionMision.style.display === "block") {
  toggleMision();
}
if (descripcionVision.style.display === "block") {
  toggleVision();
}

if (icono.getAttribute("name") === "chevron-up-outline") {
  icono.setAttribute("name", "chevron-down-outline");
  descripcion.style.display = "none";
  descripcion.style.height = "0";
  document.querySelector('.SistemaIntegrado').style.height = "120px"; // Establece la altura del div a 120px
} else {
  icono.setAttribute("name", "chevron-up-outline");
  descripcion.style.display = "block";
  descripcion.style.height = descripcion.scrollHeight + "px";
  document.querySelector('.SistemaIntegrado').style.height = descripcion.scrollHeight + 100 + "px"; // Ajusta la altura del div a la altura de la descripción más 100px
}
}   


function mostrarContenidoZona_1() {
  var contenido = document.getElementById("contenido_Zona1");
  var icono = document.getElementById("icono");

function toggleZona1() {
  var icono = document.getElementById("zona1-icono");
  var zona = document.getElementById("zona1");

  if (icono.getAttribute("name") === "chevron-down-outline") {
      icono.setAttribute("name", "chevron-up-outline");
      zona.style.display = "block";
      zona.style.height = "350px";
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


