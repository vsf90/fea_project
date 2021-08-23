<?php
// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
// header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
// header('Content-Type: application/json');

header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: *');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: *');

// require 'connect.php';
$con = mysqli_connect("localhost", "root", "", "boussolepro");
 $postdata=file_get_contents("php://input");
 if(isset($postdata) && !empty($postdata))
 {
     $request=json_decode($postdata);
   
     print_r($request);

     $img=$request->img;
     $nom=$request->nom;
     $activité=$request->activité;
     $avantage=$request->avantage;
     $lien=$request->lien;

     $nom=addslashes($nom)

    echo $img;
    echo $nom;
    echo $activité;
    echo $avantage;
    echo $lien;

     $req="INSERT INTO partenaire ( `image`, `nom`, `activite`, `avantage`, `lien`) 
     VALUES ( '{$img}','{$nom}', '{$activité}', '{$avantage}','{$lien}')";
      
    //  mysqli_query("set names 'utf8'");
     echo $req;
     $resultat=mysqli_query($con,$req) or die(mysqli_error($con));
     if ($resultat){
         http_response_code(201);
     }else{
         http_response_code(422);
     }

     
 }
//print_r($_POST);
?>