<?php
include 'insertRelaisExpert.php';
include 'insertPublication.php';
include 'insertPartenaire.php';
include 'insertOffreEmploi.php';
include 'insertOffreStage.php';
include 'insertDemandeEmploi.php';
include 'insertDemandeStage.php';
include 'insertAbonne.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
// require 'connect.php';
include 'connect.php';
$infoImage=$_FILES['image'];
print_r( $infoImage);
$image=$_FILES['image']['name'];
$type=$_FILES['image']['type'];
$tmp_name=$_FILES['image']['tmp_name'];
$size=$_FILES['image']['size'];
echo $image."     ";
echo $type."     ";
echo $tmp_name."     ";
echo $size."     ";

$image_ext=explode('.',$image);
$image_correct_ext=strtolower(end($image_ext));
$valide=array('png','jpeg','jpg');
$path="images/".$image;
move_uploaded_file($tmp_name,$path);

  
  
   
  
    
    
//print_r($request->image);

//print_r($_POST);
?>