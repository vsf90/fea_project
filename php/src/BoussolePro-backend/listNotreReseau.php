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
        $NotreReseau[$cr]['prenom']=htmlspecialchars_decode($row['prenom'],ENT_QUOTES);
        $NotreReseau[$cr]['nom']=htmlspecialchars_decode($row['nom'],ENT_QUOTES);
        $NotreReseau[$cr]['image']=htmlspecialchars_decode($row['image'],ENT_QUOTES);
        $NotreReseau[$cr]['pays']=htmlspecialchars_decode($row['pays'],ENT_QUOTES);
        $NotreReseau[$cr]['ville']=htmlspecialchars_decode($row['ville'],ENT_QUOTES);

        $cr++;
    } 
   // print_r($demandeSprint);
    echo json_encode($NotreReseau);
}else{
    http_response_code(404);

}
?>
