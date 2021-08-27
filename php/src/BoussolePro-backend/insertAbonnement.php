<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
// require 'connect.php';
$con = mysqli_connect("localhost", "root", "", "boussolepro");
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
    

<<<<<<< HEAD
    
       $req="UPDATE `utilisateur` SET `NomContact1`='$NomContact1', `PrenomContact1`='$PrénomContact1', `TeleContact1`='$TeleContact1',
        `NomContact2`='$NomContact2', `PrenomContact2`='$PrénomContact2', `TeleContact2`='$TeleContact2' WHERE ID='{$id}'"; 
=======
<<<<<<< Updated upstream
     $req="INSERT INTO utilisateur (`NomContact1`,`PrenomContact1`,`TeleContact1`,`NomContact2`, `PrenomContact2`,`TeleContact2`) 
     VALUES ('{$NomContact1}','{$PrénomContact1}','{$TeleContact1}','{$NomContact2}','{$PrénomContact2}','{$TeleContact2}' ) WHERE ID='{$id}'";
=======
     $req="INSERT INTO utilisateur (`PrénomContact1`,`NomContact1`,`TeleContact1`, `PrénomContact2`,`NomContact2`,`TeleContact2`) 
     VALUES ('{$PrénomContact1}','{$NomContact1}','{$TeleContact1}','{$PrénomContact2}','{$NomContact2}','{$TeleContact2}' )";
>>>>>>> Stashed changes
>>>>>>> 19555fb4583e59c4547d476e8615012923a219be
       $resultat=mysqli_query($con,$req) or die(mysqli_error($con));
       if ($resultat){
           http_response_code(201);
       }else{
           http_response_code(422);
       }
  
       
   }
     ?>