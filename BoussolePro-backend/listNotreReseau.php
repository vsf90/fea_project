<?php
// $con = mysqli_connect("localhost", "root", "", "boussolepro1");
include 'connect.php';
error_reporting(E_ERROR);
$NotreReseau=array();
$sql="SELECT ID,prenom,nom,urlImage,ville,pays,activiteProfessionnelle,entreprise FROM utilisateur ORDER BY ID DESC";
$result=mysqli_query($con,$sql) or die(mysqli_error($con));
/* Use it for json_encode some corrupt UTF-8 chars
 * useful for = malformed utf-8 characters possibly incorrectly encoded by json_encode
 */
function utf8ize( $mixed ) {
    if (is_array($mixed)) {
        foreach ($mixed as $key => $value) {
            $mixed[$key] = utf8ize($value);
        }
    } elseif (is_string($mixed)) {
        return mb_convert_encoding($mixed, "UTF-8", "UTF-8");
    }
    return $mixed;
}

if($result){
    $cr=0;
    while($row=mysqli_fetch_assoc($result)){
        $NotreReseau[$cr]['ID']=$row['ID'];
        $NotreReseau[$cr]['prenom']=htmlspecialchars_decode($row['prenom'],ENT_QUOTES);
        $NotreReseau[$cr]['nom']=htmlspecialchars_decode($row['nom'],ENT_QUOTES);
        $NotreReseau[$cr]['image']=htmlspecialchars_decode($row['urlImage'],ENT_QUOTES);
        $NotreReseau[$cr]['pays']=htmlspecialchars_decode($row['pays'],ENT_QUOTES);
        $NotreReseau[$cr]['ville']=htmlspecialchars_decode($row['ville'],ENT_QUOTES);
        $NotreReseau[$cr]['entreprise']=htmlspecialchars_decode($row['entreprise'],ENT_QUOTES);
        $NotreReseau[$cr]['activiteProfessionnelle']=htmlspecialchars_decode($row['activiteProfessionnelle'],ENT_QUOTES);
        // var_dump($NotreReseau);


        $cr++;
    } 
   // print_r($demandeSprint);
//    var_dump($NotreReseau);
   

    echo json_encode(utf8ize($NotreReseau));
}else{
    http_response_code(404);

}
?>
