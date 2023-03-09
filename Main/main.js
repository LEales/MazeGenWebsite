
$(document).ready(function() {
    const items = document.querySelectorAll('.image-container');
    const zoomOverlay = document.querySelector('.zoom-overlay');
    const zoomImage = zoomOverlay.querySelector('img');
    items.forEach(item => {
        const image = item.querySelector('img');
        image.addEventListener('click', () => {
            zoomImage.src = image.src;
            zoomOverlay.style.display = 'flex';
        });
    });
    zoomOverlay.addEventListener('click', () => {
        zoomOverlay.style.display = 'none';
    });
});

