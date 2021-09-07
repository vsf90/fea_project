<?php
// $con = mysqli_connect("localhost", "root", "", "boussolepro1");
include 'connect.php';
error_reporting(E_ERROR);
$listModerateur=[];
$sql="SELECT * FROM utilisateur WHERE role='modérateur' ORDER BY ID DESC";
$result=mysqli_query($con,$sql) or die(mysqli_error($con));;
if($result){
    $cr=0;
    while($row=mysqli_fetch_assoc($result)){
        $listModerateur[$cr]['ID']=$row['ID'];
        $listModerateur[$cr]['prenom']=htmlspecialchars_decode($row['prenom'],ENT_QUOTES);
        $listModerateur[$cr]['nom']=htmlspecialchars_decode($row['nom'],ENT_QUOTES);
        $listModerateur[$cr]['email']=htmlspecialchars_decode($row['email'],ENT_QUOTES);
        $listModerateur[$cr]['pays']=htmlspecialchars_decode($row['pays'],ENT_QUOTES);
        $listModerateur[$cr]['ville']=htmlspecialchars_decode($row['ville'],ENT_QUOTES);
        $listModerateur[$cr]['entreprise']=htmlspecialchars_decode($row['entreprise'],ENT_QUOTES);
        $listModerateur[$cr]['objetEntreprise']=htmlspecialchars_decode($row['objetEntreprise'],ENT_QUOTES);
        $listModerateur[$cr]['activiteProfessionnelle']=htmlspecialchars_decode($row['activiteProfessionnelle'],ENT_QUOTES);
        $listModerateur[$cr]['password']=htmlspecialchars_decode($row['password'],ENT_QUOTES);

        $cr++;
    } 
   // print_r($demandeSprint);
    echo json_encode($listModerateur);
}else{
    http_response_code(404);

}
?>
