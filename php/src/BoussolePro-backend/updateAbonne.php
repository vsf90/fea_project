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

     $id=$_GET['id'];
     $nom=htmlspecialchars($request->nom,ENT_QUOTES);
     $prenom=htmlspecialchars($request->prenom,ENT_QUOTES);
     $email=htmlspecialchars($request->email,ENT_QUOTES);
     $pays=htmlspecialchars($request->pays,ENT_QUOTES);
     $ville=htmlspecialchars($request->ville,ENT_QUOTES);
     $entreprise=htmlspecialchars($request->entreprise,ENT_QUOTES);
     $objetEntreprise=htmlspecialchars($request->objetEntreprise,ENT_QUOTES);
     $activiteProfessionnelle=htmlspecialchars($request->activiteProfessionnelle,ENT_QUOTES);
     $topVille=htmlspecialchars($request->topVille,ENT_QUOTES);
     $verset=htmlspecialchars($request->verset,ENT_QUOTES);
     $expertise=htmlspecialchars($request->expertise,ENT_QUOTES);
     $expertiseSouhaitez=htmlspecialchars($request->expertiseSouhaitez,ENT_QUOTES);
     $centresInteret=htmlspecialchars($request->centresInteret,ENT_QUOTES);
     echo $nom;
    echo $prenom;
    echo $email;
      echo $pays;
      echo $ville;
      echo $entreprise;
      echo $objetEntreprise;
      echo $activiteProfessionnelle;
      echo $topVille;
      echo $verset;
      echo $expertise;
      echo $expertiseSouhaitez;
      echo $centresInteret;  
    
    //echo 

     //store:
     $sql="UPDATE `utilisateur` SET `nom`='$nom',`prenom`='$prenom',`email`='$email',`pays`='$pays',
     `ville`='$ville',`entreprise`='$entreprise',`objetEntreprise`='$objetEntreprise',
     `activiteProfessionnelle`='$activiteProfessionnelle' ,`verset`='$verset',
     `expertiseSouhaitez`='$expertiseSouhaitez',`expertise`='$expertise',`centresInteret`='$centresInteret',
     `topVille`='$topVille' WHERE ID='{$id}' LIMIT 1";
     $resultat=mysqli_query($con,$sql) or die(mysqli_error($con));
     if ($resultat){
         http_response_code(204);
     }else{
        return http_response_code(422);
     }
 
     
     
 }
//print_r($_POST);
?>