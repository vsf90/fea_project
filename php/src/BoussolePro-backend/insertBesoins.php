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

     $prenom=$request->prenom;
     $nom=$request->nom;
     $besoins=$request->besoins;
     $date1=$request->date1;
     $autresdemandes=$request->autresdemandes;
    
     echo $nom;
    echo $prenom;
    echo $besoins;
    echo $date1;
    echo $autresdemandes;

    $date=date("Y-m-d H:i:s");   
    echo $date;
     $req="INSERT INTO besoins ( `nom`, `prenom`, `besoins`, `dateDeplacement`, `autresDemandes`, `date`) 
     VALUES ( '{$nom}','{$prenom}', '{$besoins}','{$date1}', '{$autresdemandes}', '{$date}' )";
       
     $resultat=mysqli_query($con,$req) or die(mysqli_error($con));
     if ($resultat){
         http_response_code(201);
     }else{
         http_response_code(422);
     }

     
 }
//print_r($_POST);
?>