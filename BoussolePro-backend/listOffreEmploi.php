<?php
// $con = mysqli_connect("localhost", "root", "", "boussolepro1");
include 'connect.php';
error_reporting(E_ERROR);
$OffreEmploi=[];
$sql="SELECT * FROM publication WHERE type='OffreEmploi' ORDER BY ID DESC";
$result=mysqli_query($con,$sql) or die(mysqli_error($con));;
if($result){
    $cr=0;
    while($row=mysqli_fetch_assoc($result)){
        $OffreStage[$cr]['ID']=htmlspecialchars_decode($row['ID'],ENT_QUOTES);
        $OffreEmploi[$cr]['prenom']=htmlspecialchars_decode($row['prenom'],ENT_QUOTES);
        $OffreEmploi[$cr]['nom']=htmlspecialchars_decode($row['nom'],ENT_QUOTES);
        $OffreEmploi[$cr]['titre']=htmlspecialchars_decode($row['titre'],ENT_QUOTES);
        $OffreEmploi[$cr]['image']=htmlspecialchars_decode($row['image'],ENT_QUOTES);
        $OffreEmploi[$cr]['contenu']=htmlspecialchars_decode($row['contenu'],ENT_QUOTES);
        $OffreEmploi[$cr]['date']=$row['date'];
        $cr++;
    }
   //print_r($OffreEmploi);

   echo json_encode($OffreEmploi);
}else{
    http_response_code(404);

}
?>
