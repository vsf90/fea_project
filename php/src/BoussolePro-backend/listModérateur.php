<?php
$con = mysqli_connect("localhost", "root", "", "boussolepro");
error_reporting(E_ERROR);
$listModerateur=[];
$sql="SELECT * FROM utilisateur WHERE role='modérateur' ORDER BY ID DESC";
$result=mysqli_query($con,$sql) or die(mysqli_error($con));;
if($result){
    $cr=0;
    while($row=mysqli_fetch_assoc($result)){
        $listModerateur[$cr]['ID']=$row['ID'];
        $listModerateur[$cr]['prenom']=$row['prenom'];
        $listModerateur[$cr]['nom']=$row['nom'];
        $listModerateur[$cr]['email']=$row['email'];
        $listModerateur[$cr]['pays']=$row['pays'];
        $listModerateur[$cr]['ville']=$row['ville'];
        $listModerateur[$cr]['entreprise']=$row['entreprise'];
        $listModerateur[$cr]['objetEntreprise']=$row['objetEntreprise'];
        $listModerateur[$cr]['activiteProfessionnelle']=$row['activiteProfessionnelle'];
        $listModerateur[$cr]['password']=$row['password'];

        $cr++;
    } 
   // print_r($demandeSprint);
    echo json_encode($listModerateur);
}else{
    http_response_code(404);

}
?>
