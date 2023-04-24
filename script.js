const icono = document.getElementById("icono");
const contenido = document.getElementById("contenido");

icono.addEventListener("click", function() {
  if (contenido.style.display === "none") {
    contenido.style.display = "block";
  } else {
    contenido.style.display = "none";
  }
});
