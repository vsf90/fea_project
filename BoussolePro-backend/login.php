<?php
   //include("connect.php");
  
// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
// header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
// // require 'connect.php';

// // $db = mysqli_connect("localhost", "root", "", "boussolepro1");
// include 'connect.php';
// // print_r($con);
//   $postdata=file_get_contents("php://input");
//  // print_r($postdata);

//    if(isset($postdata) && !empty($postdata))
//  {
//      $request=json_decode($postdata);

//      $myusername=htmlspecialchars($request->email,ENT_QUOTES);
//      $mypassword=htmlspecialchars($request->pass,ENT_QUOTES);

//       $sql = "SELECT * FROM utilisateur WHERE email = '$myusername' and password = '$mypassword'";
//       $result = mysqli_query($con,$sql);
//       $row=mysqli_fetch_assoc($result);
//      // print_r($row);
//       echo json_encode($row);
//      // $_SESSION['ID']=$row['ID'];
//       // header('Content-Type: application/json');
//      // echo $_SESSION['ID'];
  
//       $count = $result->num_rows;
//       if($count == 1) {
        

//       }else {
//          $error = "Your Email or Password is invalid";
//       }
//    }
//    echo $result;


  //include("connect.php"); 
   
  header('Access-Control-Allow-Origin: *'); 
  header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS'); 
  header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'); 
  // require 'connect.php'; 
    include 'connect.php';

  // print_r($con); 
    $postdata=file_get_contents("php://input"); 
   // print_r($postdata); 
   
     if(isset($postdata) && !empty($postdata)) 
   { 
       $request=json_decode($postdata); 
   
       $myusername=htmlspecialchars($request->email,ENT_QUOTES); 
     
       
       $mypassword=htmlspecialchars($request->pass,ENT_QUOTES); 
   
        $sql = "SELECT * FROM utilisateur WHERE email = '$myusername' ";  

        $result = mysqli_query($con,$sql); 

        $row=mysqli_fetch_assoc($result);

        $count = $result->num_rows;

        if($count == 1) { 
        $pass=$row['password']; 

        if (password_verify($mypassword, $pass)) { 
           echo json_encode($row); 
       } else { 
           
       } 
   
       // print_r($row); 
      
        
        }else { 
           $error = "Your Email or Password is invalid"; 
        } 
     } 
  //    echo $result; 
?>