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
     $PrénomContact1=$request->PrénomContact1;
     $NomContact1=$request->NomContact1;
     $TeleContact1=$request->TeleContact1;

     $PrénomContact2=$request->PrénomContact2;
     $NomContact2=$request->NomContact2;
     $TeleContact2=$request->TeleContact2;
    

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