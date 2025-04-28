document.querySelectorAll('.Imagen').forEach(img => {
    img.addEventListener('click', () => {
        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('modal-img');
        modal.style.display = 'flex';
        modalImg.src = img.src;
    });
});

document.getElementById('close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target.id === 'modal') {
        document.getElementById('modal').style.display = 'none';
    }
});



// seleccionar cada tarjeta individual, no el contenedor
document.querySelectorAll('.cards > div').forEach(card => {
    card.addEventListener('click', () => {
        const modal = document.getElementById('modalcards');
        const modalContent = document.getElementById('cards1');
        
        // coloca el contenido del card en el modal
        modalContent.innerHTML = `
            <h3>${card.querySelector('h3').innerText}</h3>
            <p>${card.querySelector('p').innerText}</p>
        `;
        
        modal.style.display = 'flex';
    });
});

// Botón de cerrar
document.getElementById('close1').addEventListener('click', () => {
    document.getElementById('modalcards').style.display = 'none';
});

// También cerrar al hacer clic fuera del contenido
document.getElementById('modalcards').addEventListener('click', (e) => {
    if (e.target.id === 'modalcards') {
        document.getElementById('modalcards').style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const viewport = document.querySelector('.carousel__viewport');
    const slides = document.querySelectorAll('.carousel__slide');
    const navButtons = document.querySelectorAll('.carousel__navigation-button');
    const arrowLinks = document.querySelectorAll('.carousel__prev, .carousel__next');
  
    function scrollToSlide(targetId) {
      const targetSlide = document.getElementById(targetId);
      if (targetSlide) {
        const left = targetSlide.offsetLeft;
        viewport.scrollTo({
          left: left,
          behavior: 'smooth'
        });
      }
    }
  
    navButtons.forEach(button => {
      button.addEventListener('click', event => {
        event.preventDefault();
        const targetId = button.getAttribute('href').substring(1);
        scrollToSlide(targetId);
      });
    });
  
    arrowLinks.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        scrollToSlide(targetId);
      });
    });
  
    const observerOptions = {
      root: viewport,
      threshold: 0.5
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Array.from(slides).indexOf(entry.target);
          navButtons.forEach(btn => btn.classList.remove('active'));
          if (navButtons[index]) {
            navButtons[index].classList.add('active');
          }
        }
      });
    }, observerOptions);
  
    slides.forEach(slide => observer.observe(slide));

    const sliderSelector = document.getElementById('sliderSelector');

sliderSelector.addEventListener('change', () => {
  const targetId = sliderSelector.value;
  scrollToSlide(targetId); // Usa la misma función que ya hicimos antes
});

  });

  