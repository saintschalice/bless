
    function redirectToAboutUs() {
        // Get the current URL
        var currentUrl = window.location.href;
        
        // Check if the current URL contains "aboutus.php"
        if (currentUrl.includes("aboutus.php")) {
            // If yes, redirect to the specific path
            window.location.href = '/website1/aboutus/aboutus.php';
        } else {
            // If not, redirect to the general aboutus.php
            window.location.href = '/aboutus.php';
        }
    }