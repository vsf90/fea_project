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
        $listAdmin[$cr]['prenom']=$row['prenom'];
        $listAdmin[$cr]['nom']=$row['nom'];
        $listAdmin[$cr]['email']=$row['email'];
        $listAdmin[$cr]['pays']=$row['pays'];
        $listAdmin[$cr]['ville']=$row['ville'];
        $listAdmin[$cr]['entreprise']=$row['entreprise'];
        $listAdmin[$cr]['objetEntreprise']=$row['objetEntreprise'];
        $listAdmin[$cr]['activiteProfessionnelle']=$row['activiteProfessionnelle'];
        $listAdmin[$cr]['password']=$row['password'];

        $cr++;
    } 
   // print_r($demandeSprint);
    echo json_encode($listAdmin);
}else{
    http_response_code(404);

}
?>
