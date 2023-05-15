


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

  if (icono.getAttribute("name") === "chevron-up-outline") {
    icono.setAttribute("name", "chevron-down-outline");
    descripcion.style.display = "none";
    descripcion.style.height = "0";
    document.querySelector('.mision').style.height = "150px";
  } else {
    icono.setAttribute("name", "chevron-up-outline");
    descripcion.style.display = "block";
    descripcion.style.height = "100%";
    document.querySelector('.mision').style.height = "350px";
  }

  // Cerrar otras descripciones si están abiertas
  if (descripcionVision.style.display === "block" && icono.getAttribute("name") === "chevron-up-outline") {
    toggleVision();
  }
  if (descripcionSistema.style.display === "block" && icono.getAttribute("name") === "chevron-up-outline") {
    toggleSistema();
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
  document.querySelector('.vision').style.height = "100%"; // Establece la altura del div vision a 350px
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
  document.querySelector('.SistemaIntegrado').style.height = descripcion.scrollHeight + 100 + "%"; // Ajusta la altura del div a la altura de la descripción más 100%
}
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
