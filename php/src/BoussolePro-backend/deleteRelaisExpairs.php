<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
// require 'connect.php';
$con = mysqli_connect("localhost", "root", "", "boussolepro");
$id=$_GET['id'];
echo $sql="DELETE FROM profilerelaisexpert WHERE ID='{$id}' LIMIT 1" ;
 
        
     $resultat=mysqli_query($con,$sql) or die(mysqli_error($con));
     if ($resultat){
         http_response_code(204);
     }else{
         http_response_code(422);
     }
     echo "deleted";
//print_r($_POST);
?>