<?php
// Include the database connection script
include 'db_connection.php';

// Retrieve form data
$email = $_POST['email'];
$password = $_POST['password'];

// Prepare and execute a SELECT statement to check if the user exists
$stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    // User exists, verify password
    $user = $result->fetch_assoc();
    if (password_verify($password, $user['password'])) {
        // Password is correct, login successful
        session_start(); // Start a new session
        $_SESSION['user_id'] = $user['id']; // Set session variable with user ID or other relevant data
        header("Location: dashboard.php"); // Redirect to dashboard or home page
        exit(); // Stop further execution
    } else {
        // Password is incorrect
        echo "Incorrect password. Please try again.";
    }
} else {
    // User does not exist
    echo "User not found. Please check your email.";
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>
