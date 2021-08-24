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
        $listInscrit[$cr]['prenom']=htmlspecialchars_decode($row['prenom'],ENT_QUOTES);
        $listInscrit[$cr]['nom']=htmlspecialchars_decode($row['nom'],ENT_QUOTES);
        $listInscrit[$cr]['email']=htmlspecialchars_decode($row['email'],ENT_QUOTES);
        $listInscrit[$cr]['pays']=htmlspecialchars_decode($row['pays'],ENT_QUOTES);
        $listInscrit[$cr]['ville']=htmlspecialchars_decode($row['ville'],ENT_QUOTES);
        $listInscrit[$cr]['entreprise']=htmlspecialchars_decode($row['entreprise'],ENT_QUOTES);
        $listInscrit[$cr]['objetEntreprise']=htmlspecialchars_decode($row['objetEntreprise'],ENT_QUOTES);
        $listInscrit[$cr]['activiteProfessionnelle']=htmlspecialchars_decode($row['activiteProfessionnelle'],ENT_QUOTES);
        $listInscrit[$cr]['password']=htmlspecialchars_decode($row['password'],ENT_QUOTES);

        $cr++;
    } 
  
    echo json_encode($listInscrit);
}else{
    http_response_code(404);

}
?>
