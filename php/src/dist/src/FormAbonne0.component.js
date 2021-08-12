import React from 'react';
import { useState } from 'react';

import { Form, Input,Checkbox, Alert, Button,  Radio, Space , Row, Col,message  } from 'antd';
function FormAbonne0() {
    const [Nom, setNom] = useState("");
    const [Prénom, setPrénom] = useState("");
    const [Télé, setTélé] = useState("");
    const [Email, setEmail] = useState("");
    const [ObjectifProfess, setObjectifProfess] = useState("");
    const [Radio1, setRadio1] = useState("");
    const [Radio2, setRadio2] = useState("");
    const [Radio3, setRadio3] = useState("");
    const [Radio4, setRadio4] = useState("");
    const [Radio5, setRadio5] = useState("");
    
    

    const [NomErr, setNomErr] = useState("");
    const [PrénomErr, setPrénomErr] = useState("");
    const [TéléErr, setTéléErr] = useState("");
    const [EmailErr, setEmailErr] = useState("");
    const [ObjectifProfessErr, setObjectifProfessErr] = useState("");
    const [Radio1Err, setRadio1Err] = useState("");
    const [Radio2Err, setRadio2Err] = useState("");
    const [Radio3Err, setRadio3Err] = useState("");
    const [Radio4Err, setRadio4Err] = useState("");
    const [Radio5Err, setRadio5Err] = useState("");

    const handleFormSubmit=(e)=>{
        e.preventDefault();
       
        const abonnement0={
          nom:Nom,
          prenom:Prénom,
          Télé:Télé,
          Email:Email,
          ObjectifProfess:ObjectifProfess,
          Radio1:Radio1,
          Radio2:Radio2,
          Radio3:Radio3,
          Radio4:Radio4,
          Radio5:Radio5,
          
        }
        console.log(abonnement0);
        if(  Nom=='' || Prénom==''|| Radio1==''|| Radio2==''|| Radio3==''|| Radio4=='' 
        || Radio5=='' || Télé=='' || Email==''|| ObjectifProfess==''){
      
            message.error('Vous devez remplir les champs obligatoires');
            setNomErr("le champ Nom est obligatoire merci de le remplir !!");
            setPrénomErr("le champ Prénom est obligatoire merci de le remplir !!");
            setTéléErr("le champ Téléphone est obligatoire  !!");
            setEmailErr("le champ Email est obligatoire  !!");
            setObjectifProfessErr("le champ Email est obligatoire  !!");
            setRadio1Err("le champ est obligatoire  !!");
            setRadio2Err("le champ est obligatoire  !!");
            setRadio3Err("le champ est obligatoire  !!");
            setRadio4Err("le champ est obligatoire  !!");
            setRadio5Err("le champ est obligatoire  !!");}
            else{
                message.success('La demande est faite avec succès');
              setPrénom('');
                setNom(''); 
                setObjectifProfess('');
                setTélé('');
                setEmail('');
                setRadio1('');
                setRadio2('');
                setRadio3('');
                setRadio4('');
            }}
    return (
        <div>
           <form  className="ss">
        <Row>
        <Col span={24}>
            
            <Alert   message="Un réseau de confiance et de qualité"
                  description="Bienveneu sur formulaire d'abonne."
                  type="info"
                  showIcon/>
          
             
             <div style={{textAlign:"center"}}> 
              <h4 style={{color:"#171617"}}>Formulaire d’abonnement à FEA Boussole Pro</h4></div>
              <div class="item">
              
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

                    <Form.Item >
            <label >
            <b> Téléphone</b><span class="form-required"> *</span></label>
              <Input type="tel" id="phone" name="phone" placeholder="Indiquer votre indicatif pays" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" value={Télé} onChange={(e)=>setTélé(e.target.value)} required/>
              <spam><b style={{color: "red"}}>{TéléErr}</b></spam>
               </Form.Item> 

               <Form.Item name={['user', 'email']}  rules={[{ type: 'email' }]}>
      <label><b>Email</b><span class="required">*</span></label>
        <Input  placeholder="Exmple: boussole@fea.com" value={Email} onChange={(e)=>setEmail(e.target.value)} required />
        <spam><b style={{color: "red"}}>{EmailErr}</b></spam>
        </Form.Item>
       
        <Form.Item >
      <label><b>Votre objectif professionnel</b><span class="required">*</span></label>
        <Input  type="text" name="objectifProfess" value={ObjectifProfess} onChange={(e)=>setObjectifProfess(e.target.value)} required />
        <spam><b style={{color: "red"}}>{ObjectifProfessErr}</b></spam>
        </Form.Item> 

      <Form.Item >
            <label><b>Je confirme soumettre 2 contacts. Tout abonné-e doit être recommandé par 2 personnes. Remarque : ce sont les 2 personnes qui peuvent vous recommander et qui vous connaissent (de votre entourage ou autres).</b><span class="required">*</span></label>
              <Radio.Group value={Radio1} onChange={(e)=>setRadio1(e.target.value)}>
      <Radio value="confirme" >OUI je confirme</Radio><br/>
      <Radio value="nonconfirm" >NON je ne confirme pas</Radio><br/>
    </Radio.Group><br/>
    <spam><b style={{color: "red"}}>{Radio1Err}</b></spam>
        </Form.Item> 

        <Form.Item >
            <label><b>êtes vous un membre de FEA?</b><span class="required">*</span></label><br/>
              <Radio.Group value={Radio2} onChange={(e)=>setRadio2(e.target.value)}>
      <Radio value="membre" >Membre de FEA</Radio><br/>
      <Radio value="nonmembre" >Non membre de FEA</Radio><br/>
    </Radio.Group><br/>
    <spam><b style={{color: "red"}}>{Radio2Err}</b></spam>
        </Form.Item>

        <Form.Item >
            <label><b>Quel abonnement choisissez-vous?</b><span class="required">*</span></label><br/>
              <Radio.Group value={Radio3} onChange={(e)=>setRadio3(e.target.value)} >
      <Radio value="Standard15" >Standard à 15 euros par mois - avec engagement annuel</Radio><br/>
      <Radio value="Standard180" >Standard à 180 euros par an + 5% de réduction</Radio><br/>
      <Radio value="Premium25" >Premium à 25 euros par mois - avec engagement annuel</Radio><br/>
      <Radio value="Premium300" >Premium à 300 euros par an + 5% de réduction</Radio><br/>
    </Radio.Group><br/>
    <spam><b style={{color: "red"}}>{Radio3Err}</b></spam>
        </Form.Item>

        <Form.Item >
            <label><b>Conformément à la loi 09-08, vous disposez d’un droit d’accès, de rectification et d’opposition au traitement de vos données personnelles. </b><span class="required">*</span></label><br/>
              <Radio.Group value={Radio4} onChange={(e)=>setRadio4(e.target.value)}>
      <Radio value="Accepteconditions" >J'accepte les conditions d'utilisation</Radio><br/>
      <Radio value="NonAccepteconditions" >Je n'accepte pas les conditions d'utilisation</Radio><br/>
    </Radio.Group><br/>
    <spam><b style={{color: "red"}}>{Radio4Err}</b></spam>
        </Form.Item>

        <Form.Item >
            <label><b>J'ACCEPTE QUE FEA BOUSSOLE PRO COLLECTE MES DONNÉES PERSONNELLES EN VUE DE M'INFORMER SUR SES OFFRES COMMERCIALES ET ÉVÉNEMENTS </b><span class="required">*</span></label><br/>
              <Radio.Group value={Radio5} onChange={(e)=>setRadio5(e.target.value)}>
      <Radio value="OuiAccepte" >Oui</Radio><br/>
      <Radio value="NonAccepte" >Non</Radio><br/>
    </Radio.Group><br/>
    <spam><b style={{color: "red"}}>{Radio5Err}</b></spam>
        </Form.Item>
        

       

       
             
      

      

     

      
<p>Notre équipe entrera en contact avec vous et sera à votre disposition pour toutes demandes. Contrairement à d’autres réseaux FEA Boussole Pro se caractérise par l’importance du contact humain et un service de suivi de qualité. Nous vous remercions de votre confiance :)</p>
              <div class="btn-block">
              <Button type="primary" value="Submit" onClick={handleFormSubmit}  required href="/" required style={{margin:"10px"}}>Soumettre</Button>
      
              </div>
              </div>
                 </Col>
        
            </Row>
            </form>  
        </div>
    );
}

export default FormAbonne0;