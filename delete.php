<?php
$serverName = "localhost";
$userName = "root";
$password = "";
$dbname = "cosmetic";

// connect to db

$con = mysqli_connect($serverName, $userName, $password, $dbname);
if (mysqli_connect_errno()) {
    echo "failed to connect";
}
$productId = $_GET['id'];
$query = "delete from products where id = $productId";
mysqli_query($con, $query);
header("Location: http://localhost:6969/cosmetic/admin.php");
