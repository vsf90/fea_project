<?php

// les informations de l'utilisateur connécté
// $con = mysqli_connect("localhost", "root", "", "boussolepro1");
include 'connect.php';
error_reporting(E_ERROR);
//$id=$_GET['id'];
$email=$_GET['email'];
$sql="SELECT * FROM utilisateur WHERE email='{$email}' ORDER BY ID DESC";
     
$resultat=mysqli_query($con,$sql) or die(mysqli_error($con));
$row=mysqli_fetch_assoc($resultat);

// print_r($row);
echo $json=json_encode($row);

exit;

 
?>
