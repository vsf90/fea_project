<?php

// les informations de l'utilisateur connécté
$con = mysqli_connect("localhost", "root", "", "boussolepro");
error_reporting(E_ERROR);
//$id=$_GET['id'];
$email=$_GET['email'];
$sql="SELECT * FROM utilisateur WHERE email='{$email}' ORDER BY ID DESC";
     
$resultat=mysqli_query($con,$sql) or die(mysqli_error($con));
$row=mysqli_fetch_assoc($resultat);
 $row['nom']=htmlspecialchars_decode( $row['nom'],ENT_QUOTES);
 $row['prenom']=htmlspecialchars_decode( $row['prenom'],ENT_QUOTES);
 $row['email']=htmlspecialchars_decode( $row['email'],ENT_QUOTES);
 $row['pays']=htmlspecialchars_decode( $row['pays'],ENT_QUOTES);
 $row['ville']=htmlspecialchars_decode( $row['ville'],ENT_QUOTES);
 $row['entreprise']=htmlspecialchars_decode( $row['entreprise'],ENT_QUOTES);
 $row['objetEntreprise']=htmlspecialchars_decode( $row['objetEntreprise'],ENT_QUOTES);
 $row['activiteProfessionnelle']=htmlspecialchars_decode( $row['activiteProfessionnelle'],ENT_QUOTES);
 $row['role']=htmlspecialchars_decode( $row['role'],ENT_QUOTES);
 $row['password']=htmlspecialchars_decode( $row['password'],ENT_QUOTES);
 $row['type']=htmlspecialchars_decode( $row['type'],ENT_QUOTES);
 $row['verset']=htmlspecialchars_decode( $row['verset'],ENT_QUOTES);
 $row['secteur']=htmlspecialchars_decode( $row['secteur'],ENT_QUOTES);
 $row['expertiseSouhaitez']=htmlspecialchars_decode( $row['expertiseSouhaitez'],ENT_QUOTES);
 $row['expertise']=htmlspecialchars_decode( $row['expertise'],ENT_QUOTES);
 $row['centresInteret']=htmlspecialchars_decode( $row['centresInteret'],ENT_QUOTES);
 $row['confirmation']=htmlspecialchars_decode( $row['confirmation'],ENT_QUOTES);
 $row['membreFEA']=htmlspecialchars_decode( $row['membreFEA'],ENT_QUOTES);
 $row['abonnement']=htmlspecialchars_decode( $row['abonnement'],ENT_QUOTES);
 $row['topVille']=htmlspecialchars_decode( $row['topVille'],ENT_QUOTES);
 $row['urlImage']=htmlspecialchars_decode( $row['urlImage'],ENT_QUOTES);
 $row['confirmationLoi']=htmlspecialchars_decode( $row['confirmationLoi'],ENT_QUOTES);








// print_r($row);
 echo $json=json_encode($row);

exit;

 
?>
