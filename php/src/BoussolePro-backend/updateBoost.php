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
     $confirmationAbonne=$request->confirmationAbonne;
     $nom=$request->nom;
     $prenom=$request->prenom;
     $entreprise=$request->entreprise;
     $secteur=$request->secteur;
     $contact=$request->contact;
     $typeCompagne=$request->typeCompagne;
     $objetCompagne=$request->objetCompagne;
     $montant=$request->montant;
     $commentaire=$request->commentaire;

    // $date=$request->date;
   

     //store:
     $sql="UPDATE `boostpro` SET `confirmationAbonne`='$confirmationAbonne',`prenom`='$prenom',`nom`='$nom',`entreprise`='$entreprise',`secteur`='$secteur',`contact`='$contact',`typeCompagne`='$typeCompagne',`objetCompagne`='$objetCompagne',`montant`='$montant',`commentaire`='$commentaire' WHERE ID='{$id}' LIMIT 1";
     $resultat=mysqli_query($con,$sql) or die(mysqli_error($con));
     if ($resultat){
         http_response_code(204);
     }else{
        return http_response_code(422);
     }

     
 }
//print_r($_POST);
?>