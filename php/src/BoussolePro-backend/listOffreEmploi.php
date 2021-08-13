<?php
$con = mysqli_connect("localhost", "root", "", "boussolepro");
error_reporting(E_ERROR);
$OffreEmploi=[];
$sql="SELECT * FROM publication WHERE type='OffreEmploi' ORDER BY ID DESC";
$result=mysqli_query($con,$sql) or die(mysqli_error($con));;
if($result){
    $cr=0;
    while($row=mysqli_fetch_assoc($result)){
        $OffreEmploi[$cr]['prenom']=$row['prenom'];
        $OffreEmploi[$cr]['nom']=$row['nom'];
        $OffreEmploi[$cr]['titre']=$row['titre'];
        $OffreEmploi[$cr]['image']=$row['image'];
        $OffreEmploi[$cr]['contenu']=$row['contenu'];
        $OffreEmploi[$cr]['date']=$row['date'];
        $cr++;
    }
   //print_r($OffreEmploi);

   echo json_encode($OffreEmploi);
}else{
    http_response_code(404);

}
?>
