function openPopup() {
    var overlay = document.getElementById('popupOverlay');
    var popup = document.getElementById('loginPopup');

    overlay.classList.add('active');
    popup.classList.add('active');

    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        const formData = new FormData(form); // Create FormData object from the form
        
        // Send form data to the server using Fetch API
        fetch('login.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            alert(data); // Display response from the server
            if (data.includes("successful")) {
                // If login is successful, you can redirect the user to another page
                window.location.href = "/dashboard"; // Redirect to dashboard page
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
    });
}
