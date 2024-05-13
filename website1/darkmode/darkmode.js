const toggleBtn = document.getElementById('toggleBtn');
const body = document.body;
const bookText = document.querySelector('.book-text');
const bookLine = document.querySelector('.book-line');
const appointmentBox = document.querySelector('.appointment-box');
const bookHeadline = document.querySelector('.book-headline');
const bookFormInputs = document.querySelectorAll('.book-booking form input');
const bookSubmitBtn = document.querySelector('.book-booking form input[type="submit"]');

toggleBtn.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    bookText.classList.toggle('dark-mode');
    bookLine.classList.toggle('dark-mode');
    appointmentBox.classList.toggle('dark-mode');
    bookHeadline.classList.toggle('dark-mode');
    bookFormInputs.forEach(input => {
        input.classList.toggle('dark-mode');
    });
    bookSubmitBtn.classList.toggle('dark-mode');
});
