<?php
// Start session
session_start();

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve username and password from form
    $username = $_POST['name'];
    $password = $_POST['password'];

    // Simulated database credentials (Replace with your actual database credentials)
    $db_username = "root";
    $db_password = "";

    // Check if username and password match
    if ($username === $db_username && $password === $db_password) {
        // Authentication successful, set session variables
        $_SESSION['loggedin'] = true;
        $_SESSION['name'] = $name;
        // Redirect to welcome page
        header("location: landing.php");
    } else {
        // Authentication failed, redirect back to login page with error
        header("location: login.html?error=1");
    }
}
?>
