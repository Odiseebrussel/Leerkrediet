<?php
$connection = mysqli_connect('54.36.188.190', 'root', 'Treflyn1995');
if (!$connection){
    die("Database Connection Failed" . mysqli_error($connection));
}
$select_db = mysqli_select_db($connection, 'Odisee');
if (!$select_db){
    die("Database Selection Failed" . mysqli_error($connection));
}
?>