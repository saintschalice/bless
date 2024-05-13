<?php
// Include your database connection script
include 'db_connection.php';

// Retrieve form data
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];

echo "Name: " . $name . "<br>";
echo "Email: " . $email . "<br>";
echo "Password: " . $password . "<br>";


// Hash the password for security
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// Prepare and bind the statement to prevent SQL injection
$stmt = $conn->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $name, $email, $hashed_password);

// Execute the statement
if ($stmt->execute()) {
    echo "New record created successfully";
} else {
    echo "Error: " . $stmt->error;
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>
