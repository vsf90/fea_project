<?php
$con = mysqli_connect("localhost", "root", "", "boussolepro");
error_reporting(E_ERROR);
$demandeExpert=[];
$sql="SELECT * FROM expertbp ORDER BY ID DESC";
$result=mysqli_query($con,$sql) or die(mysqli_error($con));;
if($result){
    $cr=0;
    while($row=mysqli_fetch_assoc($result)){
        $demandeExpert[$cr]['ID']=$row['ID'];
        $demandeExpert[$cr]['initiateur']=htmlspecialchars_decode($row['initiateur'],ENT_QUOTES);
        $demandeExpert[$cr]['prenom']=htmlspecialchars_decode($row['prenom'],ENT_QUOTES);
        $demandeExpert[$cr]['nom']=htmlspecialchars_decode($row['nom'],ENT_QUOTES);
        $demandeExpert[$cr]['avecQui']=htmlspecialchars_decode($row['avecQui'],ENT_QUOTES);
        $demandeExpert[$cr]['objet']=htmlspecialchars_decode($row['objet'],ENT_QUOTES);
        $demandeExpert[$cr]['creneaux']=htmlspecialchars_decode($row['creneaux'],ENT_QUOTES);
        $demandeExpert[$cr]['date']=$row['date'];

        $cr++;
    }
   // print_r($demandeSprint);
    echo json_encode($demandeExpert);
}else{
    http_response_code(404);

}
?>
