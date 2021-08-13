<?php
$con = mysqli_connect("localhost", "root", "", "boussolepro");
error_reporting(E_ERROR);
$demandeRelais=[];
$sql="SELECT * FROM relaisbp ORDER BY ID DESC";
$result=mysqli_query($con,$sql) or die(mysqli_error($con));;
if($result){
    $cr=0;
    while($row=mysqli_fetch_assoc($result)){
        $demandeRelais[$cr]['ID']=$row['ID'];
        $demandeRelais[$cr]['initiateur']=$row['initiateur'];
        $demandeRelais[$cr]['prenom']=$row['prenom'];
        $demandeRelais[$cr]['nom']=$row['nom'];
        $demandeRelais[$cr]['avecQui']=$row['avecQui'];
        $demandeRelais[$cr]['objet']=$row['objet'];
        $demandeRelais[$cr]['creneaux']=$row['creneaux'];
        $demandeRelais[$cr]['date']=$row['date'];

        $cr++;
    }
   // print_r($demandeSprint);
    echo json_encode($demandeRelais);
}else{
    http_response_code(404);

}
?>
