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
        $demandeSprint[$cr]['initiateur']=htmlspecialchars_decode($row['initiateur'],ENT_QUOTES);
        $demandeSprint[$cr]['prenom']=htmlspecialchars_decode($row['prenom'],ENT_QUOTES);
        $demandeSprint[$cr]['nom']=htmlspecialchars_decode($row['nom'],ENT_QUOTES);
        $demandeSprint[$cr]['avecQui']=htmlspecialchars_decode($row['avecQui'],ENT_QUOTES);
        $demandeSprint[$cr]['prenomAbonne']=htmlspecialchars_decode($row['prenomAbonne'],ENT_QUOTES);
        $demandeSprint[$cr]['rangAbonne']=htmlspecialchars_decode($row['rangAbonne'],ENT_QUOTES);
        $demandeSprint[$cr]['prenomExterieure']=htmlspecialchars_decode($row['prenomExterieure'],ENT_QUOTES);
        $demandeSprint[$cr]['raison']=htmlspecialchars_decode($row['raison'],ENT_QUOTES);
        $demandeSprint[$cr]['creneaux']=htmlspecialchars_decode($row['creneaux'],ENT_QUOTES);
        $demandeSprint[$cr]['date']=$row['date'];
        if($row['valider']==1){
            $demandeSprint[$cr]['valider']="validée";
        }else{
            $demandeSprint[$cr]['valider']="non validée";
        }


        $cr++;
    }
   // print_r($demandeSprint);
    echo json_encode($demandeSprint);
}else{
    http_response_code(404);

}
?>
