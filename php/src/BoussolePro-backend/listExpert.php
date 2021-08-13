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
        $demandeExpert[$cr]['initiateur']=$row['initiateur'];
        $demandeExpert[$cr]['prenom']=$row['prenom'];
        $demandeExpert[$cr]['nom']=$row['nom'];
        $demandeExpert[$cr]['avecQui']=$row['avecQui'];
        $demandeExpert[$cr]['objet']=$row['objet'];
        $demandeExpert[$cr]['creneaux']=$row['creneaux'];
        $demandeExpert[$cr]['date']=$row['date'];

        $cr++;
    }
   // print_r($demandeSprint);
    echo json_encode($demandeExpert);
}else{
    http_response_code(404);

}
?>
