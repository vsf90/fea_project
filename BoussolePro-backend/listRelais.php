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
        $demandeRelais[$cr]['initiateur']=htmlspecialchars_decode($row['initiateur'],ENT_QUOTES);
        $demandeRelais[$cr]['prenom']=htmlspecialchars_decode($row['prenom'],ENT_QUOTES);
        $demandeRelais[$cr]['nom']=htmlspecialchars_decode($row['nom'],ENT_QUOTES);
        $demandeRelais[$cr]['avecQui']=htmlspecialchars_decode($row['avecQui'],ENT_QUOTES);
        $demandeRelais[$cr]['objet']=htmlspecialchars_decode($row['objet'],ENT_QUOTES);
        $demandeRelais[$cr]['creneaux']=htmlspecialchars_decode($row['creneaux'],ENT_QUOTES);
        $demandeRelais[$cr]['date']=$row['date'];
        if($row['valider']==1){
            $demandeRelais[$cr]['valider']="validée";
        }else{
            $demandeRelais[$cr]['valider']="non validée";
        }


        $cr++;
    }
   // print_r($demandeSprint);
    echo json_encode($demandeRelais);
}else{
    http_response_code(404);

}
?>
