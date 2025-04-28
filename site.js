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