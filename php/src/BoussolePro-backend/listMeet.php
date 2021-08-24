<?php
$con = mysqli_connect("localhost", "root", "", "boussolepro");
error_reporting(E_ERROR);
$demandeMeet=[];
$sql="SELECT * FROM meetup ORDER BY ID DESC";
$result=mysqli_query($con,$sql) or die(mysqli_error($con));;
if($result){
    $cr=0;
    while($row=mysqli_fetch_assoc($result)){
        $demandeMeet[$cr]['ID']=$row['ID'];
        $demandeMeet[$cr]['prenom']=htmlspecialchars_decode($row['prenom'],ENT_QUOTES);
        $demandeMeet[$cr]['nom']=htmlspecialchars_decode($row['nom'],ENT_QUOTES);
        $demandeMeet[$cr]['avecQui']=htmlspecialchars_decode($row['avecQui'],ENT_QUOTES);
        $demandeMeet[$cr]['prenomContactSouhaite']=htmlspecialchars_decode($row['prenomContactSouhaite'],ENT_QUOTES);
        $demandeMeet[$cr]['nomContactSouhaite']=htmlspecialchars_decode($row['nomContactSouhaite'],ENT_QUOTES);
        $demandeMeet[$cr]['raisonMeet']=htmlspecialchars_decode($row['raisonMeet'],ENT_QUOTES);
        $demandeMeet[$cr]['autreInfos']=htmlspecialchars_decode($row['autreInfos'],ENT_QUOTES);
        $demandeMeet[$cr]['date']=$row['date'];
        $cr++;
    }
   // print_r($demandeSprint);
    echo json_encode($demandeMeet);
}else{
    http_response_code(404);

}
?>
