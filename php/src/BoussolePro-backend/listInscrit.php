<?php
$con = mysqli_connect("localhost", "root", "", "boussolepro");
error_reporting(E_ERROR);
$listInscrit=[];
$sql="SELECT * FROM utilisateur WHERE role='Inscrit' ORDER BY ID DESC";
$result=mysqli_query($con,$sql) or die(mysqli_error($con));;
if($result){
    $cr=0;
    while($row=mysqli_fetch_assoc($result)){
        $listInscrit[$cr]['ID']=$row['ID'];
        $listInscrit[$cr]['prenom']=$row['prenom'];
        $listInscrit[$cr]['nom']=$row['nom'];
        $listInscrit[$cr]['email']=$row['email'];
        $listInscrit[$cr]['pays']=$row['pays'];
        $listInscrit[$cr]['ville']=$row['ville'];
        $listInscrit[$cr]['entreprise']=$row['entreprise'];
        $listInscrit[$cr]['objetEntreprise']=$row['objetEntreprise'];
        $listInscrit[$cr]['activiteProfessionnelle']=$row['activiteProfessionnelle'];
        $listInscrit[$cr]['password']=$row['password'];

        $cr++;
    } 
  
    echo json_encode($listInscrit);
}else{
    http_response_code(404);

}
?>
