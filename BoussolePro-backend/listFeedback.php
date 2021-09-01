<?php
$con = mysqli_connect("localhost", "root", "", "boussolepro");
error_reporting(E_ERROR);
$listFeedback=[];
$sql="SELECT * FROM feedback  ORDER BY ID DESC";
$result=mysqli_query($con,$sql) or die(mysqli_error($con));;
if($result){
    $cr=0;
    while($row=mysqli_fetch_assoc($result)){
        $listFeedback[$cr]['ID']=$row['ID'];
        $listFeedback[$cr]['prenom']=htmlspecialchars_decode($row['prenom'],ENT_QUOTES);
        $listFeedback[$cr]['nom']=htmlspecialchars_decode($row['nom'],ENT_QUOTES);
        $listFeedback[$cr]['avecQui']=htmlspecialchars_decode($row['avecQui'],ENT_QUOTES);
        $listFeedback[$cr]['serviceRecent']=htmlspecialchars_decode($row['serviceRecent'],ENT_QUOTES);
        $listFeedback[$cr]['organisation']=htmlspecialchars_decode($row['organisation'],ENT_QUOTES);
        $listFeedback[$cr]['ponctualite']=htmlspecialchars_decode($row['ponctualite'],ENT_QUOTES);
        $listFeedback[$cr]['qualite']=htmlspecialchars_decode($row['qualite'],ENT_QUOTES);
        $listFeedback[$cr]['informations']=htmlspecialchars_decode($row['informations'],ENT_QUOTES);
        $listFeedback[$cr]['informationBoussolePro']=$row['informationBoussolePro'],ENT_QUOTES);
        $listFeedback[$cr]['importance']=htmlspecialchars_decode($row['importance'],ENT_QUOTES);
        $listFeedback[$cr]['evaluation']=htmlspecialchars_decode($row['evaluation'],ENT_QUOTES);
        $listFeedback[$cr]['valeurAjoutee']=htmlspecialchars_decode($row['valeurAjoutee'],ENT_QUOTES);
        $listFeedback[$cr]['motsClesSprint']=htmlspecialchars_decode($row['motsClesSprint'],ENT_QUOTES);
        $listFeedback[$cr]['feedbackParticulier']=htmlspecialchars_decode($row['feedbackParticulier'],ENT_QUOTES);
        $listFeedback[$cr]['autorisation']=htmlspecialchars_decode($row['autorisation'],ENT_QUOTES);
        $listFeedback[$cr]['feedbackAmelioration']=htmlspecialchars_decode($row['feedbackAmelioration'],ENT_QUOTES);
        $listFeedback[$cr]['feedbackEquipe']=htmlspecialchars_decode($row['feedbackEquipe'],ENT_QUOTES);
        $listFeedback[$cr]['date']=$row['date'];

        $cr++;
    } 
   // print_r($demandeSprint);
    echo json_encode($listFeedback);
}else{
    http_response_code(404);

}
?>
