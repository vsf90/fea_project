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
     $avecqui=$request->avecqui;
     $objet=$request->objet;
     $matin=$request->matin;
     $apresmidi=$request->apresmidi;
     $soir=$request->soir;
     $semaine=$request->semaine;
     $weekend=$request->weekend;


    echo $radio;
    echo $prenom;
    echo $nom;
    echo $avecqui;
    echo $objet;
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
        $creneaux.="  aprè-midi";
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
     $req="INSERT INTO relaisbp (`initiateur`, `prenom`, `nom`,`avecQui`, `objet`, `creneaux`, `date`) 
     VALUES ( '{$radio}', '{$prenom}', '{$nom}','{$avecqui}', '{$objet}', '{$creneaux}', '{$date}' )";
       
     $resultat=mysqli_query($con,$req) or die(mysqli_error($con));
     if ($resultat){
         http_response_code(201);
     }else{
         http_response_code(422);
     }

     
 }
//print_r($_POST);
?>