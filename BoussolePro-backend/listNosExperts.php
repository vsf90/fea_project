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
        $profileexpert[$cr]['prenom']=htmlspecialchars_decode($row['prenom'],ENT_QUOTES);
        $profileexpert[$cr]['nom']=htmlspecialchars_decode($row['nom'],ENT_QUOTES);
        $profileexpert[$cr]['image']=htmlspecialchars_decode($row['image'],ENT_QUOTES);
        $profileexpert[$cr]['competances']=htmlspecialchars_decode($row['competances'],ENT_QUOTES);
        $cr++;
    }
   // print_r($demandeSprint);
    echo json_encode($profileexpert);
}else{
    http_response_code(404);

}
?>
