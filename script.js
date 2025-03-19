document.addEventListener('DOMContentLoaded', function() {
    // Configurar el observador de intersección
    const sectionObserver = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
	    if (entry.isIntersecting) {
		entry.target.style.display = 'block';
		entry.target.style.opacity = '1';
		entry.target.style.transform = 'translateY(0)';
	    }
	});
    }, {
	threshold: 0.1,
	rootMargin: '0px'
    });

    // Observar todas las secciones
    document.querySelectorAll('section').forEach(section => {
	sectionObserver.observe(section);
	section.style.transition = 'all 0.5s ease-out';
    });

    // Navegación suave
    document.querySelectorAll('nav a').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
	    e.preventDefault();
	    const targetId = this.getAttribute('href');
	    const targetSection = document.querySelector(targetId);

	    if (targetSection) {
		targetSection.scrollIntoView({
		    behavior: 'smooth',
		    block: 'start'
		});
	    }
	});
    });

    // Interactividad en la barra social
    const socialLinks = document.querySelectorAll('.social-sidebar a');
    socialLinks.forEach(link => {
	link.addEventListener('mouseenter', (e) => {
	    const tooltip = document.createElement('div');
	    tooltip.className = 'tooltip';
	    tooltip.textContent = e.target.getAttribute('title');
	    e.target.appendChild(tooltip);
	});

	link.addEventListener('mouseleave', (e) => {
	    const tooltip = e.target.querySelector('.tooltip');
	    if (tooltip) tooltip.remove();
	});
    });

    // Efectos hover en características
    document.querySelectorAll('.features li').forEach(item => {
	item.addEventListener('mouseenter', function() {
	    this.style.transform = 'translateX(10px)';
	});

	item.addEventListener('mouseleave', function() {
	    this.style.transform = 'translateX(0)';
	});
    });

    // Animación del título
    const headerTitle = document.querySelector('header h1');
    if (headerTitle) {
	headerTitle.addEventListener('mouseover', function() {
	    this.style.animation = 'titlePulse 2s infinite';
	});

	headerTitle.addEventListener('mouseleave', function() {
	    this.style.animation = 'none';
	});
    }

    // Animaciones para elementos de características
    const featuresObserver = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
	    if (entry.isIntersecting) {
		entry.target.style.opacity = '1';
		entry.target.style.transform = 'translateX(0)';
	    }
	});
    }, { threshold: 0.2 });

    document.querySelectorAll('.features li').forEach(item => {
	item.style.opacity = '0';
	item.style.transform = 'translateX(-20px)';
	item.style.transition = 'all 0.3s ease-out';
	featuresObserver.observe(item);
    });
});

// Estilos dinámicos
const style = document.createElement('style');
style.textContent = `
    .tooltip {
	position: absolute;
	background: white;
	padding: 5px 10px;
	border-radius: 5px;
	box-shadow: 0 2px 5px rgba(0,0,0,0.2);
	left: 100%;
	margin-left: 10px;
	white-space: nowrap;
	font-size: 0.8rem;
	z-index: 1000;
    }

@media (max-width: 768px) {
        .tooltip {
	    left: 50%;
	    transform: translateX(-50%);
	    bottom: 100%;
	    margin-bottom: 5px;
	    margin-left: 0;
	}
}
`;
document.head.appendChild(style);
