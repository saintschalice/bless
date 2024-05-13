const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

// Toggle nav
toggle.addEventListener('click', () =>
  document.body.classList.toggle('show-nav')
);

// Show modal
open.addEventListener('click', () => modal.classList.add('show-modal'));

// Hide modal
close.addEventListener('click', () => modal.classList.remove('show-modal'));

// Hide modal on outside click
window.addEventListener('click', e =>
  e.target == modal ? modal.classList.remove('show-modal') : false
);

document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector(".modal-form");
  form.addEventListener("submit", function(e) {
      e.preventDefault(); // Prevent the form from submitting

      // Get the values from the form fields
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirm-password").value;

      // Check if passwords match
      if (password !== confirmPassword) {
          alert("Passwords do not match. Please try again.");
          return; // Exit the function if passwords don't match
      }

      // Create a FormData object to send form data to the server
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('password', password);

      // Send form data to the server using fetch API
      fetch('signup.php', {
          method: 'POST',
          body: formData
      })
      .then(response => response.text())
      .then(data => {
          alert(data); // Display response from the server
          if (data === "New record created successfully") {
              // Reset form if signup is successful
              form.reset();
              // Optionally, close the modal after successful signup
              modal.classList.remove('show-modal');
          }
      })
      .catch(error => {
          console.error('Error:', error);
          alert('An error occurred. Please try again.');
      });
  });
});
