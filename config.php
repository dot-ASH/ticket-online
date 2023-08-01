<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "registration";

$uname  = $_POST['Uname'];
$uemail = $_POST['Umail'];
$uphn   = $_POST['Uphn'];
$uadd   = $_POST['Uadd'];
$postReg = "New record created successfully";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO info (name, email, phone, address)
VALUES ('$uname', '$uemail', '$uphn', '$uadd')";

if ($conn->query($sql) === TRUE) {
  $postReg = "New record created successfully";
} else {
  $postReg= "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>