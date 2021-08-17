<?php
$con = mysqli_connect("localhost", "root", "", "boussolepro");
error_reporting(E_ERROR);
$profileexpert=[];
$sql="SELECT * FROM profilerelaisexpert WHERE role='expert' ORDER BY ID DESC";
$result=mysqli_query($con,$sql) or die(mysqli_error($con));;
if($result){
    $cr=0;
    while($row=mysqli_fetch_assoc($result)){
        $profileexpert[$cr]['ID']=$row['ID'];
        $profileexpert[$cr]['prenom']=$row['prenom'];
        $profileexpert[$cr]['nom']=$row['nom'];
        $profileexpert[$cr]['image']=$row['image'];
        $profileexpert[$cr]['competances']=$row['competances'];
        $cr++;
    }
   // print_r($demandeSprint);
    echo json_encode($profileexpert);
}else{
    http_response_code(404);

}
?>
