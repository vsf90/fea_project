<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
// require 'connect.php';
// $con = mysqli_connect("localhost", "root", "", "boussolepro1");
include 'connect.php';
$id=$_GET['id'];
 $postdata=file_get_contents("php://input");
 if(isset($postdata) && !empty($postdata))
 {
     $request=json_decode($postdata);
   
     print_r($request);
     $PrénomContact1=htmlspecialchars($request->PrénomContact1,ENT_QUOTES);
     $NomContact1=htmlspecialchars($request->NomContact1,ENT_QUOTES);
     $TeleContact1=htmlspecialchars($request->TeleContact1,ENT_QUOTES);

     $PrénomContact2=htmlspecialchars($request->PrénomContact2,ENT_QUOTES);
     $NomContact2=htmlspecialchars($request->NomContact2,ENT_QUOTES);
     $TeleContact2=htmlspecialchars($request->TeleContact2,ENT_QUOTES);
    
    
       $req="UPDATE `utilisateur` SET `NomContact1`='$NomContact1', `PrenomContact1`='$PrénomContact1', `TeleContact1`='$TeleContact1',
        `NomContact2`='$NomContact2', `PrenomContact2`='$PrénomContact2', `TeleContact2`='$TeleContact2' WHERE ID='{$id}'"; 

       $resultat=mysqli_query($con,$req) or die(mysqli_error($con));
       if ($resultat){
           http_response_code(201);
       }else{
           http_response_code(422);
       }
  
       
   }
     ?>