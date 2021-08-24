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
     $nom=htmlspecialchars($request->nom,ENT_QUOTES);
     $img=$request->img;
     $role=htmlspecialchars($request->role,ENT_QUOTES);
     $compétances=htmlspecialchars($request->compétances,ENT_QUOTES);
    echo $nom;
    echo $role;
    echo $img;
    echo $compétances;
   
  
 
     $req="INSERT INTO profilerelaisexpert ( `nom`, `image`, `role`, `competances`) 
     VALUES ( '{$nom}','{$img}', '{$role}','{$compétances}')";
       
     $resultat=mysqli_query($con,$req) or die(mysqli_error($con));
     if ($resultat){
         http_response_code(201);
     }else{
         http_response_code(422);
     }

     
 }
//print_r($_POST);
?>