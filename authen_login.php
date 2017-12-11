<?php  
 //require('db_connection.php');
include("db_connection.php");
session_start();
    if(isset($_POST['username']) && isset($_POST['password'])) {

        //$username=mysqli_real_escape_string($db,$_POST['username']);
        //$password=mysqli_real_escape_string($db,$_POST['password']);
        //$result=mysqli_query($db,"SELECT uname FROM users WHERE rnummer='$username' and wachtwoord='$password'");
        //$count=mysqli_num_rows($result);
        //$row=mysqli_fetch_array($result,MYSQLI_ASSOC);

        if($count==1) {

            //:$_SESSION['login_user']=$row['uname'];
            //echo $row['uname']

        }

    }
?>