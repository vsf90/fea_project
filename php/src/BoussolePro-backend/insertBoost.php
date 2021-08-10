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

     $radio=$request->radio;
     $nom=$request->nom;
     $prenom=$request->prenom;
     $entreprise=$request->entreprise;
     $secteur=$request->secteur;
     $contact=$request->contact;
     $radio1=$request->radio1;
     $objetif=$request->objetif;
     $montant=$request->montant;
     $commentaire=$request->commentaire;
    
    echo $radio;
    echo $prenom;
    echo $nom;
    echo $entreprise;
    echo $secteur;
    echo $contact;
    echo $radio1;
    echo $objetif;
    echo $montant;
    echo $commentaire;
   
   
    $date=date("Y-m-d H:i:s");    
  echo $date;
     $req="INSERT INTO boostpro ( `confirmationAbonne`, `prenom`, `nom`, `entreprise`, `secteur`, `contact`,  `typeCompagne`, `objetCompagne`, `montant`, `commentaire`, `date`) 
     VALUES ( '{$radio}', '{$prenom}', '{$nom}', '{$entreprise}','{$secteur}','{$contact}','{$radio1}','{$objetif}', '{$montant}','{$commentaire}', '{$date}' )";
       
     $resultat=mysqli_query($con,$req) or die(mysqli_error($con));
     if ($resultat){
         http_response_code(201);
     }else{
         http_response_code(422);
     }

     
 }

?>