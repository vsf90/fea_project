<?php
$con = mysqli_connect("localhost", "root", "", "boussolepro");
error_reporting(E_ERROR);
$demandeShoura=[];
$sql="SELECT * FROM shourapro ORDER BY ID DESC";
$result=mysqli_query($con,$sql) or die(mysqli_error($con));;
if($result){
    $cr=0;
    while($row=mysqli_fetch_assoc($result)){
        $demandeShoura[$cr]['ID']=$row['ID'];
        $demandeShoura[$cr]['initiateur']=$row['initiateur'];
        $demandeShoura[$cr]['prenom']=$row['prenom'];
        $demandeShoura[$cr]['nom']=$row['nom'];
        $demandeShoura[$cr]['avecQui']=$row['avecQui'];
        $demandeShoura[$cr]['problematique']=$row['problematique'];
        $demandeShoura[$cr]['domainesExpert']=$row['domainesExpert'];
        $demandeShoura[$cr]['creneaux']=$row['creneaux'];
        $demandeShoura[$cr]['date']=$row['date'];
        $cr++;
    }
   // print_r($demandeSprint);
    echo json_encode($demandeShoura);
}else{
    http_response_code(404);

}
?>
