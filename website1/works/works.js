let slideIndex = 0;

function moveSlide(direction) {
    const images = document.querySelectorAll('.images');
    const numSlides = images.length;

    slideIndex += direction;

    if (slideIndex < 0) {
        slideIndex = numSlides - 1;
    } else if (slideIndex >= numSlides) {
        slideIndex = 0;
    }

    const transformValue = -slideIndex * 100 + '%';
    document.querySelector('.images-container').style.transform = 'translateX(' + transformValue + ')';
}
