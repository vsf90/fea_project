<?php
// $con = mysqli_connect("localhost", "root", "", "boussolepro1");
include 'connect.php';
error_reporting(E_ERROR);
$listUtilisateur=[];
$sql="SELECT * FROM utilisateur  ORDER BY ID DESC";
$result=mysqli_query($con,$sql) or die(mysqli_error($con));;
if($result){
    $i=0;
    while($row=mysqli_fetch_assoc($result)){
        $listUtilisateur[$i]['ID']=$row['ID'];
        $listUtilisateur[$i]['prenom']=htmlspecialchars_decode($row['prenom'],ENT_QUOTES);
        $listUtilisateur[$i]['nom']=htmlspecialchars_decode($row['nom'],ENT_QUOTES);
        $listUtilisateur[$i]['profession']=htmlspecialchars_decode($row['profession'],ENT_QUOTES);
        $listUtilisateur[$i]['urlImage']=htmlspecialchars_decode($row['urlImage'],ENT_QUOTES);


        $i++;
    } 
   // print_r($demandeSprint);
    echo json_encode($listUtilisateur);
}else{
    http_response_code(404);

}
?>
