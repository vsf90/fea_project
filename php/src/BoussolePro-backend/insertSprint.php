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

     $radio=htmlspecialchars($request->radio,ENT_QUOTES);
     $nom=htmlspecialchars($request->nom,ENT_QUOTES);
     $prenom=htmlspecialchars($request->prenom,ENT_QUOTES);
     $avecqui=htmlspecialchars($request->avecqui,ENT_QUOTES);
     $prenomabonné=htmlspecialchars($request->prenomabonné,ENT_QUOTES);
     $rang=htmlspecialchars($request->rang,ENT_QUOTES);
     $prenomexterieure=htmlspecialchars($request->prenomexterieure,ENT_QUOTES);
     $raisonsprint=htmlspecialchars($request->raisonsprint,ENT_QUOTES);
     $matin=htmlspecialchars($request->matin,ENT_QUOTES);
     $apresmidi=htmlspecialchars($request->apresmidi,ENT_QUOTES);
     $soir=htmlspecialchars($request->soir,ENT_QUOTES);
     $semaine=htmlspecialchars($request->semaine,ENT_QUOTES);
     $weekend=htmlspecialchars($request->weekend,ENT_QUOTES);


    echo $radio;
    echo $prenom;
    echo $nom;
    echo $avecqui;
    echo $prenomabonné;
    echo $rang;
    echo $prenomexterieure;
    echo $raisonsprint;
    echo $matin;
    echo $apresmidi;
    echo $soir;
    echo $semaine;
    echo $weekend;
    $creneaux="";
    if($matin){
   $creneaux.="matin";
    }
    if($apresmidi){
        $creneaux.="  après-midi";
    }
    if($soir){
        $creneaux.="  soir";
    }
    if($semaine){
        $creneaux.="  semaine";
    }
    if($weekend){
        $creneaux.=" weekend";
    }
    $date=date("Y-m-d H:i:s");    
  echo $date;
  echo $creneaux;
     $req="INSERT INTO sprintpro (`initiateur`, `prenom`, `nom`,`avecQui`, `prenomAbonne`, `rangAbonne`, `prenomExterieure`, `raison`, `creneaux`, `date`) 
     VALUES ( '{$radio}', '{$prenom}', '{$nom}','{$avecqui}', '{$prenomabonné}','{$rang}','{$prenomexterieure}','{$raisonsprint}', '{$creneaux}', '{$date}' )";
       
     $resultat=mysqli_query($con,$req) or die(mysqli_error($con));
     if ($resultat){
         http_response_code(201);
     }else{
         http_response_code(422);
     }

     
 }

?>