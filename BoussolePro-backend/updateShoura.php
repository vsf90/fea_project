<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
// require 'connect.php';
// $con = mysqli_connect("localhost", "root", "", "boussolepro1");
include 'connect.php';
 $postdata=file_get_contents("php://input");
 if(isset($postdata) && !empty($postdata))
 {
     $request=json_decode($postdata);
   
     print_r($request);

     $id=$_GET['id'];
     $initiateur=htmlspecialchars($request->Initiateur,ENT_QUOTES);
     $nom=htmlspecialchars($request->nom,ENT_QUOTES);
     $prenom=htmlspecialchars($request->prenom,ENT_QUOTES);
     $avecQui=htmlspecialchars($request->AvecQui,ENT_QUOTES);
     $problematique=htmlspecialchars($request->problematique,ENT_QUOTES);
     $domainesExpert=htmlspecialchars($request->domainesExpert,ENT_QUOTES);
     $creneaux=htmlspecialchars($request->creneaux,ENT_QUOTES);
    // $date=$request->date;

     //store:
     $sql="UPDATE `shourapro` SET `initiateur`='$initiateur',`prenom`='$prenom',`nom`='$nom',`avecQui`='$avecQui',`problematique`='$problematique',`domainesExpert`='$domainesExpert',`creneaux`='$creneaux' WHERE ID='{$id}' LIMIT 1";
     $resultat=mysqli_query($con,$sql) or die(mysqli_error($con));
     if ($resultat){
         http_response_code(204);
     }else{
        return http_response_code(422);
     }

     
 }
//print_r($_POST);
?>