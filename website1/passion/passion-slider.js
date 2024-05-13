const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const textBoxes = document.querySelectorAll('.textbox');

let currentIndex = 0;

function showTextBox(index) {
  textBoxes.forEach((textbox, idx) => {
    if (idx === index) {
      textbox.classList.add('active');
    } else {
      textbox.classList.remove('active');
    }
  });
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + textBoxes.length) % textBoxes.length;
  showTextBox(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % textBoxes.length;
  showTextBox(currentIndex);
});

// Show the first textbox initially
showTextBox(currentIndex);
