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

     $nom=htmlspecialchars($request->nom,ENT_QUOTES);
     $prenom=htmlspecialchars($request->prenom,ENT_QUOTES);
     $avecqui=htmlspecialchars($request->avecqui,ENT_QUOTES);
     $service=htmlspecialchars($request->service,ENT_QUOTES);
     $organisation=htmlspecialchars($request->organisation,ENT_QUOTES);
     $ponctualité=htmlspecialchars($request->ponctualité,ENT_QUOTES);
     $qualité=htmlspecialchars($request->qualité,ENT_QUOTES);
     $informations=htmlspecialchars($request->informations,ENT_QUOTES);
     $informations1=htmlspecialchars($request->informations1,ENT_QUOTES);
     $importance=htmlspecialchars($request->importance,ENT_QUOTES);
     $evaluation=htmlspecialchars($request->evaluation,ENT_QUOTES);
     $valeurajoutée=htmlspecialchars($request->valeurajoutée,ENT_QUOTES);
     $motsclés=htmlspecialchars($request->motsclés,ENT_QUOTES);
     $feedbackparticulier=htmlspecialchars($request->feedbackparticulier,ENT_QUOTES);
     $autorisation=htmlspecialchars($request->autorisation,ENT_QUOTES);
     $amelioration=htmlspecialchars($request->amelioration,ENT_QUOTES);
     $feedbackequipe=htmlspecialchars($request->feedbackequipe,ENT_QUOTES);
    echo $nom;
    echo $prenom;
    echo $avecqui;
    echo $service;
    echo $organisation;
    echo $ponctualité;
    echo $qualité;
    echo $informations;
    echo $informations1;
    echo $importance;
    echo $evaluation;
    echo $valeurajoutée;
    echo $motsclés;
    echo $feedbackparticulier;
    echo $autorisation;
    echo $amelioration;
    echo $feedbackequipe;
    
    $date=date("Y-m-d H:i:s");    
  echo $date;
 
     $req="INSERT INTO feedback (`nom`, `prenom`, `avecQui`, `serviceRecent`, `organisation`, `ponctualite`, `qualite`, `informations`, `informationBoussolePro`, `importance`, `evaluation`, `valeurAjoutee`, `motsClesSprint`, `feedbackParticulier`, `autorisation`, `feedbackAmelioration`, `feedbackEquipe`, `date`) 
     VALUES ( '{$nom}','{$prenom}', '{$avecqui}','{$service}', '{$organisation}', '{$ponctualité}', '{$qualité}', '{$informations}', '{$informations1}', '{$importance}', '{$evaluation}', '{$valeurajoutée}','{$motsclés}','{$feedbackparticulier}','{$autorisation}','{$amelioration}','{$feedbackequipe}', '{$date}' )";
       
     $resultat=mysqli_query($con,$req) or die(mysqli_error($con));
     if ($resultat){
         http_response_code(201);
     }else{
         http_response_code(422);
     }

     
 }
//print_r($_POST);
?>