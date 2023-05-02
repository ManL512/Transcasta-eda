const iconos = document.querySelectorAll(".unfold");

iconos.forEach((icono) => {
  icono.addEventListener("click", () => {
    const descripcion = icono.parentNode.parentNode.nextElementSibling;
    const descripciones = document.querySelectorAll(".description");
    
    descripciones.forEach((desc) => {
      if (desc !== descripcion && desc.classList.contains("descripcion-comun")) {
        desc.style.display = "none";
      }
    });
    
    if (descripcion.classList.contains("descripcion-comun")) {
      descripcion.style.display = "block";
    }
  });
});



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
  document.querySelector('.SistemaIntegrado').style.height = "100px"; // Establece la altura del div a 100px
} else {
  icono.setAttribute("name", "chevron-up-outline");
  descripcion.style.display = "block";
  descripcion.style.height = descripcion.scrollHeight + "px";
  document.querySelector('.SistemaIntegrado').style.height = descripcion.scrollHeight + 100 + "px"; // Ajusta la altura del div a la altura de la descripción más 100px
}
}   
