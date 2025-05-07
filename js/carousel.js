// Configuración del carrusel de imágenes para la página de inicio
document.addEventListener('DOMContentLoaded', function() {
    // Array con las imágenes del carrusel
    // Formato: {src: 'ruta/imagen.jpg', alt: 'Texto alternativo'}
    const carouselImages = [
        {src: 'images/promo.png', alt: 'Promoción'},
        {src: 'images/lavada.png', alt: 'Lavado de motos'},
        // Puedes agregar más imágenes aquí siguiendo el mismo formato
    ];

    // Obtener el contenedor del carrusel
    const carouselContainer = document.getElementById('hero-carousel');
    
    // Si no existe el contenedor, salir de la función
    if (!carouselContainer) return;
    
    // Limpiar el contenedor
    carouselContainer.innerHTML = '';
    
    // Crear los slides del carrusel
    carouselImages.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = `carousel-slide absolute inset-0 transition-opacity duration-1000 flex items-center justify-center`;
        
        // El primer slide es visible, los demás ocultos
        slide.style.opacity = index === 0 ? '1' : '0';
        
        // Crear la imagen
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        
        // Usar object-contain para mantener la relación de aspecto sin recortar
        // y max-h-full para asegurar que no exceda la altura del contenedor
        img.className = 'max-h-full max-w-full object-contain';
        
        // Manejar errores de carga de imagen
        img.onerror = function() {
            this.src = 'images/placeholder.jpg';
        };
        
        // Agregar la imagen al slide
        slide.appendChild(img);
        
        // Agregar el slide al contenedor
        carouselContainer.appendChild(slide);
    });
    
    // Variables para el control del carrusel
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;
    
    // Crear indicadores del carrusel
    const indicatorsContainer = document.getElementById('carousel-indicators');
    if (indicatorsContainer) {
        carouselImages.forEach((_, index) => {
            const indicator = document.createElement('button');
            indicator.className = `w-3 h-3 rounded-full bg-white bg-opacity-50 transition-all duration-300`;
            if (index === 0) {
                indicator.classList.add('w-6', 'bg-opacity-100');
            }
            
            indicator.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
            
            indicatorsContainer.appendChild(indicator);
        });
    }
    
    // Función para mostrar un slide específico
    function showSlide(index) {
        // Actualizar slides
        slides.forEach(slide => {
            slide.style.opacity = '0';
        });
        slides[index].style.opacity = '1';
        
        // Actualizar indicadores
        if (indicatorsContainer) {
            const indicators = indicatorsContainer.querySelectorAll('button');
            indicators.forEach((indicator, i) => {
                if (i === index) {
                    indicator.classList.add('w-6', 'bg-opacity-100');
                } else {
                    indicator.classList.remove('w-6', 'bg-opacity-100');
                }
            });
        }
    }
    
    // Función para avanzar al siguiente slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    // Cambiar slide cada 5 segundos
    setInterval(nextSlide, 5000);
    
    // Agregar controles de navegación
    const prevButton = document.createElement('button');
    prevButton.className = 'absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 z-10 hover:bg-opacity-70 transition-all';
    prevButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>';
    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });
    
    const nextButton = document.createElement('button');
    nextButton.className = 'absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 z-10 hover:bg-opacity-70 transition-all';
    nextButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>';
    nextButton.addEventListener('click', () => {
        nextSlide();
    });
    
    carouselContainer.appendChild(prevButton);
    carouselContainer.appendChild(nextButton);
});


