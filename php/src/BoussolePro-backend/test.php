<?php 
session_start();
 $con = mysqli_connect("localhost", "root", "", "boussolepro");
 echo "hello";
 echo $_SESSION['ID'];
if(isset($_SESSION['ID'])){
    echo "salam";
    echo $_SESSION['ID'];
}else{
    echo "error";
}
?>