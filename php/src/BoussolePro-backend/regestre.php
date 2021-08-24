<?php
// print_r($_POST["nom"]);

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
// require 'connect.php';
$con = mysqli_connect("localhost", "root", "", "boussolepro");
// print_r($con);
  $postdata=file_get_contents("php://input");
  print_r($postdata);
 if(isset($postdata) && !empty($postdata))
 {
     $request=json_decode($postdata);
   
     print_r($request);

     $email=htmlspecialchars($request->email,ENT_QUOTES);
     $pass=htmlspecialchars($request->pass,ENT_QUOTES);
     $nom=htmlspecialchars($request->nom,ENT_QUOTES);
     $prenom=htmlspecialchars($request->prenom,ENT_QUOTES);
     $ville=htmlspecialchars($request->ville,ENT_QUOTES);
     $pays=htmlspecialchars($request->pays,ENT_QUOTES);
     $role=htmlspecialchars($request->role,ENT_QUOTES);



     store:
     $sql="INSERT INTO utilisateur (`prenom`,`nom`,`email`,`pays`,`ville`,`role`,`password`) 
     VALUES ('{$prenom}','{$nom}','{$email}','{$pays}','{$ville}','{$role}','{$pass}')";
     print_r($sql);   
     $resultat=mysqli_query($con,$sql) or die(mysqli_error($con));
     if ($resultat){
         http_response_code(201);
     }else{
         http_response_code(422);
     }

     
 }

?>