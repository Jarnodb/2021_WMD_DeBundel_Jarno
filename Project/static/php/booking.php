<?php
$servername = "ID331097_hotelsite.db.webhosting.be";
$username = "ID331097_hotelsite";
$password = "Kappa158";
$dbname = "ID331097_hotelsite";

$fname = $_POST["fname"];
$lname = $_POST["lname"];
$email = $_POST["email"];
$startdate = $_POST["startdate"];
$enddate  = $_POST["enddate"];
$room = $_POST["room"];
$package = $_POST["package"];


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO tblGeboekteKamers (bookStartDate, bookEndDate, bookRoomType, fname, lname, email )
VALUES ('$startdate', '$enddate', '$room', '$fname', '$lname', '$email')";

if ($conn->query($sql) === TRUE) {
  echo "Room booked succesfully.";

  $to_email = $email;
  $subject = 'Testing PHP Mail';
  $message = "Dear " + $fname +"\n \nYou have succesfully booked a "+$room+" with the "+$package+" package,\nfrom "+$startdate + " untill "+$enddate+".\n \nEnjoy your stay!";
  $headers = 'From: noreply @ harmony . com';
  mail($to_email, $subject, $message, $headers);


} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>