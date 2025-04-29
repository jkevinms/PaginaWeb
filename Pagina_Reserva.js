// Datos de los paquetes de tour
const tours = [
    {
        title: "San Pedro Familiar",
        description: "4 días de historia, playa y naturaleza para toda la familia.",
        images: ["images/playa-guayacanes.jpg", "images/juan-dolio-beach.jpg", "images/Laguna-Mallen-picazo-1024x575.jpeg", "images/cueva-de-las-maravillas7_7943cb19-e3bc-ffb0-dce480f31552a0ee.jpg", "images/Crazy Horse Ranch.jpg"],
        keywords: ["playa", "cueva", "laguna", "ranch"]
    },
    {
        title: "Escapada Romántica",
        description: "Un fin de semana romántico en playas de Juan Dolio con experiencias exclusivas.",
        images: ["images/II 1.webp", "images/II 2.jfif", "images/II 3.jpg", "images/II 4.jpg", "images/II 5.webp"],
        keywords: ["cueva", "ron", "playa"]
    },
    {
        title: "Entre Panas y Ron",
        description: "Diversión asegurada entre amigos con playas, buggies y ron premium.",
        images: ["images/III 1.webp", "images/III 2.jpg", "images/III 3.webp", "images/III 4.jpg", "images/III 5.webp"],
        keywords: ["ron", "casino", "buggy"]
    },
    {
        title: "7 Días de Caribe Cultural",
        description: "Una semana completa explorando cultura, naturaleza y playas.",
        images: ["images/IV 1.jpg", "images/IV 2.webp", "images/IV 3.jpg", "images/IV 4.jpg","images/IV 5.jpg"],
        keywords: ["cueva", "playa", "ron", "museo"]
    },
    {
        title: "Aventura Activa",
        description: "Para los aventureros: deportes acuáticos, trekking y buggies extremos.",
        images: ["images/V 1.webp", "images/V 2.jfif", "images/V 3.jpg", "images/V 4.webp", "images/V 5.jpg"],
        keywords: ["surf", "kayak", "buggy", "cueva"]
    },
    {
        title: "San Pedro Zen",
        description: "Relájate con yoga, cultura y bienestar frente al mar.",
        images: ["images/VI 1.jpg", "images/VI 2.jpg", "images/VI 3.jpg", "images/VI 4.jfif", "images/VI 5.jpg"],
        keywords: ["laguna", "cueva", "yoga", "ron"]
    }
];

// Mostrar tours en la página
const toursContainer = document.getElementById('toursContainer');

tours.forEach((tour, index) => {
    const card = document.createElement('div');
    card.className = "tour-card";
    card.innerHTML = `
        <div class="tour-image-container">
            <img src="${tour.images[0]}" alt="${tour.title}">
        </div>
        <div class="tour-content">
            <h3>${tour.title}</h3>
            <p>${tour.description}</p>
            <button>Reservar</button>
        </div>
    `;
    card.addEventListener('click', () => openModal(index));
    toursContainer.appendChild(card);
});

// Modal
const modal = document.getElementById('tourModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const reserveBtn = document.getElementById('reserveBtn');
const closeBtn = document.querySelector('.close');
let currentTourIndex = 0;
let currentImageIndex = 0;

function openModal(index) {
    currentTourIndex = index;
    currentImageIndex = 0;
    updateModal();
    modal.style.display = "block";
}

function updateModal() {
    const tour = tours[currentTourIndex];
    modalImage.src = tour.images[currentImageIndex];
    modalTitle.textContent = tour.title;
    modalDescription.textContent = tour.description;
}

document.getElementById('prevImage').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + tours[currentTourIndex].images.length) % tours[currentTourIndex].images.length;
    updateModal();
});

document.getElementById('nextImage').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % tours[currentTourIndex].images.length;
    updateModal();
});

closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
});

// Buscador
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', () => {
    const value = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll('.tour-card');
    cards.forEach((card, index) => {
        const tour = tours[index];
        if (tour.title.toLowerCase().includes(value) || tour.keywords.some(k => k.includes(value))) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

// Botón reservar
reserveBtn.addEventListener('click', () => {
    window.location.href = "Feria_manon.html"; // Redirecciona a tu formulario de reserva
});
