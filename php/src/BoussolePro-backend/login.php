<?php
   //include("connect.php");
  
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
// require 'connect.php';

$db = mysqli_connect("localhost", "root", "", "boussolepro");
// print_r($con);
  $postdata=file_get_contents("php://input");
 // print_r($postdata);

   if(isset($postdata) && !empty($postdata))
 {
     $request=json_decode($postdata);

     $myusername=$request->email;
     $mypassword=$request->pass;

      $sql = "SELECT * FROM utilisateur WHERE email = '$myusername' and password = '$mypassword'";
      $result = mysqli_query($db,$sql);
      $row=mysqli_fetch_assoc($result);
     // print_r($row);
      echo json_encode($row);
     // $_SESSION['ID']=$row['ID'];
      // header('Content-Type: application/json');
     // echo $_SESSION['ID'];
  
      $count = $result->num_rows;
      if($count == 1) {
        

      }else {
         $error = "Your Email or Password is invalid";
      }
   }
//    echo $result;
?>