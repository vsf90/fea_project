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

<<<<<<< Updated upstream
     $img=htmlspecialchars($request->img,ENT_QUOTES);
     $nom=htmlspecialchars($request->nom,ENT_QUOTES);
     $activité=htmlspecialchars($request->activité,ENT_QUOTES);
     $avantage=htmlspecialchars($request->avantage,ENT_QUOTES);
     $lien=htmlspecialchars($request->lien,ENT_QUOTES);
=======
     $img=$request->img;
     $nom=$request->nom;
     $activité=$request->activité;
     $avantage=$request->avantage;
     $lien=$request->lien;


     $nom = htmlspecialchars($nom);
     $nom = preg_replace("/\'/", "&#39;", $nom);
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

    echo $img;
    echo $nom;
    echo $activité;
    echo $avantage;
    echo $lien;

     $req="INSERT INTO partenaire ( `image`, `nom`, `activite`, `avantage`, `lien`) 
     VALUES ( '{$img}','{$nom}', '{$activité}', '{$avantage}','{$lien}')";
      
     $resultat=mysqli_query($con,$req) or die(mysqli_error($con));
     if ($resultat){
         http_response_code(201);
     }else{
         http_response_code(422);
     }

     
 }
//print_r($_POST);
?>