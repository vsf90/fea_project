<?php
   //include("connect.php");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
// require 'connect.php';
$db = mysqli_connect("localhost", "root", "", "boussolepro");
// print_r($con);
  $postdata=file_get_contents("php://input");
  print_r($postdata);

   session_start();
   if(isset($postdata) && !empty($postdata))
 {
     $request=json_decode($postdata);
   
    //  print_r($request);

     $myusername=$request->email;
     $mypassword=$request->pass;

      
      $sql = "SELECT id FROM utilisateur WHERE email = '$myusername' and password = '$mypassword'";
      $result = mysqli_query($db,$sql);
    //   print_r($result->num_rows);
      
      
      $count = $result->num_rows;
      
      // If result matched $myusername and $mypassword, table row must be 1 row
		
      if($count == 1) {
         $_SESSION['id'] = $myusername;
         // header('Content-Type: application/json');
         // echo json_encode("['test']");

      }else {
         $error = "Your Login Name or Password is invalid";
      }
   }
//    echo $result;
?>