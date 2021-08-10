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
     $radio=$request->radio;
     $prenommeet=$request->prenommeet;
     $nommeet=$request->nommeet;
     $raison=$request->raison;
     $info=$request->info;

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