<?php
$con = mysqli_connect("localhost", "root", "", "boussolepro");
error_reporting(E_ERROR);
$Publication=[];
$sql="SELECT * FROM publication WHERE type='Publication' ORDER BY ID DESC";
$result=mysqli_query($con,$sql) or die(mysqli_error($con));;
if($result){
    $cr=0;
    while($row=mysqli_fetch_assoc($result)){
<<<<<<< Updated upstream
        $Publication[$cr]['prenom']=htmlspecialchars_decode($row['prenom'],ENT_QUOTES);
        $Publication[$cr]['nom']=htmlspecialchars_decode($row['nom'],ENT_QUOTES);
        $Publication[$cr]['titre']=htmlspecialchars_decode($row['titre'],ENT_QUOTES);
        $Publication[$cr]['image']=htmlspecialchars_decode($row['image'],ENT_QUOTES);
        $Publication[$cr]['contenu']=htmlspecialchars_decode($row['contenu'],ENT_QUOTES);
=======
        $Publication[$cr]['ID']=$row['ID'];
        $Publication[$cr]['prenom']=$row['prenom'];
        $Publication[$cr]['nom']=$row['nom'];
        $Publication[$cr]['titre']=$row['titre'];
        $Publication[$cr]['image']=$row['image'];
        $Publication[$cr]['type']=$row['type'];
        $Publication[$cr]['contenu']=$row['contenu'];
>>>>>>> Stashed changes
        $Publication[$cr]['date']=$row['date'];
        $cr++;
    }
   //print_r($Publication);

   echo json_encode($Publication);
}else{
    http_response_code(404);

}
?>
