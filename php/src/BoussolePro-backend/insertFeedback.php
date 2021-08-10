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

     $nom=$request->nom;
     $prenom=$request->prenom;
     $avecqui=$request->avecqui;
     $service=$request->service;
     $organisation=$request->organisation;
     $ponctualité=$request->ponctualité;
     $qualité=$request->qualité;
     $informations=$request->informations;
     $informations1=$request->informations1;
     $importance=$request->importance;
     $evaluation=$request->evaluation;
     $valeurajoutée=$request->valeurajoutée;
     $motsclés=$request->motsclés;
     $feedbackparticulier=$request->feedbackparticulier;
     $autorisation=$request->autorisation;
     $amelioration=$request->amelioration;
     $feedbackequipe=$request->feedbackequipe;
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