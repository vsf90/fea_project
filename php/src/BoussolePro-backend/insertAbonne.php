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
    // $nom=htmlspecialchars($request->nom,ENT_QUOTES);
    // $prenom=htmlspecialchars($request->prenom,ENT_QUOTES);
     $telephone=htmlspecialchars($request->telephone,ENT_QUOTES);
    // $email=htmlspecialchars($request->Email,ENT_QUOTES);
     $type=htmlspecialchars($request->type,ENT_QUOTES);
     $verset=htmlspecialchars($request->verset,ENT_QUOTES);
     $profession=htmlspecialchars($request->profession,ENT_QUOTES);
     $objectifPro=htmlspecialchars($request->ObjectifProfess,ENT_QUOTES);
     $entreprise=htmlspecialchars($request->entreprise,ENT_QUOTES);
     $secteur=htmlspecialchars($request->secteur,ENT_QUOTES);
     //$ville=htmlspecialchars($request->ville,ENT_QUOTES);
     $villeTop=htmlspecialchars($request->villeTop,ENT_QUOTES); 
    // $pays=htmlspecialchars($request->pays,ENT_QUOTES);
     $expertise=htmlspecialchars($request->expertise,ENT_QUOTES); 
     $expertiseSouhaitez=htmlspecialchars($request->expertiseSouhaitez,ENT_QUOTES); 
     $centresInteret=htmlspecialchars($request->centresInteret,ENT_QUOTES); 
     $confirmation=htmlspecialchars($request->Radio5,ENT_QUOTES); 
     $membreFEA=htmlspecialchars($request->Radio2,ENT_QUOTES);
     $abonnement=htmlspecialchars($request->Radio3,ENT_QUOTES); 
     $confirmationLoi=htmlspecialchars($request->Radio4,ENT_QUOTES);
     $urlImage=$request->urlImage;
    //$rang="100";
    //$role="Inscrit";

     //store:
     $sql="INSERT INTO utilisateur (
      
     
     `entreprise`, 
     `objetEntreprise`,
     `activiteProfessionnelle`,
     `role`,
     `type`,
     `verset`,
     `secteur`,
     `expertiseSouhaitez`,
     `expertise`, 
     `centresInteret`, 
     `confirmation`, 
     `membreFEA`, 
     `abonnement`,
     `topVille`,
     `urlImage`,
     `confirmationLoi`,
     `telephone`) 
     VALUES (
            '{$entreprise}','{$objectifPro}','{$profession}','{$role}','{$type}',
            '{$verset}', '{$secteur}',
            '{$expertiseSouhaitez}','{$expertise}','{$centresInteret}',
            '{$confirmation}','{$membreFEA}','{$abonnement}',
            '{$villeTop}','{$urlImage}','{$confirmationLoi}','{$telephone}'
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