<?php
$con = mysqli_connect("localhost", "root", "", "boussolepro");
error_reporting(E_ERROR);
$profilerelais=[];
$sql="SELECT * FROM profilerelaisexpert WHERE role='relais' ORDER BY ID DESC";
$result=mysqli_query($con,$sql) or die(mysqli_error($con));;
if($result){
    $cr=0;
    while($row=mysqli_fetch_assoc($result)){
        $profilerelais[$cr]['ID']=$row['ID'];
        $profilerelais[$cr]['prenom']=$row['prenom'];
        $profilerelais[$cr]['nom']=$row['nom'];
        $profilerelais[$cr]['image']=$row['image'];
        $profilerelais[$cr]['competances']=$row['competances'];
        $cr++;
    }
   // print_r($demandeSprint);
    echo json_encode($profilerelais);
}else{
    http_response_code(404);

}
?>
