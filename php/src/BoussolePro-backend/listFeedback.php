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
        $listFeedback[$cr]['prenom']=$row['prenom'];
        $listFeedback[$cr]['nom']=$row['nom'];
        $listFeedback[$cr]['avecQui']=$row['avecQui'];
        $listFeedback[$cr]['serviceRecent']=$row['serviceRecent'];
        $listFeedback[$cr]['organisation']=$row['organisation'];
        $listFeedback[$cr]['ponctualite']=$row['ponctualite'];
        $listFeedback[$cr]['qualite']=$row['qualite'];
        $listFeedback[$cr]['informations']=$row['informations'];
        $listFeedback[$cr]['informationBoussolePro']=$row['informationBoussolePro'];
        $listFeedback[$cr]['importance']=$row['importance'];
        $listFeedback[$cr]['evaluation']=$row['evaluation'];
        $listFeedback[$cr]['valeurAjoutee']=$row['valeurAjoutee'];
        $listFeedback[$cr]['motsClesSprint']=$row['motsClesSprint'];
        $listFeedback[$cr]['feedbackParticulier']=$row['feedbackParticulier'];
        $listFeedback[$cr]['autorisation']=$row['autorisation'];
        $listFeedback[$cr]['feedbackAmelioration']=$row['feedbackAmelioration'];
        $listFeedback[$cr]['feedbackEquipe']=$row['feedbackEquipe'];
        $listFeedback[$cr]['date']=$row['date'];

        $cr++;
    } 
   // print_r($demandeSprint);
    echo json_encode($listFeedback);
}else{
    http_response_code(404);

}
?>
