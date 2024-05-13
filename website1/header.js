window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        header.classList.add('blurred');
        header.classList.add('opaque');
    } else {
        header.classList.remove('blurred');
        header.classList.remove('opaque');
    }
});
