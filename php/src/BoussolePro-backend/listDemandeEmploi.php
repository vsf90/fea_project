<?php
$con = mysqli_connect("localhost", "root", "", "boussolepro");
error_reporting(E_ERROR);
$DemandeEmploi=[];
$sql="SELECT * FROM publication WHERE type='DemandeEmploi' ORDER BY ID DESC";
$result=mysqli_query($con,$sql) or die(mysqli_error($con));;
if($result){
    $cr=0;
    while($row=mysqli_fetch_assoc($result)){
        $DemandeEmploi[$cr]['prenom']=$row['prenom'];
        $DemandeEmploi[$cr]['nom']=$row['nom'];
        $DemandeEmploi[$cr]['titre']=$row['titre'];
        $DemandeEmploi[$cr]['image']=$row['image'];
        $DemandeEmploi[$cr]['contenu']=$row['contenu'];
        $DemandeEmploi[$cr]['date']=$row['date'];
        $cr++;
    }
   //print_r($DemandeEmploi);

   echo json_encode($DemandeEmploi);
}else{
    http_response_code(404);

}
?>
