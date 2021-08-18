<?php
// les informations de l'utilisateur connécté
$con = mysqli_connect("localhost", "root", "", "boussolepro");
error_reporting(E_ERROR);
$id=$_GET['id'];
$listUtilisateur=[];
$sql="SELECT * FROM utilisateur WHERE ID='{$id}' ORDER BY ID DESC";
$resultat=mysqli_query($con,$sql) or die(mysqli_error($con));
$row=mysqli_fetch_assoc($resultat);

// print_r($row);
echo $json=json_encode($row);



// if($result){
//     $i=0;
//     while($row=mysqli_fetch_assoc($result)){
//         $listUtilisateur[$i]['ID']=$row['ID'];
//         $listUtilisateur[$i]['prenom']=$row['prenom'];
//         $listUtilisateur[$i]['nom']=$row['nom'];
//         $listUtilisateur[$i]['profession']=$row['profession'];
//         $listUtilisateur[$i]['urlImage']=$row['urlImage'];
//         $listUtilisateur[$i]['pays']=$row['pays'];
//         $listUtilisateur[$i]['ville']=$row['ville'];
//         $listUtilisateur[$i]['entreprise']=$row['entreprise'];
//         $listUtilisateur[$i]['role']=$row['role'];
//         $listUtilisateur[$i]['type']=$row['type'];
//         $listUtilisateur[$i]['verset']=$row['verset'];
//         $listUtilisateur[$i]['objectifPro']=$row['objectifPro'];
//         $listUtilisateur[$i]['secteur']=$row['secteur'];
//         $listUtilisateur[$i]['topVille']=$row['topVille'];
//         $listUtilisateur[$i]['expertiseSouhaitez']=$row['expertiseSouhaitez'];
//         $listUtilisateur[$i]['expertise']=$row['expertise'];
//         $listUtilisateur[$i]['centresInteret']=$row['centresInteret'];
//         $listUtilisateur[$i]['confirmation']=$row['confirmation'];
//         $listUtilisateur[$i]['membreFEA']=$row['membreFEA'];
//         $listUtilisateur[$i]['abonnement']=$row['abonnement'];
//         $listUtilisateur[$i]['confirmationLoi']=$row['confirmationLoi'];


//         $i++;
//     } 
//    // print_r($demandeSprint);
//     echo json_encode($listUtilisateur);
// }else{
//     http_response_code(404);

// }
?>
