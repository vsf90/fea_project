<?php
$con = mysqli_connect("localhost", "root", "", "boussolepro");
error_reporting(E_ERROR);
$demandeBoost=[];
$sql="SELECT * FROM boostpro ORDER BY ID DESC";
$result=mysqli_query($con,$sql) or die(mysqli_error($con));;
if($result){
    $cr=0;
    while($row=mysqli_fetch_assoc($result)){
        $demandeBoost[$cr]['ID']=$row['ID'];
        $demandeBoost[$cr]['confirmationAbonne']=$row['confirmationAbonne'];
        $demandeBoost[$cr]['prenom']=$row['prenom'];
        $demandeBoost[$cr]['nom']=$row['nom'];
        $demandeBoost[$cr]['entreprise']=$row['entreprise'];
        $demandeBoost[$cr]['secteur']=$row['secteur'];
        $demandeBoost[$cr]['contact']=$row['contact'];
        $demandeBoost[$cr]['typeCompagne']=$row['typeCompagne'];
        $demandeBoost[$cr]['objetCompagne']=$row['objetCompagne'];
        $demandeBoost[$cr]['montant']=$row['montant'];
        $demandeBoost[$cr]['commentaire']=$row['commentaire'];
        $demandeBoost[$cr]['date']=$row['date'];
        $cr++;
    } 
   // print_r($demandeSprint);
    echo json_encode($demandeBoost);
}else{
    http_response_code(404);

}
?>
