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
        $listPartenaire[$cr]['image']=$row['image'];
        $listPartenaire[$cr]['nom']=$row['nom'];
        $listPartenaire[$cr]['activite']=$row['activite'];
        $listPartenaire[$cr]['avantage']=$row['avantage'];
        $listPartenaire[$cr]['lien']=$row['lien'];
        $cr++;
    } 
   // print_r($demandeSprint);
    echo json_encode($listPartenaire);
}else{
    http_response_code(404);

}
?>
