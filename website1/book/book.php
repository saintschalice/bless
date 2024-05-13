<!DOCTYPE html>
<html lang="en">
<DOCTYPE html>
    <html lang="en">

    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Kanit">
        <link href='https://fonts.googleapis.com/css?family=Lexend Deca' rel='stylesheet'>
        <link rel="stylesheet" type="text/css" href="../web.css">
        <link rel="stylesheet" type="text/css" href="../footer/footer.css">
        <link rel="stylesheet" type="text/css" href="book.css">

        <?php
        $root = $_SERVER['DOCUMENT_ROOT'];
        $about_us_url = $root . "/website1/aboutus/aboutus.php";
        include($root . '/website1/header/header.html');
        ?>

        <script>
            function redirectToHome() {
                window.location.href = '/website1/website.html';
            }

            function redirectToAbout() {
                window.location.href = '/website1/aboutus/aboutus.php';
            }

            function redirectToBook() {
                window.location.href = 'book.php';
            }
        </script>
    </head>

    <body>

        
        <div class="book-text">
        <h1 class="book-help">We're Here to Help!</h1>
        <div class="book-line"> </div>
            <p class="book-desc">Book an appointment with BLESS today for expertly conducted qualitative and quantitative research services, including focus groups, in-depth interviews, BASES studies, pricing tests, and more!</p>
        </div>

        <div class="book-container">
            <div class="appointment-box">
                <div class="book-headline">

                </div>


                <div class="book-booking">
                    <h1>Book an Appointment</h1>
                    <form action="#" method="post">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" required>

                        <label for="company">Company:</label>
                        <input type="text" id="company" name="company" required>

                        <label for="job_title">Job Title:</label>
                        <input type="text" id="job_title" name="job_title" required>

                        <label for="email">Email Address:</label>
                        <input type="email" id="email" name="email" required>

                        <label for="phone">Phone:</label>
                        <input type="tel" id="phone" name="phone" required>

                        <input type="submit" value="Book">
                    </form>
                </div>
            </div>
        </div>


    </body>



    <div id="footer">
        <?php include '/xampp/htdocs/website1/footer/footer.html'; ?>
    </div>

    </html>