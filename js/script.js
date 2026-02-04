// Toggle para os serviços
function toggleService(element) {
    const details = element.nextElementSibling;
    const isOpen = details.classList.contains('open');
  
    // Fecha todos os outros serviços abertos
    document.querySelectorAll('.service-details').forEach(detail => {
        detail.classList.remove('open');
    });
  
    document.querySelectorAll('.service-toggle').forEach(toggle => {
        toggle.classList.remove('active');
    });
  
    // Abre o serviço clicado se estava fechado
    if (!isOpen) {
        details.classList.add('open');
        element.classList.add('active');
    }
}

// Fecha os serviços ao clicar fora
document.addEventListener('click', function(event) {
    if (!event.target.closest('.service-card')) {
        document.querySelectorAll('.service-details').forEach(detail => {
            detail.classList.remove('open');
        });
        document.querySelectorAll('.service-toggle').forEach(toggle => {
            toggle.classList.remove('active');
        });
    }
});

// Animação suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
      
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Adiciona efeito de digitação ao título principal
const heroTitle = document.querySelector('.hero-text h1');
if (heroTitle) {
    const originalText = heroTitle.innerHTML;
    heroTitle.innerHTML = '';
    let i = 0;
  
    function typeWriter() {
        if (i < originalText.length) {
            heroTitle.innerHTML = originalText.substring(0, i+1);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
  
    // Inicia a animação após a página carregar
    window.addEventListener('load', () => {
        setTimeout(typeWriter, 500);
    });
}

// Adiciona efeito de scroll reveal
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplica o observer aos elementos que devem ter animação de scroll
document.querySelectorAll('.service-card, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

// Verifica se o logo carregou corretamente
document.getElementById('logo-img').addEventListener('error', function() {
    // Se a imagem falhar, mostra texto alternativo
    this.style.display = 'none';
    const logoText = document.querySelector('.logo-text');
    if (logoText) {
        logoText.style.fontSize = '2.5rem';
    }
});

// Adiciona efeito hover 3D aos cards
document.querySelectorAll('.service-card, .testimonial-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
      
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
      
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
      
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });
  
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
});

// Efeito de clique nos botões
document.querySelectorAll('.btn, .contact-btn').forEach(btn => {
    btn.addEventListener('mousedown', () => {
        btn.style.transform = 'translate(2px, 2px)';
    });
  
    btn.addEventListener('mouseup', () => {
        btn.style.transform = '';
    });
  
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
    });
});
