import React from 'react';
import { useState } from 'react';
import tof1 from "../image/1.png";
import './FormAbonne.css';
import { Form, Input,Checkbox, Alert, Button,  Radio, Space , Row, Col,message  } from 'antd';
function FormAbonne2() {

    const [Nom, setNom] = useState("");
    const [Prénom, setPrénom] = useState("");
    const [chosesessentielles, setchosesessentielles] = useState("");
    const [etap3, setetap3] = useState("");
    const [etap4, setetap4] = useState("");
    const [etap5, setetap5] = useState("");
    const [etap6, setetap6] = useState("");
    const [etap7, setetap7] = useState("");
    const [etap8, setetap8] = useState("");
    const [etap9, setetap9] = useState("");

    const [NomErr, setNomErr] = useState("");
    const [PrénomErr, setPrénomErr] = useState("");
    const [chosesessentiellesErr, setchosesessentiellesErr] = useState("");
    const [etap3Err, setetap3Err] = useState("");
    const [etap4Err, setetap4Err] = useState("");
    const [etap5Err, setetap5Err] = useState("");
    const [etap6Err, setetap6Err] = useState("");
    const [etap7Err, setetap7Err] = useState("");
    const [etap8Err, setetap8Err] = useState("");
    const [etap9Err, setetap9Err] = useState("");

    console.log(Nom);
    console.log(Prénom);
    console.log(chosesessentielles);
    const handleFormSubmit=(e)=>{
        e.preventDefault();
       
        const abonnement={
          nom:Nom,
          prenom:Prénom,
          chosesessentielles:  chosesessentielles,
          etap3Err:etap3Err,
          etap4Err:etap4Err,
          etap5Err:etap5Err,
          etap6Err:etap6Err,
          etap7Err:etap7Err,
          etap8Err:etap8Err,
          etap9Err:etap9Err,
        }
        console.log(abonnement);
     
    
    if(  Nom=='' || Prénom=='' ||   chosesessentielles==''|| etap3==''|| etap4==''||
     etap5==''|| etap6==''|| etap7==''|| etap8==''|| etap9==''){
      
        message.error('Vous devez remplir les champs obligatoires');
        setNomErr("le champ Nom est obligatoire merci de le remplir !!")
        setPrénomErr("le champ Prénom est obligatoire merci de le remplir !!")
        setchosesessentiellesErr("Ce champ est obligatoire !!")
        setetap3Err("Ce champ est obligatoire !!")
        setetap4Err("Ce champ est obligatoire !!")
        setetap5Err("Ce champ est obligatoire !!")
        setetap6Err("Ce champ est obligatoire !!")
        setetap7Err("Ce champ est obligatoire !!")
        setetap8Err("Ce champ est obligatoire !!")
        setetap9Err("Ce champ est obligatoire !!")
      }else{
        message.success('La demande est faite avec succès');
      
        setNom('');
        setPrénom('');
        setchosesessentielles('');
        setetap3Err('')
        setetap4Err('')
        setetap5Err('')
        setetap6Err('')
        setetap7Err('')
        setetap8Err('')
        setetap9Err('')
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
                <p style={{color:"#171617"}}><b>Votre Nom complet</b><span class="required">*</span></p>
                <div class="name-item">
                    <div className="col-md-6">
                    <Input className="inputB" type="text" style={{width: "590px"}} name="name"  placeholder="Prénom"  value={Prénom} onChange={(e)=>setPrénom(e.target.value)}  required/>
                    </div>
                    
                    <div className="col-md-6">
                    <Input className="inputB" style={{width: "590px"}} type="text" name="name" placeholder="Nom"  value={Nom} onChange={(e)=>setNom(e.target.value)} required/>
                    </div>
                    <div className="col-md-6">
                        <spam><b style={{color: "red"}}>{PrénomErr}</b></spam>
                    </div>
                    <div className="col-md-6">
                        <spam><b style={{color: "red"}}>{NomErr}</b></spam>
                    </div>
                    
                    </div>


                  
                
                <Form.Item name="chosesessentielles"> 
        <label><b>Pour vous, quelles sont les trois choses essentielles pour construire un réseau de qualité pour vous et la communauté ?</b><span class="required">*</span></label>
            <Input.TextArea value={chosesessentielles} onChange={(e)=>setchosesessentielles(e.target.value)} required />
            <spam><b style={{color: "red"}}>{chosesessentiellesErr}</b></spam>
      </Form.Item>
      <Form.Item >
            <label><b>Dans votre réseau vous savez que Rachid a une information pouvant grandement aider Mohamed dans le cadre de son travail ? Qu’est-ce que vous faites ?</b><span class="required">*</span></label>
              <Radio.Group value={etap3} onChange={(e)=>setetap3(e.target.value)}>
      <Radio value="etap31" >Mohamed n’a qu’à se débrouiller avec son réseau. Moi hamdoullah j’ai mon réseau</Radio><br/>
      <Radio value="etap32" >Sans aucune hésitation j’envoi le numéro de Rachid à Mohamed</Radio><br/>
      <Radio value="etap33" >Je demande l’accord de Rachid avant de partager son numéro avec Mohamed</Radio><br/>
      <Radio value="etap34"    >J’appelle Rachid d’abord pour lui expliquer la situation et lui demande de me faire un feedback après qu’il ait eu Mohamed au téléphone</Radio><br/>
    </Radio.Group><br/>
    <spam><b style={{color: "red"}}>{etap3Err}</b></spam>
        </Form.Item> 
        <Form.Item >
            <label><b>Comment pouvez-vous détruire votre réseau et celui de celles et ceux qui vous font confiance?</b><span class="required">*</span></label>
              <Checkbox.Group >
       <Checkbox value="etap41" value={etap4} onChange={(value)=>setetap4(value)}>En promettant d’appeler un contact qui vous a été communiqué&nbsp;a tel jour et telle heure mais vous ne le&nbsp;faites pas et
     vous n’informez pas</Checkbox><br/>
       <Checkbox value="etap42" value={etap4} onChange={(value)=>setetap4(value)}>En ayant accéder à une super information très importante pour vous et en ne 
                donnant pas le FEEDBACK a celle ou celui qui vous a permis d’y accéder</Checkbox><br/>
       <Checkbox value="etap43" value={etap4} onChange={(value)=>setetap4(value)}>En restant flou sur ce que vous allez faire lorsqu’on partage avec vous un contact de confiance</Checkbox><br/>
    </Checkbox.Group><br/>
    <spam><b style={{color: "red"}}>{etap4Err}</b></spam>
        </Form.Item> 

        <Form.Item >
            <label><b>Quelles sont les clés pour ouvrir un réseau de qualité utile pour soi et les autres?</b><span class="required">*</span></label>
              <Checkbox.Group value={etap5} onChange={(e)=>setetap5(e.target.value)}>
       <Checkbox value="etap51">En posant régulièrement des questions a son réseau</Checkbox><br/>
       <Checkbox value="etap52">En provoquant la rencontre physique à chaque fois que possible en complément des échanges virtuels</Checkbox><br/>
       <Checkbox value="etap53">En devenant une OPPORTUNITÉ vous-même pour votre réseau. Vous comprenez qu’une information peut ne pas être importante pour vous mais extrêmement importante pour un frère ou une sœur</Checkbox><br/>
       <Checkbox value="etap54">En étant visible, en rendant ses besoins professionnels visibles</Checkbox><br/>
    </Checkbox.Group><br/>
    <spam><b style={{color: "red"}}>{etap5Err}</b></spam>
        </Form.Item> 
             
        <Form.Item >
            <label><b>Vous venez d’obtenir une information importante pour la communauté, par exemple une entreprise en pleine croissance qui va recruter et vous êtes en connexion avec un salarié de cette entreprise. Que faites-vous?</b><span class="required">*</span></label>
              <Checkbox.Group  value={etap6} onChange={(e)=>setetap6(e.target.value)}>
       <Checkbox value="etap61">Hamdoullah c’est une bonne nouvelle pour l’entreprise</Checkbox><br/>
       <Checkbox value="etap62">Vous regarder qui dans votre réseau peut bénéficier de cette info</Checkbox><br/>
       <Checkbox value="etap63">Vous informez votre réseau et vous faites le feedback a Boussole Pro qui partagera plus largement</Checkbox><br/> 
    </Checkbox.Group><br/>
    <spam><b style={{color: "red"}}>{etap6Err}</b></spam>
        </Form.Item>

        <Form.Item >
            <label><b>Grâce à Boussole Pro vous avez été connecté à des personnes qui vous ont aidé professionnellement et dans
 certains cas permis d’accéder a de nouveaux clients. Que faites-vous ?</b><span class="required">*</span></label>
              <Checkbox.Group value={etap7} onChange={(e)=>setetap7(e.target.value)} >
       <Checkbox value="etap71">Vous résilier votre abonnement</Checkbox><br/>
       <Checkbox value="etap72">Vous donner le feedback a Boussole Pro</Checkbox><br/>
       <Checkbox value="etap73">Vous donnez le feedback à Boussole Pro et regardez comment sponsoriser financièrement Boussole Pro</Checkbox><br/> 
    </Checkbox.Group><br/>
    <spam><b style={{color: "red"}}>{etap7Err}</b></spam>
        </Form.Item>

        <Form.Item >
            <label><b>Amine vous a bien aidé. Il vient de vous communiquer le numéro de Karima qui a 
des informations pouvant vous aider à développer votre entreprise. Que faites-vous ?</b><span class="required">*</span></label>
              <Checkbox.Group  value={etap8} onChange={(e)=>setetap8(e.target.value)}>
       <Checkbox value="etap81">Vous remerciez bien sûr Amine</Checkbox><br/>
       <Checkbox value="etap82">Vous remerciez Amine et vous lui dites quand vous allez appeler Karima</Checkbox><br/>
       <Checkbox value="etap83">Les 2 options précédentes puis vous appeler Amine pour lui faire un feedback</Checkbox><br/> 
    </Checkbox.Group><br/>
    <spam><b style={{color: "red"}}>{etap8Err}</b></spam>
        </Form.Item>

        <Form.Item >
            <label><b>Malgré votre abonnement à Boussole Pro vous avez aidé des frères et sœurs
 professionnellement mais cependant professionnellement dans votre travail au quotidien concrètement
 vous n’en avez pas encore vu les bénéfices. Que faites-vous ?</b><span class="required">*</span></label>
              <Checkbox.Group value={etap9} onChange={(e)=>setetap9(e.target.value)}>
       <Checkbox value="etap91">Vous résiliez votre abonnement</Checkbox><br/>
       <Checkbox value="etap92">Vous donnez le feedback à Boussole Pro pour vous trouver des interactions pouvant vous servir</Checkbox><br/>
       <Checkbox value="etap93">L'option précédente et vous êtes malgré tout satisfait :-) Vous savez que les bénéfices retournent à la communauté FEA et que Boussole Pro a été monté spécialement pour ça,
        pour faciliter nos frères et sœurs dans leur besoin professionnellement, Votre abonnement finance la structure qui encourage la résilience professionnelle et économique de notre communauté</Checkbox><br/> 
    </Checkbox.Group><br/>
    <spam><b style={{color: "red"}}>{etap9Err}</b></spam>
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