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
     $titre=$request->titre;
    $img=$request->img;
     $contenu=$request->contenu;
  
    echo $prenom;
    echo $nom;
    echo $titre;
    echo $img;
    echo $contenu;
   
    $date=date("Y-m-d H:i:s");  
    $type="OffreStage";  
  echo $date;
 echo $type;
     $req="INSERT INTO publication (  `prenom`, `nom`, `titre`, `image`, `contenu`, `type`, `date`) 
     VALUES ('{$prenom}', '{$nom}', '{$titre}','{$img}', '{$contenu}','{$type}','{$date}')";
       
     $resultat=mysqli_query($con,$req) or die(mysqli_error($con));
     if ($resultat){
         http_response_code(201);
     }else{
         http_response_code(422);
     }

     
 }
//print_r($_POST);
?>