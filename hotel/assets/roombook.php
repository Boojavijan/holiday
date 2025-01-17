<?php
// Retrieve form data
$roomType = $_POST['roomType'];
$checkInDate = $_POST['checkInDate'];
$checkOutDate = $_POST['checkOutDate'];
$guestCount = $_POST['guestCount'];
$contactInfo = $_POST['contactInfo'];

// Connect to the database
$con = mysqli_connect("localhost", "root", "", "holiday");

// Check connection
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

// Prepare SQL query
$sql = "INSERT INTO bookingform(roomType,checkInDate,checkOutDate,guestCount, contactInfo) 
        VALUES ('$roomType', '$checkInDate', '$checkOutDate', '$guestCount', '$contactInfo')";

// Execute the query
$r = mysqli_query($con, $sql);

// Check if the query was successful
if ($r) {
    echo "Booking successful!";
} else {
    echo "Error: " . mysqli_error($con);
}

// Close the database connection
mysqli_close($con);
?>
