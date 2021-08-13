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
        $demandeMeet[$cr]['prenom']=$row['prenom'];
        $demandeMeet[$cr]['nom']=$row['nom'];
        $demandeMeet[$cr]['avecQui']=$row['avecQui'];
        $demandeMeet[$cr]['prenomContactSouhaite']=$row['prenomContactSouhaite'];
        $demandeMeet[$cr]['nomContactSouhaite']=$row['nomContactSouhaite'];
        $demandeMeet[$cr]['raisonMeet']=$row['raisonMeet'];
        $demandeMeet[$cr]['autreInfos']=$row['autreInfos'];
        $demandeMeet[$cr]['date']=$row['date'];
        $cr++;
    }
   // print_r($demandeSprint);
    echo json_encode($demandeMeet);
}else{
    http_response_code(404);

}
?>
