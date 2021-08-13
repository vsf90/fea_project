<?php
$con = mysqli_connect("localhost", "root", "", "boussolepro");
error_reporting(E_ERROR);
$demandeSprint=[];
$sql="SELECT * FROM sprintpro ORDER BY ID DESC";
$result=mysqli_query($con,$sql) or die(mysqli_error($con));;
if($result){
    $cr=0;
    while($row=mysqli_fetch_assoc($result)){
        $demandeSprint[$cr]['ID']=$row['ID'];
        $demandeSprint[$cr]['initiateur']=$row['initiateur'];
        $demandeSprint[$cr]['prenom']=$row['prenom'];
        $demandeSprint[$cr]['nom']=$row['nom'];
        $demandeSprint[$cr]['avecQui']=$row['avecQui'];
        $demandeSprint[$cr]['prenomAbonne']=$row['prenomAbonne'];
        $demandeSprint[$cr]['rangAbonne']=$row['rangAbonne'];
        $demandeSprint[$cr]['prenomExterieure']=$row['prenomExterieure'];
        $demandeSprint[$cr]['raison']=$row['raison'];
        $demandeSprint[$cr]['creneaux']=$row['creneaux'];
        $demandeSprint[$cr]['date']=$row['date'];

        $cr++;
    }
   // print_r($demandeSprint);
    echo json_encode($demandeSprint);
}else{
    http_response_code(404);

}
?>
