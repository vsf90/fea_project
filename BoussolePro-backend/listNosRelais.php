<?php
// $con = mysqli_connect("localhost", "root", "", "boussolepro1");
include 'connect.php';
error_reporting(E_ERROR);
$profilerelais=[];
$sql="SELECT * FROM profilerelaisexpert  ORDER BY ID DESC";
$result=mysqli_query($con,$sql) or die(mysqli_error($con));;
if($result){
    $cr=0;
    while($row=mysqli_fetch_assoc($result)){
        $profilerelais[$cr]['ID']=$row['ID']; 
        $profilerelais[$cr]['role']=htmlspecialchars_decode($row['role'],ENT_QUOTES);
        $profilerelais[$cr]['nom']=htmlspecialchars_decode($row['nom'],ENT_QUOTES);
        $profilerelais[$cr]['image']=htmlspecialchars_decode($row['image'],ENT_QUOTES);
        $profilerelais[$cr]['competances']=htmlspecialchars_decode($row['competances'],ENT_QUOTES);
        $cr++;
    }
   // print_r($demandeSprint);
    echo json_encode($profilerelais);
}else{
    http_response_code(404);

}
?>
