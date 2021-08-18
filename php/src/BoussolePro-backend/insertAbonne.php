<?php
// print_r($_POST["nom"]);

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
// require 'connect.php';
$con = mysqli_connect("localhost", "root", "", "boussolepro");
// print_r($con);
  $postdata=file_get_contents("php://input");
  print_r($postdata);
 if(isset($postdata) && !empty($postdata))
 {
     $request=json_decode($postdata);
   
     print_r($request);
     $nom=$request->nom;
     $prenom=$request->prenom;
     $telephone=$request->telephone;
     $email=$request->Email;
     $type=$request->type;
     $verset=$request->verset;
     $profession=$request->profession;
     $objectifPro=$request->ObjectifProfess;
     $entreprise=$request->entreprise;
     $secteur=$request->secteur;
     $ville=$request->ville;
     $villeTop=$request->villeTop; 
     $pays=$request->pays;
     $expertise=$request->expertise; 
     $expertiseSouhaitez=$request->expertiseSouhaitez; 
     $centresInteret=$request->centresInteret; 
     $confirmation=$request->confirmation; 
     $membreFEA=$request->membreFEA;
     $abonnement=$request->abonnement; 
     $confirmationLoi=$request->confirmationLoi;
     $urlImage=$request->urlImage;
  




     store:
     $sql="INSERT INTO utilisateur (
     `nom`,
     `prenom`,
     `email`,
     `pays`,
     `ville`,
     `entreprise`,
     `type`,
     `verset`,
     `profession`,
     `objectifPro`,
     `secteur`,
     `topVille`,
     `expertiseSouhaitez`,
     `expertise`,
     `centresInteret`,
     `confirmation`,
     `membreFEA`,
     `abonnement`,
     `confirmationLoi`,
     `urlImage`) 
     VALUES ('{$nom}','{$prenom}','{$email}','{$pays}','{$ville}',
            '{$entreprise}','{$type}','{$verset}', '{$profession}',
            '{$objectifPro}','{$secteur}','{$villeTop}',
            '{$expertiseSouhaitez}','{$expertise}','{$centresInteret}'
            ,'{$confirmation}','{$membreFEA}','{$abonnement}',
            '{$confirmationLoi}','{$urlImage}'
            )";
     print_r($sql);   
     $resultat=mysqli_query($con,$sql) or die(mysqli_error($con));
     if ($resultat){
         http_response_code(201);
     }else{
         http_response_code(422);
     }

     
 }

?>