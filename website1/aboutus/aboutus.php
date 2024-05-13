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
        <link rel="stylesheet" type="text/css" href="aboutus.css">

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
                window.location.href = 'aboutus.php';
            }

            function redirectToBook() {
                window.location.href = '/website1/book/book.php';
            }
        </script>


    </head>

    <body>
        <div class="aboutus-img">
            <img src="../blss3.png">
        </div>
        <div class="aboutus-text">
            <h1> About BLESS</h1>
            <p>BLESS provides a wide range of operational services in the market research field be it in the qualitative research and quantitative studies.
                Qualitative Research like recruitment of respondents for Focus Group Discussion(FGD)
                /in-home visits/life immersion then notetaking and transcription of FGD/in-depth interviews.
                Quantitative Research like BASES Studies, Pricing Tests, Concept Tests, Brand Name Test and Product Taste Test.
                Other services like supply of trained interviewer researchers to implement research and Quality Control Checks (Backchecking and spot checking)</p>
        </div>
    </body>

    <div id="footer">
        <?php include '/xampp/htdocs/website1/footer/footer.html'; ?>
    </div>

    </html>