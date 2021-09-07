<?php
// $con = mysqli_connect("localhost", "root", "", "boussolepro1");
include 'connect.php';
error_reporting(E_ERROR);
$demandeBoost=[];
$sql="SELECT * FROM boostpro ORDER BY ID DESC";
$result=mysqli_query($con,$sql) or die(mysqli_error($con));;
if($result){
    $cr=0;
    while($row=mysqli_fetch_assoc($result)){
        $demandeBoost[$cr]['ID']=$row['ID'];
        $demandeBoost[$cr]['confirmationAbonne']=htmlspecialchars_decode($row['confirmationAbonne'],ENT_QUOTES);
        $demandeBoost[$cr]['prenom']=htmlspecialchars_decode($row['prenom'],ENT_QUOTES);
        $demandeBoost[$cr]['nom']=htmlspecialchars_decode($row['nom'],ENT_QUOTES);
        $demandeBoost[$cr]['entreprise']=htmlspecialchars_decode($row['entreprise'],ENT_QUOTES);
        $demandeBoost[$cr]['secteur']=htmlspecialchars_decode($row['secteur'],ENT_QUOTES);
        $demandeBoost[$cr]['contact']=htmlspecialchars_decode($row['contact'],ENT_QUOTES);
        $demandeBoost[$cr]['typeCompagne']=htmlspecialchars_decode($row['typeCompagne'],ENT_QUOTES);
        $demandeBoost[$cr]['objetCompagne']=htmlspecialchars_decode($row['objetCompagne'],ENT_QUOTES);
        $demandeBoost[$cr]['montant']=htmlspecialchars_decode($row['montant'],ENT_QUOTES);
        $demandeBoost[$cr]['commentaire']=htmlspecialchars_decode($row['commentaire'],ENT_QUOTES);
        $demandeBoost[$cr]['date']=$row['date'];
        if($row['valider']==1){
            $demandeBoost[$cr]['valider']="validée";
        }else{
            $demandeBoost[$cr]['valider']="non validée";
        }

        $cr++;
    } 
   // print_r($demandeSprint);
    echo json_encode($demandeBoost);
}else{
    http_response_code(404);

}
?>
