<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
// require 'connect.php';
$con = mysqli_connect("localhost", "root", "", "boussolepro");
 $postdata=file_get_contents("php://input");
 if(isset($postdata) && !empty($postdata))
 {
     $request=json_decode($postdata);
     print_r($request);
     $chosesessentielles=$request->chosesessentielles;//text 
     $CadreTravail=$request->CadreTravail; //radio

     $FontConfiance1=$request->FontConfiance1;
     $FontConfiance2=$request->FontConfiance2;
     $FontConfiance3=$request->FontConfiance3;

     $RéseauQualité1=$request->RéseauQualité1;
     $RéseauQualité2=$request->RéseauQualité2;
     $RéseauQualité3=$request->RéseauQualité3;
     $RéseauQualité4=$request->RéseauQualité4;

     $InformationImportante1=$request->InformationImportante1;
     $InformationImportante2=$request->InformationImportante2;
     $InformationImportante3=$request->InformationImportante3;

     $NouveauxClients1=$request->NouveauxClients1;
     $NouveauxClients2=$request->NouveauxClients2;
     $NouveauxClients3=$request->NouveauxClients3;

     $AiderDévelopper=$request->AiderDévelopper; //radio 

     $Bénéfices1=$request->Bénéfices1;
     $Bénéfices2=$request->Bénéfices2;
     $Bénéfices3=$request->Bénéfices3;

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



     $req="INSERT INTO abonnement2 (`chosesessentielles`, `CadreTravail`, `FontConfiance`, `RéseauQualité`, `InformationImportante`, `NouveauxClients`, `AiderDévelopper`, `Bénéfices`) 
     VALUES ('{$chosesessentielles}','{$CadreTravail}', '{$FontConfiance}', '{$RéseauQualité}', '{$InformationImportante}' , '{$NouveauxClients}' , '{$AiderDévelopper}', '{$Bénéfices}'  )";
       $resultat=mysqli_query($con,$req) or die(mysqli_error($con));
       if ($resultat){
           http_response_code(201);
       }else{
           http_response_code(422);
       }
  
       
   }
     ?>