<?php
session_start();
$serverName = "localhost";
$userName = "root";
$password = "";
$dbname = "cosmetic";

// connect to db

$con = mysqli_connect($serverName, $userName, $password, $dbname);
if (isset($_POST["email"]) && isset($_POST["password"])) {
    $email = $_POST["email"];
    $password = $_POST["password"];
    // echo $password;
    $sql = "select * from users where email =$email and password =$password ";
    $result = mysqli_query($con, $sql);
    echo $result;
    // $isUser = mysqli_num_rows($result);
    // if ($isUser > 0) {
    //     echo "ok";
    // }
}
