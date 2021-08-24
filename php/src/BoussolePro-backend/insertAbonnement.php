<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
// require 'connect.php';
$con = mysqli_connect("localhost", "root", "", "boussolepro");
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
    

     $req="INSERT INTO abonnement (`PrénomContact1`,`NomContact1`,`TeleContact1`, `PrénomContact2`,`NomContact2`,`TeleContact2`) 
     VALUES ('{$PrénomContact1}','{$NomContact1}','{$TeleContact1}','{$PrénomContact2}','{$NomContact2}','{$TeleContact2}' )";
       $resultat=mysqli_query($con,$req) or die(mysqli_error($con));
       if ($resultat){
           http_response_code(201);
       }else{
           http_response_code(422);
       }
  
       
   }
     ?>