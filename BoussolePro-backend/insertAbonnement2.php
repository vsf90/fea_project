<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
// require 'connect.php';
// $con = mysqli_connect("localhost", "root", "", "boussolepro1");
include 'connect.php';
$id=$_GET['id'];

 $postdata=file_get_contents("php://input");
 if(isset($postdata) && !empty($postdata))
 {
     $request=json_decode($postdata);
     print_r($request);
     $chosesessentielles=htmlspecialchars($request->chosesessentielles,ENT_QUOTES);//text 
     $CadreTravail=htmlspecialchars($request->CadreTravail,ENT_QUOTES); //radio

     $FontConfiance1=htmlspecialchars($request->FontConfiance1,ENT_QUOTES);
     $FontConfiance2=htmlspecialchars($request->FontConfiance2,ENT_QUOTES);
     $FontConfiance3=htmlspecialchars($request->FontConfiance3,ENT_QUOTES);

     $RéseauQualité1=htmlspecialchars($request->RéseauQualité1,ENT_QUOTES);
     $RéseauQualité2=htmlspecialchars($request->RéseauQualité2,ENT_QUOTES);
     $RéseauQualité3=htmlspecialchars($request->RéseauQualité3,ENT_QUOTES);
     $RéseauQualité4=htmlspecialchars($request->RéseauQualité4,ENT_QUOTES);

     $InformationImportante1=htmlspecialchars($request->InformationImportante1,ENT_QUOTES);
     $InformationImportante2=htmlspecialchars($request->InformationImportante2,ENT_QUOTES);
     $InformationImportante3=htmlspecialchars($request->InformationImportante3,ENT_QUOTES);

     $NouveauxClients1=htmlspecialchars($request->NouveauxClients1,ENT_QUOTES);
     $NouveauxClients2=htmlspecialchars($request->NouveauxClients2,ENT_QUOTES);
     $NouveauxClients3=htmlspecialchars($request->NouveauxClients3,ENT_QUOTES);

     $AiderDévelopper=htmlspecialchars($request->AiderDévelopper,ENT_QUOTES); //radio 

     $Bénéfices1=htmlspecialchars($request->Bénéfices1,ENT_QUOTES);
     $Bénéfices2=htmlspecialchars($request->Bénéfices2,ENT_QUOTES);
     $Bénéfices3=htmlspecialchars($request->Bénéfices3,ENT_QUOTES);

    //  les conditions pour rempler les chekbox
    $FontConfiance="";
     if($FontConfiance1){
    $FontConfiance.="En promettant d’appeler un contact qui vous a été communiqué&nbsp;a tel jour et telle heure mais vous ne le&nbsp;faites pas et
    vous n’informez pas";
     }
     if($FontConfiance2){
         $FontConfiance.="  n ayant accéder à une super information très importante pour vous et en ne donnant pas le FEEDBACK a celle ou celui qui vous a permis d’y accéder";
     }
     if($FontConfiance3){
         $FontConfiance.="  En restant flou sur ce que vous allez faire lorsqu’on partage avec vous un contact de confiance";
     }
//////////////////////////////////////
     $NouveauxClients="";
     if($NouveauxClients1){
    $NouveauxClients.="Vous résilier votre abonnement";
     }
     if($NouveauxClients2){
         $NouveauxClients.="  Vous donner le feedback a Boussole Pro";
     }
     if($NouveauxClients3){
         $NouveauxClients.="  Vous donnez le feedback à Boussole Pro et regardez comment sponsoriser financièrement Boussole Pro";
     }
//////////////////////////////////
     $InformationImportante="";
     if($InformationImportante1){
    $InformationImportante.="Hamdoullah c’est une bonne nouvelle pour l’entreprise";
     }
     if($InformationImportante2){
         $InformationImportante.="  Vous regarder qui dans votre réseau peut bénéficier de cette info";
     }
     if($InformationImportante3){
         $InformationImportante.="  Vous informez votre réseau et vous faites le feedback a Boussole Pro qui partagera plus largement";
     }
     /////////////////////////////////
     $RéseauQualité="";
     if($RéseauQualité1){
    $RéseauQualité.="En posant régulièrement des questions a son réseau";
     }
     if($RéseauQualité2){
         $RéseauQualité.="  En provoquant la rencontre physique à chaque fois que possible en complément des échanges virtuels";
     }
     if($RéseauQualité3){
         $RéseauQualité.="  En devenant une OPPORTUNITÉ vous-même pour votre réseau. Vous comprenez qu’une information peut ne pas être importante pour vous mais extrêmement importante pour un frère ou une sœur";
     }
     if($RéseauQualité4){
        $RéseauQualité.="  En étant visible, en rendant ses besoins professionnels visibles";
    }
///////////////////////
    $Bénéfices="";
    if($Bénéfices1){
   $Bénéfices.="Vous résiliez votre abonnement";
    }
    if($Bénéfices2){
        $Bénéfices.=" Vous donnez le feedback à Boussole Pro pour vous trouver des interactions pouvant vous servir";
    }
    if($Bénéfices3){
        $Bénéfices.="  Le option précédente et vous êtes malgré tout satisfait  Vous savez que les bénéfices retournent à la communauté FEA et que Boussole Pro a été monté spécialement pour ça,
        pour faciliter nos frères et sœurs dans leur besoin professionnellement, Votre abonnement finance la structure qui encourage la résilience professionnelle et économique de notre communauté";
    }

        $req="UPDATE `utilisateur` SET `chosesessentielles`='$chosesessentielles', `CadreTravail`='$CadreTravail',
         `FontConfiance`='$FontConfiance',
        `ReseauQualite`='$RéseauQualité', `InformationImportante`='$InformationImportante', `NouveauxClients`='$NouveauxClients', `AiderDevelopper`='$AiderDévelopper',
         `Benefices`='$Bénéfices' WHERE ID='{$id}'"; 
      $resultat=mysqli_query($con,$req) or die(mysqli_error($con));

       if ($resultat){
           http_response_code(201);
       }else{
           http_response_code(422);
       }
  
       
   }
     ?>