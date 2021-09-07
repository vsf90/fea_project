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
     $nom=htmlspecialchars($request->nom,ENT_QUOTES);
     $prenom=htmlspecialchars($request->prenom,ENT_QUOTES);
     $avecQui=htmlspecialchars($request->AvecQui,ENT_QUOTES);
     $prenomContactSouhaite=htmlspecialchars($request->prenomContactSouhaite,ENT_QUOTES);
     $nomContactSouhaite=htmlspecialchars($request->nomContactSouhaite,ENT_QUOTES);
     $raisonMeet=htmlspecialchars($request->raisonMeet,ENT_QUOTES);
     $autreInfos=htmlspecialchars($request->autreInfos,ENT_QUOTES);
    // $date=$request->date;

     //store:
     $sql="UPDATE `meetup` SET `prenom`='$prenom',`nom`='$nom',`avecQui`='$avecQui',`prenomContactSouhaite`='$prenomContactSouhaite',`nomContactSouhaite`='$nomContactSouhaite',`raisonMeet`='$raisonMeet',`autreInfos`='$autreInfos' WHERE ID='{$id}' LIMIT 1";
     $resultat=mysqli_query($con,$sql) or die(mysqli_error($con));
     if ($resultat){
         http_response_code(204);
     }else{
        return http_response_code(422);
     }

 }
//print_r($_POST);
?>