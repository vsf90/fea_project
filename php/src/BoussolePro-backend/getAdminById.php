<?php
/*header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');*/
// require 'connect.php';
$con = mysqli_connect("localhost", "root", "", "boussolepro");

$id=$_GET['id'];

 $sql="SELECT * FROM utilisateur WHERE role='Admin' AND ID='{$id}' LIMIT 1" ;
 
        
     $resultat=mysqli_query($con,$sql) or die(mysqli_error($con));
    $row=mysqli_fetch_assoc($resultat);

   // print_r($row);
    echo $json=json_encode($row);

exit;
    
//print_r($_POST);
?>