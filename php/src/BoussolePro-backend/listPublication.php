<?php
$con = mysqli_connect("localhost", "root", "", "boussolepro");
error_reporting(E_ERROR);
$Publication=[];
$sql="SELECT * FROM publication WHERE type='Publication' ORDER BY ID DESC";
$result=mysqli_query($con,$sql) or die(mysqli_error($con));;
if($result){
    $cr=0;
    while($row=mysqli_fetch_assoc($result)){
        $Publication[$cr]['ID']=$row['ID'];
        $Publication[$cr]['prenom']=$row['prenom'];
        $Publication[$cr]['nom']=$row['nom'];
        $Publication[$cr]['titre']=$row['titre'];
        $Publication[$cr]['image']=$row['image'];
        $Publication[$cr]['type']=$row['type'];
        $Publication[$cr]['contenu']=$row['contenu'];
        $Publication[$cr]['date']=$row['date'];
        $cr++;
    }
   //print_r($Publication);

   echo json_encode($Publication);
}else{
    http_response_code(404);

}
?>
