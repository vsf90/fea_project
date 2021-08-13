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

     $prénom=$request->prénom;
     $nom=$request->nom;
     $pays=$request->pays;
     $ville=$request->ville;
     $entreprise=$request->entreprise;
     $objet=$request->objet;
     $activité=$request->activité;
     $email=$request->email;
     $password=$request->password;
     $confirmpassword=$request->confirmpassword;

    echo $nom;
    echo $prénom;
    echo $pays;
    echo $ville;
    echo $entreprise;
    echo $objet;
    echo $activité;
    echo $email;
    echo $password;
    echo $confirmpassword;
  $role="Modérateur";
    echo $role; 
     $req="INSERT INTO utilisateur ( `nom`, `prenom`, `email`, `pays`, `ville`, `entreprise`, `objetEntreprise`, `activiteProfessionnelle`, `role`, `password`) 
     VALUES ( '{$nom}', '{$prénom}', '{$email}','{$pays}','{$ville}','{$entreprise}','{$objet}','{$activité}','{$role}','{$password}')";
       
     $resultat=mysqli_query($con,$req) or die(mysqli_error($con));
     if ($resultat){
         http_response_code(201);
     }else{
         http_response_code(422);
     }

     
 }
//print_r($_POST);
?>