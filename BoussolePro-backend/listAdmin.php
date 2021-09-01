<?php
$con = mysqli_connect("localhost", "root", "", "boussolepro");
error_reporting(E_ERROR);
$listAdmin=[];
$sql="SELECT * FROM utilisateur WHERE role='Admin' ORDER BY ID DESC";
$result=mysqli_query($con,$sql) or die(mysqli_error($con));;
if($result){
    $cr=0;
    while($row=mysqli_fetch_assoc($result)){
        $listAdmin[$cr]['ID']=$row['ID'];
        $listAdmin[$cr]['prenom']=htmlspecialchars_decode($row['prenom'],ENT_QUOTES);
        $listAdmin[$cr]['nom']=htmlspecialchars_decode($row['nom'],ENT_QUOTES);
        $listAdmin[$cr]['email']=htmlspecialchars_decode($row['email'],ENT_QUOTES);
        $listAdmin[$cr]['pays']=htmlspecialchars_decode($row['pays'],ENT_QUOTES);
        $listAdmin[$cr]['ville']=htmlspecialchars_decode($row['ville'],ENT_QUOTES);
        $listAdmin[$cr]['entreprise']=htmlspecialchars_decode($row['entreprise'],ENT_QUOTES);
        $listAdmin[$cr]['objetEntreprise']=htmlspecialchars_decode($row['objetEntreprise'],ENT_QUOTES);
        $listAdmin[$cr]['activiteProfessionnelle']=htmlspecialchars_decode($row['activiteProfessionnelle'],ENT_QUOTES);
        $listAdmin[$cr]['password']=htmlspecialchars_decode($row['password'],ENT_QUOTES);

        $cr++;
    } 
   // print_r($demandeSprint);
    echo json_encode($listAdmin);
}else{
    http_response_code(404);

}
?>
