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

     $id=$_GET['ID'];
     $nom=$request->nom;
     $prenom=$request->prenom;
     $email=$request->email;
     $pays=$request->pays;
     $ville=$request->ville;
     $entreprise=$request->entreprise;
     $objetEntreprise=$request->objetEntreprise;
     $activiteProfessionnelle=$request->activiteProfessionnelle;
     $topVille=$request->topVille;
     $verset=$request->verset;
     $expertise=$request->expertise;
     $expertiseSouhaitez=$request->expertiseSouhaitez;
     $centresInteret=$request->centresInteret;

     //store:
     $sql="UPDATE `utilisateur` SET `nom`='$nom',`prenom`='$prenom',`email`='$email',`pays`='$pays',`ville`='$ville',`entreprise`='$entreprise',`objetEntreprise`='$objetEntreprise',`activiteProfessionnelle`='$activiteProfessionnelle' ,`verset`='$verset',`expertiseSouhaitez`='$expertiseSouhaitez',`expertise`='$expertise',`centresInteret`='$centresInteret',`topVille`='$topVille' WHERE ID='{$id}' LIMIT 1";
     $resultat=mysqli_query($con,$sql) or die(mysqli_error($con));
     if ($resultat){
         http_response_code(204);
     }else{
        return http_response_code(422);
     }
     
     
 }
//print_r($_POST);
?>