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
$id = $_GET['id'];
$sql = "delete from `carts` where `id_product`=$id";
if (mysqli_query($con, $sql) == true) {
    header("Location:http://localhost:6969/Cosmetic/shopping-cart.php");
}
