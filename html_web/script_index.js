
document.addEventListener("DOMContentLoaded", function() {
// Obtener los elementos relevantes
var sliders = document.getElementsByClassName("slider_description");
var sliderImages = document.getElementsByClassName("slider_img");
var leftArrow = document.getElementsByClassName("left_arrow")[0];
var rightArrow = document.getElementsByClassName("right_arrow")[0];
var currentSlider = 0;

// Función para mostrar el slider actual
function showSlider(index) {
// Ocultar todos los sliders y las imágenes
for (var i = 0; i < sliders.length; i++) {
  sliders[i].classList.remove("active");
  sliderImages[i].style.display = "none";
}

// Mostrar el slider y la imagen actual
sliders[index].classList.add("active");
sliderImages[index].style.display = "block";
}

// Función para pasar al slider siguiente
function nextSlider() {
currentSlider++;
if (currentSlider >= sliders.length) {
  currentSlider = 0;
}
showSlider(currentSlider);
}

// Función para volver al slider anterior
function prevSlider() {
currentSlider--;
if (currentSlider < 0) {
  currentSlider = sliders.length - 1;
}
showSlider(currentSlider);
}

// Evento clic en la flecha derecha
rightArrow.addEventListener("click", function() {
nextSlider();
});

// Evento clic en la flecha izquierda
leftArrow.addEventListener("click", function() {
prevSlider();
});

// Mostrar el primer slider al cargar la página
showSlider(currentSlider);
});

