<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $phones=$_POST["phones"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $to = "bc090402541@gmail.com"; // Replace with your email address
    $subject = "New Contact Form Submission";
    $headers = "From: $email";

    mail($to, $subject, $message, $headers);
    echo "Thank you! Your message has been sent.";
}


?>