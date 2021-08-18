<?php
$con = mysqli_connect("localhost", "root", "", "boussolepro");
error_reporting(E_ERROR);
$listUtilisateur=[];
$sql="SELECT * FROM utilisateur  ORDER BY ID DESC";
$result=mysqli_query($con,$sql) or die(mysqli_error($con));;
if($result){
    $i=0;
    while($row=mysqli_fetch_assoc($result)){
        $listUtilisateur[$i]['ID']=$row['ID'];
        $listUtilisateur[$i]['prenom']=$row['prenom'];
        $listUtilisateur[$i]['nom']=$row['nom'];
        $listUtilisateur[$i]['profession']=$row['profession'];
        $listUtilisateur[$i]['urlImage']=$row['urlImage'];


        $i++;
    } 
   // print_r($demandeSprint);
    echo json_encode($listUtilisateur);
}else{
    http_response_code(404);

}
?>
