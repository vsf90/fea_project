<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
// require 'connect.php';
// $con = mysqli_connect("localhost", "root", "", "boussolepro1");
include 'connect.php';
 $postdata=file_get_contents("php://input");
 if(isset($postdata) && !empty($postdata))
 {
     $request=json_decode($postdata);
   
     print_r($request);

     $nom=htmlspecialchars($request->nom,ENT_QUOTES);
     $prenom=htmlspecialchars($request->prenom,ENT_QUOTES);
     $radio=htmlspecialchars($request->radio,ENT_QUOTES);
     $prenommeet=htmlspecialchars($request->prenommeet,ENT_QUOTES);
     $nommeet=htmlspecialchars($request->nommeet,ENT_QUOTES);
     $raison=htmlspecialchars($request->raison,ENT_QUOTES);
     $info=htmlspecialchars($request->info,ENT_QUOTES);

     echo $nom;
     echo $prenom;
     echo $radio;
     echo $prenommeet;
     echo $nommeet;
     echo $raison;
     echo $info;

    $date=date("Y-m-d H:i:s");    
     echo $date;
  
     $reqMeet="INSERT INTO meetup (`prenom`, `nom`, `avecQui`, `prenomContactSouhaite`, `nomContactSouhaite`, `raisonMeet`, `autreInfos`, `date`) 
     VALUES ( '{$prenom}', '{$nom}', '{$radio}', '{$prenommeet}', '{$nommeet}','{$raison}','{$info}', '{$date}' )";
       
     $resultat=mysqli_query($con,$reqMeet) or die(mysqli_error($con));
     if ($resultat){
         http_response_code(201);
     }else{
         http_response_code(422);
     }

     
 }
//print_r($_POST);
?>