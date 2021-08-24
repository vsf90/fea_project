<?php
$con = mysqli_connect("localhost", "root", "", "boussolepro");
error_reporting(E_ERROR);
$DemandeEmploi=[];
$sql="SELECT * FROM publication WHERE type='DemandeEmploi' ORDER BY ID DESC";
$result=mysqli_query($con,$sql) or die(mysqli_error($con));;
if($result){
    $cr=0;
    while($row=mysqli_fetch_assoc($result)){
        $DemandeEmploi[$cr]['prenom']=htmlspecialchars_decode($row['prenom'],ENT_QUOTES);
        $DemandeEmploi[$cr]['nom']=htmlspecialchars_decode($row['nom'],ENT_QUOTES);
        $DemandeEmploi[$cr]['titre']=htmlspecialchars_decode($row['titre'];
        $DemandeEmploi[$cr]['image']=htmlspecialchars_decode($row['image'];
        $DemandeEmploi[$cr]['contenu']=htmlspecialchars_decode($row['contenu'],ENT_QUOTES);
        $DemandeEmploi[$cr]['date']=$row['date'];
        $cr++;
    }
   //print_r($DemandeEmploi);

   echo json_encode($DemandeEmploi);
}else{
    http_response_code(404);

}
?>
