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
     $confirmationAbonne=htmlspecialchars($request->confirmationAbonne,ENT_QUOTES);
     $nom=htmlspecialchars($request->nom,ENT_QUOTES);
     $prenom=htmlspecialchars($request->prenom,ENT_QUOTES);
     $entreprise=htmlspecialchars($request->entreprise,ENT_QUOTES);
     $secteur=htmlspecialchars($request->secteur,ENT_QUOTES);
     $contact=htmlspecialchars($request->contact,ENT_QUOTES);
     $typeCompagne=htmlspecialchars($request->typeCompagne,ENT_QUOTES);
     $objetCompagne=htmlspecialchars($request->objetCompagne,ENT_QUOTES);
     $montant=htmlspecialchars($request->montant,ENT_QUOTES);
     $commentaire=htmlspecialchars($request->commentaire,ENT_QUOTES);

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