<?php
$con = mysqli_connect("localhost", "root", "", "boussolepro");
error_reporting(E_ERROR);
$listBesoins=[];
$sql="SELECT * FROM besoins  ORDER BY ID DESC";
$result=mysqli_query($con,$sql) or die(mysqli_error($con));;
if($result){
    $cr=0;
    while($row=mysqli_fetch_assoc($result)){
        $listBesoins[$cr]['ID']=$row['ID'];
        $listBesoins[$cr]['prenom']=htmlspecialchars_decode($row['prenom'],ENT_QUOTES);
        $listBesoins[$cr]['nom']=htmlspecialchars_decode($row['nom'],ENT_QUOTES);
        $listBesoins[$cr]['besoins']=htmlspecialchars_decode($row['besoins'],ENT_QUOTES);
        $listBesoins[$cr]['dateDeplacement']=htmlspecialchars_decode($row['dateDeplacement'],ENT_QUOTES);
        $listBesoins[$cr]['autresDemandes']=htmlspecialchars_decode($row['autresDemandes'],ENT_QUOTES);
        $listBesoins[$cr]['date']=$row['date'];

        $cr++;
    } 
   // print_r($demandeSprint);
    echo json_encode($listBesoins);
}else{
    http_response_code(404);

}
?>
