document.addEventListener('DOMContentLoaded', function() {

    // --- SMOOTH SCROLL PARA ANCLAS ---
    const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- ANIMACIÓN AL HACER SCROLL (INTERSECTION OBSERVER) ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    // Opciones para el observador
    const observerOptions = {
        root: null, // el viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% del elemento debe ser visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Si el elemento está en la vista
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Dejar de observar el elemento una vez que se ha animado
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar cada elemento con la clase '.animate-on-scroll'
    animatedElements.forEach(el => {
        observer.observe(el);
    });

});