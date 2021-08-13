<?php
$con = mysqli_connect("localhost", "root", "", "boussolepro");
error_reporting(E_ERROR);
$OffreStage=[];
$sql="SELECT * FROM publication WHERE type='OffreStage' ORDER BY ID DESC";
$result=mysqli_query($con,$sql) or die(mysqli_error($con));;
if($result){
    $cr=0;
    while($row=mysqli_fetch_assoc($result)){
        $OffreStage[$cr]['prenom']=$row['prenom'];
        $OffreStage[$cr]['nom']=$row['nom'];
        $OffreStage[$cr]['titre']=$row['titre'];
        $OffreStage[$cr]['image']=$row['image'];
        $OffreStage[$cr]['contenu']=$row['contenu'];
        $OffreStage[$cr]['date']=$row['date'];
        $cr++;
    }
   //print_r($OffreStage);

   echo json_encode($OffreStage);
}else{
    http_response_code(404);

}
?>
