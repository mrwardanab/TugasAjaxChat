<?php
$usernameInput = $_GET['username'];
$passwordInput = $_GET['password'];

$file = fopen('login.txt', 'r');
    $good=false;
    while(!feof($file)){
        $line = fgets($file);
        list($user, $pass) = explode(';', $line);
        if(trim($user) == $usernameInput && trim($pass) == $passwordInput){
            $good=true;
            header("location:chat.html");
            break;
        }
    }
?>  