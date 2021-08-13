<?php
$con = mysqli_connect("localhost", "root", "", "boussolepro");
error_reporting(E_ERROR);
$DemandeStage=[];
$sql="SELECT * FROM publication WHERE type='DemandeStage' ORDER BY ID DESC";
$result=mysqli_query($con,$sql) or die(mysqli_error($con));;
if($result){
    $cr=0;
    while($row=mysqli_fetch_assoc($result)){
        $DemandeStage[$cr]['prenom']=$row['prenom'];
        $DemandeStage[$cr]['nom']=$row['nom'];
        $DemandeStage[$cr]['titre']=$row['titre'];
        $DemandeStage[$cr]['image']=$row['image'];
        $DemandeStage[$cr]['contenu']=$row['contenu'];
        $DemandeStage[$cr]['date']=$row['date'];
        $cr++;
    }
   //print_r($DemandeStage);

   echo json_encode($DemandeStage);
}else{
    http_response_code(404);

}
?>
