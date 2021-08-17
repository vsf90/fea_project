<?php
$con = mysqli_connect("localhost", "root", "", "boussolepro");
error_reporting(E_ERROR);
$NotreReseau=[];
$sql="SELECT * FROM utilisateur  ORDER BY ID DESC";
$result=mysqli_query($con,$sql) or die(mysqli_error($con));;
if($result){
    $cr=0;
    while($row=mysqli_fetch_assoc($result)){
        $NotreReseau[$cr]['ID']=$row['ID'];
        $NotreReseau[$cr]['prenom']=$row['prenom'];
        $NotreReseau[$cr]['nom']=$row['nom'];
        $NotreReseau[$cr]['image']=$row['image'];
        $NotreReseau[$cr]['pays']=$row['pays'];
        $NotreReseau[$cr]['ville']=$row['ville'];

        $cr++;
    } 
   // print_r($demandeSprint);
    echo json_encode($NotreReseau);
}else{
    http_response_code(404);

}
?>
