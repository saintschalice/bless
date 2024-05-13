function openPopup() {
    var overlay = document.getElementById('popupOverlay');
    var popup = document.getElementById('loginPopup');

    overlay.classList.add('active');
    popup.classList.add('active');
}

function closePopup(event) {
    var overlay = document.getElementById('popupOverlay');
    var popup = document.getElementById('loginPopup');
    if (event.target === overlay) { // Check if click originated from the overlay
        overlay.classList.remove('active');
        popup.classList.remove('active');
    }
}

document.addEventListener('click', closePopup); // Add event listener for clicks on the