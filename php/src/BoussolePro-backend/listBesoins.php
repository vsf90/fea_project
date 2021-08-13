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
        $listBesoins[$cr]['prenom']=$row['prenom'];
        $listBesoins[$cr]['nom']=$row['nom'];
        $listBesoins[$cr]['besoins']=$row['besoins'];
        $listBesoins[$cr]['dateDeplacement']=$row['dateDeplacement'];
        $listBesoins[$cr]['autresDemandes']=$row['autresDemandes'];
        $listBesoins[$cr]['date']=$row['date'];

        $cr++;
    } 
   // print_r($demandeSprint);
    echo json_encode($listBesoins);
}else{
    http_response_code(404);

}
?>
