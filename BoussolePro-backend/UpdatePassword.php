<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
include 'connect.php';
//print_r($image);

 $postdata=file_get_contents("php://input");

 if(isset($postdata) && !empty($postdata))
 {
   
     $request=json_decode($postdata);
  
   
     print_r($request);
     $email=htmlspecialchars($request->email,ENT_QUOTES);
    // $NewPass='0000';
     $NewPass=password_hash("0000", PASSWORD_DEFAULT);

    
   echo $email;
  
     
   $sql="UPDATE `utilisateur` SET `password`='$NewPass' WHERE email='{$email}' LIMIT 1";
     $resultat=mysqli_query($con,$sql) or die(mysqli_error($con));
     if ($resultat){
         http_response_code(204);
     }else{
        return http_response_code(422);
     }


 
   
  
 
 }
 
//print_r($_POST);
?>