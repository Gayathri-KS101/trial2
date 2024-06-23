function changeImage(event) {
    const img = event.target;
    const tempSrc = img.src;
    img.src = img.getAttribute('data-alt-src');
    img.setAttribute('data-alt-src', tempSrc);
}

document.querySelectorAll('img[data-alt-src]').forEach(img => {
    img.addEventListener('touchstart', changeImage);
    img.addEventListener('mouseenter', changeImage);
    img.addEventListener('touchend', changeImage);
    img.addEventListener('mouseleave', changeImage);
});

const container = document.getElementById('content-container');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

leftArrow.addEventListener('click', () => {
    container.scrollLeft -= 300;
});

rightArrow.addEventListener('click', () => {
    container.scrollLeft += 300;
});

