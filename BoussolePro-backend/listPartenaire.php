<?php
$con = mysqli_connect("localhost", "root", "", "boussolepro");
error_reporting(E_ERROR);
$listPartenaire=[];
$sql="SELECT * FROM partenaire ORDER BY ID DESC";
$result=mysqli_query($con,$sql) or die(mysqli_error($con));;
if($result){
    $cr=0;
    while($row=mysqli_fetch_assoc($result)){
        $listPartenaire[$cr]['ID']=$row['ID'];
        $listPartenaire[$cr]['image']=htmlspecialchars_decode($row['image'],ENT_QUOTES);
        $listPartenaire[$cr]['nom']=htmlspecialchars_decode($row['nom'],ENT_QUOTES);
        $listPartenaire[$cr]['activite']=htmlspecialchars_decode($row['activite'],ENT_QUOTES);
        $listPartenaire[$cr]['avantage']=htmlspecialchars_decode($row['avantage'],ENT_QUOTES);
        $listPartenaire[$cr]['lien']=htmlspecialchars_decode($row['lien'],ENT_QUOTES);
        $cr++;
    } 
   // print_r($demandeSprint);
    echo json_encode($listPartenaire);
}else{
    http_response_code(404);

}
?>
