import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import tof1 from "../../../image/1.png";
import './FormAbonne.css';
import { Form, Input,Checkbox, Alert, Button,  Radio, Space , Row, Col,message  } from 'antd';
import history from '../../../history';
function FormAbonne2() {
    
   
    const [chosesessentielles, setchosesessentielles] = useState("");
    const [CadreTravail, setCadreTravail] = useState("");
    const [FontConfiance1, setFontConfiance1] = useState("");
    const [FontConfiance2, setFontConfiance2] = useState("");
    const [FontConfiance3, setFontConfiance3] = useState("");
    
    const [RéseauQualité1, setRéseauQualité1] = useState("");
    const [RéseauQualité2, setRéseauQualité2] = useState("");
    const [RéseauQualité3, setRéseauQualité3] = useState("");
    const [RéseauQualité4, setRéseauQualité4] = useState("");

    const [InformationImportante1, setInformationImportante1] = useState("");
    const [InformationImportante2, setInformationImportante2] = useState("");
    const [InformationImportante3, setInformationImportante3] = useState("");

    const [NouveauxClients1, setNouveauxClients1] = useState("");
    const [NouveauxClients2, setNouveauxClients2] = useState("");
    const [NouveauxClients3, setNouveauxClients3] = useState("");

    const [AiderDévelopper, setAiderDévelopper] = useState("");

    const [Bénéfices1, setBénéfices1] = useState("");
    const [Bénéfices2, setBénéfices2] = useState("");
    const [Bénéfices3, setBénéfices3] = useState("");
    
  
    const [chosesessentiellesErr, setchosesessentiellesErr] = useState("");
    const [CadreTravailErr, setCadreTravailErr] = useState("");
    const [FontConfianceErr, setFontConfianceErr] = useState("");
    const [RéseauQualitéErr, setRéseauQualitéErr] = useState("");
    const [InformationImportanteErr, setInformationImportanteErr] = useState("");
    const [NouveauxClientsErr, setNouveauxClientsErr] = useState("");
    const [AiderDévelopperErr, setAiderDévelopperErr] = useState("");
    const [BénéficesErr, setBénéficesErr] = useState("");

   
    console.log(chosesessentielles);
    const handleFormSubmit=(e)=>{
        e.preventDefault();

       
        const abonnement2={
        
          chosesessentielles:chosesessentielles,
          CadreTravail:CadreTravail,
          FontConfiance1:FontConfiance2,
          FontConfiance2:FontConfiance2,
          FontConfiance3:FontConfiance3,
          RéseauQualité1:RéseauQualité1,
          RéseauQualité2:RéseauQualité2,
          RéseauQualité3:RéseauQualité3,
          RéseauQualité4:RéseauQualité4,
          InformationImportante1:InformationImportante1,
          InformationImportante2:InformationImportante2,
          InformationImportante3:InformationImportante3,
          NouveauxClients1:NouveauxClients1,
          NouveauxClients2:NouveauxClients2,
          NouveauxClients3:NouveauxClients3,
          AiderDévelopper:AiderDévelopper,
          Bénéfices1:Bénéfices1,
          Bénéfices2:Bénéfices2,
          Bénéfices3:Bénéfices3,


        }
        console.log(abonnement2);
       var config = {
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          };
        axios.post('http://localhost/BoussolePro-backend/insertAbonnement2.php',abonnement2,config)
        .then(res=>console.log(res.data));

          if(chosesessentielles==''){
             setchosesessentiellesErr("Ce champ est obligatoire !!")
          }
          if(CadreTravail==''){
           setCadreTravailErr("Ce champ est obligatoire !!")
         }
         if(RéseauQualité1==''&&RéseauQualité2==''&&RéseauQualité3==''&&RéseauQualité3==''){
          setRéseauQualitéErr("Ce champ est obligatoire !!")
        }
        if(InformationImportante1==''&&InformationImportante2==''&&InformationImportante3==''){
          setInformationImportanteErr("Ce champ est obligatoire !!")
        }
        if(FontConfiance1==''&&FontConfiance2==''&&FontConfiance3==''){
            setFontConfianceErr("Ce champ est obligatoire !!")
        }
        if(NouveauxClients1=='' &&NouveauxClients2=='' &&NouveauxClients3=='' ){
          setNouveauxClientsErr("Ce champ est obligatoire !!")
        }
        if(AiderDévelopper==''){
          setAiderDévelopperErr("Ce champ est obligatoire !!")
        }
        if(Bénéfices1=='' &&Bénéfices2=='' &&Bénéfices3=='' ){
          
          setBénéficesErr("Ce champ est obligatoire !!")
        }
    if(chosesessentielles==''|| CadreTravail==''||
    (RéseauQualité1==''&&RéseauQualité2==''&&RéseauQualité3==''&&RéseauQualité3=='')|| 
    (InformationImportante1==''&&InformationImportante2==''&&InformationImportante3=='')||
    (FontConfiance1==''&&FontConfiance2==''&&FontConfiance3=='')||
     (NouveauxClients1=='' &&NouveauxClients2=='' &&NouveauxClients3=='') || AiderDévelopper==''||
       (Bénéfices1=='' &&Bénéfices2=='' &&Bénéfices3=='' )){
      
        message.error('Vous devez remplir les champs obligatoires');
     }
      else{
        message.success('La demande est faite avec succès');
      
      
       
        setchosesessentielles('');
        setCadreTravailErr('')
        setFontConfianceErr('')
        setRéseauQualitéErr('')
        setInformationImportanteErr('')
        setNouveauxClientsErr('')
        setAiderDévelopperErr('')
        setBénéficesErr('')
      }
    }
    return (
        <form  className="ss">
        <Row>
        <Col span={24}>
            
            <Alert   message="Un réseau de confiance et de qualité"
                  description="Bienveneu sur formulaire d'abonne."
                  type="info"
                  showIcon/>
          
              <img className="card-img-top" src={tof1} alt="1" style={{width:"600px", display:"block", margin:"auto",padding:"auto"}} />
             <div style={{textAlign:"center"}}> <h4 >SALAM</h4>
              <h4 style={{color:"#171617"}}>Prenez 5 minutes de votre temps pour remplir ce questionnaire sur le networking</h4></div>
              <div class="item">
              <p>Cher (ère) futur(e) abonné(e). Vous êtes aux portes de Boussole Pro où nous rejoignons tous 
                  ensemble un réseau qui a pour cœur 
                  le hadith de la Boussole et qui a pour but de nous mettre dans un groupe 
                  où nous nous dirigeons avec sens spirituel et sens professionnel.
                   Passons à présent à l’E-Learning. 
                   Ce petit test a pour but de nous assurer de bien maitriser ce qui fait la force d’un réseau. 
                   Ce que vous allez apprendre ou vous « remémorez» ici est l’équivalent des artères qui distribuent 
                   le sang dans notre corps. Sans artères le sang ne circule pas, 
                   sans ce que vous allez apprendre ici l’information ne circule pas et il nous est alors impossible de 
                   construire un réseau fort pour notre communauté. 
                   Après avoir répondu aux différentes questions vous aurez un retour expliquant le
                    pourquoi de ces questions et mettant en valeur vos réponses si c’est nécessaire.  
                </p>
               
                <Form.Item name="chosesessentielles"> 
        <label><b>Pour vous, quelles sont les trois choses essentielles pour construire un réseau de qualité pour vous et la communauté ?</b><span class="required">*</span></label>
            <Input.TextArea value={chosesessentielles} onChange={(e)=>setchosesessentielles(e.target.value)} required />
            <spam><b style={{color: "red"}}>{chosesessentiellesErr}</b></spam>
      </Form.Item>
      <Form.Item >
            <label><b>Dans votre réseau vous savez que Rachid a une information pouvant grandement aider Mohamed dans le cadre de son travail ? Qu’est-ce que vous faites ?</b><span class="required">*</span></label>
              <Radio.Group value={CadreTravail} onChange={(e)=>setCadreTravail(e.target.value)}>
      <Radio value="Mohamed n’a qu’à se débrouiller avec son réseau. Moi hamdoullah j’ai mon réseau"  >Mohamed n’a qu’à se débrouiller avec son réseau. Moi hamdoullah j’ai mon réseau</Radio><br/>
      <Radio value="Sans aucune hésitation j’envoi le numéro de Rachid à Mohamed" >Sans aucune hésitation j’envoi le numéro de Rachid à Mohamed</Radio><br/>
      <Radio value="Je demande l’accord de Rachid avant de partager son numéro avec Mohamed" >Je demande l’accord de Rachid avant de partager son numéro avec Mohamed</Radio><br/>
      <Radio value="J’appelle Rachid d’abord pour lui expliquer la situation et lui demande de me faire un feedback après qu’il ait eu Mohamed au téléphone"    >J’appelle Rachid d’abord pour lui expliquer la situation et lui demande de me faire un feedback après qu’il ait eu Mohamed au téléphone</Radio><br/>
    </Radio.Group><br/>
    <spam><b style={{color: "red"}}>{CadreTravailErr}</b></spam>
        </Form.Item> 

        <Form.Item >
        <label><b>Comment pouvez-vous détruire votre réseau et celui de celles et ceux qui vous font confiance?</b><span class="required">*</span></label>
          <div class="status-item">
            <label><input className="inputB" type="checkbox" checked={FontConfiance1} onChange={(e)=>setFontConfiance1(e.target.checked)} name="name"/> <span>En promettant d’appeler un contact qui vous a été communiqué&nbsp;a tel jour et telle heure mais vous ne le&nbsp;faites pas et
     vous n’informez pas</span></label><br/>
            <label><input className="inputB" type="checkbox" checked={FontConfiance2} onChange={(e)=>setFontConfiance2(e.target.checked)} name="name"/> <span>n ayant accéder à une super information très importante pour vous et en ne donnant pas le FEEDBACK a celle ou celui qui vous a permis d’y accéder</span></label>
            <label><input className="inputB" type="checkbox" checked={FontConfiance3} onChange={(e)=>setFontConfiance3(e.target.checked)} name="name"/> <span>En restant flou sur ce que vous allez faire lorsqu’on partage avec vous un contact de confiance</span></label>
          </div>
          <spam><b style={{color: "red"}}>{FontConfianceErr}</b></spam>
          </Form.Item>

        <Form.Item >
        <label><b>Quelles sont les clés pour ouvrir un réseau de qualité utile pour soi et les autres?</b><span class="required">*</span></label>
          <div class="status-item">
            <label><input className="inputB" type="checkbox" checked={RéseauQualité1} onChange={(e)=>setRéseauQualité1(e.target.checked)} name="name"/> <span>En posant régulièrement des questions a son réseau</span></label><br/>
            <label><input className="inputB" type="checkbox" checked={RéseauQualité2} onChange={(e)=>setRéseauQualité2(e.target.checked)} name="name"/> <span>En provoquant la rencontre physique à chaque fois que possible en complément des échanges virtuels</span></label>
            <label><input className="inputB" type="checkbox" checked={RéseauQualité3} onChange={(e)=>setRéseauQualité3(e.target.checked)} name="name"/> <span>En devenant une OPPORTUNITÉ vous-même pour votre réseau. Vous comprenez qu’une information peut ne pas être importante pour vous mais extrêmement importante pour un frère ou une sœur</span></label>
            <label><input className="inputB" type="checkbox" checked={RéseauQualité4} onChange={(e)=>setRéseauQualité4(e.target.checked)} name="name"/> <span>En étant visible, en rendant ses besoins professionnels visibles</span></label>
          </div>
          <spam><b style={{color: "red"}}>{RéseauQualitéErr}</b></spam>
          </Form.Item>
        
       

       
        <Form.Item >
        <label><b>Vous venez d’obtenir une information importante pour la communauté, par exemple une entreprise en pleine croissance qui va recruter et vous êtes en connexion avec un salarié de cette entreprise. Que faites-vous?</b><span class="required">*</span></label>
          <div class="status-item">
            <label><input className="inputB" type="checkbox" checked={InformationImportante1} onChange={(e)=>setInformationImportante1(e.target.checked)} name="name"/> <span>Hamdoullah c’est une bonne nouvelle pour l’entreprise</span></label><br/>
            <label><input className="inputB" type="checkbox" checked={InformationImportante2} onChange={(e)=>setInformationImportante2(e.target.checked)} name="name"/> <span>Vous regarder qui dans votre réseau peut bénéficier de cette info</span></label>
            <label><input className="inputB" type="checkbox" checked={InformationImportante3} onChange={(e)=>setInformationImportante3(e.target.checked)} name="name"/> <span>Vous informez votre réseau et vous faites le feedback a Boussole Pro qui partagera plus largement</span></label>
          </div>
          <spam><b style={{color: "red"}}>{InformationImportanteErr}</b></spam>
          </Form.Item>
        <Form.Item >
        <label><b>Grâce à Boussole Pro vous avez été connecté à des personnes qui vous ont aidé professionnellement et dans
 certains cas permis d’accéder a de nouveaux clients. Que faites-vous ?</b><span class="required">*</span></label>
          <div class="status-item">
            <label><input className="inputB" type="checkbox" checked={NouveauxClients1} onChange={(e)=>setNouveauxClients1(e.target.checked)} name="name"/> <span>Vous résilier votre abonnement</span></label><br/>
            <label><input className="inputB" type="checkbox" checked={NouveauxClients2} onChange={(e)=>setNouveauxClients2(e.target.checked)} name="name"/> <span>Vous donner le feedback a Boussole Pro</span></label>
            <label><input className="inputB" type="checkbox" checked={NouveauxClients3} onChange={(e)=>setNouveauxClients3(e.target.checked)} name="name"/> <span>Vous donnez le feedback à Boussole Pro et regardez comment sponsoriser financièrement Boussole Pro</span></label>
          </div>
          <spam><b style={{color: "red"}}>{NouveauxClientsErr}</b></spam>
          </Form.Item>
        <Form.Item >
            <label><b>Amine vous a bien aidé. Il vient de vous communiquer le numéro de Karima qui a 
des informations pouvant vous aider à développer votre entreprise. Que faites-vous ?</b><span class="required">*</span></label>
<Radio.Group  value={AiderDévelopper} onChange={(e)=>setAiderDévelopper(e.target.value)}>
       <Radio value="Vous remerciez bien sûr Amine">Vous remerciez bien sûr Amine</Radio><br/>
       <Radio value="Vous remerciez Amine et vous lui dites quand vous allez appeler Karima">Vous remerciez Amine et vous lui dites quand vous allez appeler Karima</Radio><br/>
       <Radio value="Les 2 options précédentes puis vous appeler Amine pour lui faire un feedback">Les 2 options précédentes puis vous appeler Amine pour lui faire un feedback</Radio><br/> 
    </Radio.Group><br/>
    <spam><b style={{color: "red"}}>{AiderDévelopperErr}</b></spam>
        </Form.Item>

        
       
        <Form.Item >
        <label><b>Malgré votre abonnement à Boussole Pro vous avez aidé des frères et sœurs
 professionnellement mais cependant professionnellement dans votre travail au quotidien concrètement
 vous n’en avez pas encore vu les bénéfices. Que faites-vous ?</b><span class="required">*</span></label>
          <div class="status-item">
            <label><input className="inputB" type="checkbox" checked={Bénéfices1} onChange={(e)=>setBénéfices1(e.target.checked)} name="name"/> <span>Vous résiliez votre abonnement</span></label><br/>
            <label><input className="inputB" type="checkbox" checked={Bénéfices2} onChange={(e)=>setBénéfices2(e.target.checked)} name="name"/> <span>Vous donnez le feedback à Boussole Pro pour vous trouver des interactions pouvant vous servir</span></label>
            <label><input className="inputB" type="checkbox" checked={Bénéfices3} onChange={(e)=>setBénéfices3(e.target.checked)} name="name"/> <span>L'option précédente et vous êtes malgré tout satisfait :-) Vous savez que les bénéfices retournent à la communauté FEA et que Boussole Pro a été monté spécialement pour ça,
        pour faciliter nos frères et sœurs dans leur besoin professionnellement, Votre abonnement finance la structure qui encourage la résilience professionnelle et économique de notre communauté</span></label>
          </div>
          <spam><b style={{color: "red"}}>{BénéficesErr}</b></spam>
          </Form.Item>

              <div class="btn-block">
              <Button type="primary" value="Submit" onClick={handleFormSubmit}  required href="/" required style={{margin:"10px"}}>Soumettre</Button>
      
              </div>
              </div>
                 </Col>
        
            </Row>
            </form>
           
    );
}

export default FormAbonne2;