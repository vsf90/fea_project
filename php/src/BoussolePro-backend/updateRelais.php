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
     $initiateur=$request->Initiateur;
     $nom=$request->nom;
     $prenom=$request->prenom;
     $avecQui=$request->AvecQui;
     $objet=$request->objet;
     $creneaux=$request->creneaux;
    // $date=$request->date;

     //store:
     $sql="UPDATE `relaisbp` SET `initiateur`='$initiateur',`prenom`='$prenom',`nom`='$nom',`avecQui`='$avecQui',`objet`='$objet',`creneaux`='$creneaux' WHERE ID='{$id}' LIMIT 1";
     $resultat=mysqli_query($con,$sql) or die(mysqli_error($con));
     if ($resultat){
         http_response_code(204);
     }else{
        return http_response_code(422);
     }

     
 }
//print_r($_POST);
?>