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

     $id=$_GET['id'];
     $nom=$request->nom;
     $prenom=$request->prenom;
     $avecQui=$request->AvecQui;
     $prenomContactSouhaite=$request->prenomContactSouhaite;
     $nomContactSouhaite=$request->nomContactSouhaite;
     $raisonMeet=$request->raisonMeet;
     $autreInfos=$request->autreInfos;
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