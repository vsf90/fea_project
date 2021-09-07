<?php
// $con = mysqli_connect("localhost", "root", "", "boussolepro1");
include 'connect.php';
error_reporting(E_ERROR);
$demandeShoura=[];
$sql="SELECT * FROM shourapro ORDER BY ID DESC";
$result=mysqli_query($con,$sql) or die(mysqli_error($con));;
if($result){
    $cr=0;
    while($row=mysqli_fetch_assoc($result)){
        $demandeShoura[$cr]['ID']=$row['ID'];
        $demandeShoura[$cr]['initiateur']=htmlspecialchars_decode($row['initiateur'],ENT_QUOTES);
        $demandeShoura[$cr]['prenom']=htmlspecialchars_decode($row['prenom'],ENT_QUOTES);
        $demandeShoura[$cr]['nom']=htmlspecialchars_decode($row['nom'],ENT_QUOTES);
        $demandeShoura[$cr]['avecQui']=htmlspecialchars_decode($row['avecQui'],ENT_QUOTES);
        $demandeShoura[$cr]['problematique']=htmlspecialchars_decode($row['problematique'],ENT_QUOTES);
        $demandeShoura[$cr]['domainesExpert']=htmlspecialchars_decode($row['domainesExpert'],ENT_QUOTES);
        $demandeShoura[$cr]['creneaux']=htmlspecialchars_decode($row['creneaux'],ENT_QUOTES);
        $demandeShoura[$cr]['date']=$row['date'];
        if($row['valider']==1){
            $demandeShoura[$cr]['valider']="validée";
        }else{
            $demandeShoura[$cr]['valider']="non validée";
        }

        $cr++;
    }
   // print_r($demandeSprint);
    echo json_encode($demandeShoura);
}else{
    http_response_code(404);

}
?>
