// Selecciona las diapositivas
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Función para mostrar la siguiente diapositiva
function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Cambia de diapositiva cada 3 segundos
setInterval(showNextSlide, 3000);
