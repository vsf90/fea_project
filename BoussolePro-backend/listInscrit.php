<?php
// $con = mysqli_connect("localhost", "root", "", "boussolepro1");
include 'connect.php';
error_reporting(E_ERROR);
$listInscrit=[];
$sql="SELECT * FROM utilisateur WHERE role='Inscrit' ORDER BY ID DESC";
$result=mysqli_query($con,$sql) or die(mysqli_error($con));;
if($result){
    $cr=0;
    while($row=mysqli_fetch_assoc($result)){
        $listInscrit[$cr]['ID']=$row['ID'];
        $listInscrit[$cr]['prenom']=htmlspecialchars_decode($row['prenom'],ENT_QUOTES);
        $listInscrit[$cr]['nom']=htmlspecialchars_decode($row['nom'],ENT_QUOTES);
        $listInscrit[$cr]['email']=htmlspecialchars_decode($row['email'],ENT_QUOTES);
        $listInscrit[$cr]['pays']=htmlspecialchars_decode($row['pays'],ENT_QUOTES);
        $listInscrit[$cr]['ville']=htmlspecialchars_decode($row['ville'],ENT_QUOTES);
        $listInscrit[$cr]['entreprise']=htmlspecialchars_decode($row['entreprise'],ENT_QUOTES);
        $listInscrit[$cr]['objetEntreprise']=htmlspecialchars_decode($row['objetEntreprise'],ENT_QUOTES);
        $listInscrit[$cr]['activiteProfessionnelle']=htmlspecialchars_decode($row['activiteProfessionnelle'],ENT_QUOTES);
        $listInscrit[$cr]['type']=htmlspecialchars_decode($row['type'],ENT_QUOTES);
        $listInscrit[$cr]['verset']=htmlspecialchars_decode($row['verset'],ENT_QUOTES);
        $listInscrit[$cr]['secteur']=htmlspecialchars_decode($row['secteur'],ENT_QUOTES);
        $listInscrit[$cr]['expertiseSouhaitez']=htmlspecialchars_decode($row['expertiseSouhaitez'],ENT_QUOTES);
        $listInscrit[$cr]['expertise']=htmlspecialchars_decode($row['expertise'],ENT_QUOTES);
        $listInscrit[$cr]['centresInteret']=htmlspecialchars_decode($row['centresInteret'],ENT_QUOTES);
        $listInscrit[$cr]['confirmation']=htmlspecialchars_decode($row['confirmation'],ENT_QUOTES);
        $listInscrit[$cr]['membreFEA']=htmlspecialchars_decode($row['membreFEA'],ENT_QUOTES);
        $listInscrit[$cr]['abonnement']=htmlspecialchars_decode($row['abonnement'],ENT_QUOTES);
        $listInscrit[$cr]['topVille']=htmlspecialchars_decode($row['topVille'],ENT_QUOTES);
        $listInscrit[$cr]['urlImage']=htmlspecialchars_decode($row['urlImage'],ENT_QUOTES);
        $listInscrit[$cr]['confirmationLoi']=htmlspecialchars_decode($row['confirmationLoi'],ENT_QUOTES);
        $listInscrit[$cr]['telephone']=htmlspecialchars_decode($row['telephone'],ENT_QUOTES);
        $listInscrit[$cr]['NomContact1']=htmlspecialchars_decode($row['NomContact1'],ENT_QUOTES);
        $listInscrit[$cr]['PrenomContact1']=htmlspecialchars_decode($row['PrenomContact1'],ENT_QUOTES);
        $listInscrit[$cr]['TeleContact1']=htmlspecialchars_decode($row['TeleContact1'],ENT_QUOTES);
        $listInscrit[$cr]['NomContact2']=htmlspecialchars_decode($row['NomContact2'],ENT_QUOTES);
        $listInscrit[$cr]['PrenomContact2']=htmlspecialchars_decode($row['PrenomContact2'],ENT_QUOTES);
        $listInscrit[$cr]['TeleContact2']=htmlspecialchars_decode($row['TeleContact2'],ENT_QUOTES);
        $listInscrit[$cr]['chosesessentielles']=htmlspecialchars_decode($row['chosesessentielles'],ENT_QUOTES);
        $listInscrit[$cr]['CadreTravail']=htmlspecialchars_decode($row['CadreTravail'],ENT_QUOTES);
        $listInscrit[$cr]['FontConfiance']=htmlspecialchars_decode($row['FontConfiance'],ENT_QUOTES);
        $listInscrit[$cr]['ReseauQualite']=htmlspecialchars_decode($row['ReseauQualite'],ENT_QUOTES);
        $listInscrit[$cr]['InformationImportante']=htmlspecialchars_decode($row['InformationImportante'],ENT_QUOTES);
        $listInscrit[$cr]['NouveauxClients']=htmlspecialchars_decode($row['NouveauxClients'],ENT_QUOTES);
        $listInscrit[$cr]['AiderDevelopper']=htmlspecialchars_decode($row['AiderDevelopper'],ENT_QUOTES);
        $listInscrit[$cr]['Benefices']=htmlspecialchars_decode($row['Benefices'],ENT_QUOTES);



        $cr++;
    } 
  
    echo json_encode($listInscrit);
}else{
    http_response_code(404);

}
?>
