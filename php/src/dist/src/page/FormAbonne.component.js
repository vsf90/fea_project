import React from 'react';
import { useState } from 'react';
import { Form, Input, Alert, Button,  DatePicker, Space ,Checkbox, Row, Col ,message } from 'antd';
function FormAbonne() {
  const [Nom, setNom] = useState("");
  const [Prénom, setPrénom] = useState("");
  const [PrénomContact1, setPrénomContact1] = useState("");
  const [PrénomContact2, setPrénomContact2] = useState("");
  const [NomContact1, setNomContact1] = useState("");
  const [NomContact2, setNomContact2] = useState("");
  const [TeleContact2, setTeleContact2] = useState("");
  const [TeleContact1, setTeleContact1] = useState("");

  const [NomErr, setNomErr] = useState("");
  const [PrénomErr, setPrénomErr] = useState("");
  const [PrénomContact1Err, setPrénomContact1Err] = useState("");
  const [PrénomContact2Err, setPrénomContact2Err] = useState("");
  const [NomContact1Err, setNomContact1Err] = useState("");
  const [NomContact2Err, setNomContact2Err] = useState("");
  const [TeleContact2Err, setTeleContact2Err] = useState("");
  const [TeleContact1Err, setTeleContact1Err] = useState("");
  console.log(Nom);
  console.log(Prénom);
 
  const handleFormSubmit=(e)=>{
      e.preventDefault();
      const abonnement={
        nom:Nom,
        prenom:Prénom,
        
       
      }
      console.log(abonnement);
  
  if(  Nom=='' || Prénom=='' ||PrénomContact1==''||PrénomContact2==''||
  NomContact1==''||NomContact2==''||TeleContact1==''||TeleContact2=='' ){
    
      message.error('Vous devez remplir les champs obligatoires');
      setNomErr("le champ Nom est obligatoire !!")
      setPrénomErr("le champ Prénom est obligatoire !!")
      setPrénomContact1Err("le champ est obligatoire !!")
      setPrénomContact2Err("le champ est obligatoire !!")
      setNomContact1Err("le champ est obligatoire !!")
      setPrénomContact2Err("le champ est obligatoire !!")
      setTeleContact1Err("le champ est obligatoire !!")
      setTeleContact2Err("le champ est obligatoire !!")
     
    }else{
      message.success('La demande est faite avec succès');
    
  
      setNom('');
      setPrénom('');
      
    }
  }
    return (
      <form  className="ss">
      <Row>
      <Col span={24}>
          
          <Alert
                message="Un réseau de confiance et de qualité"
                description="Bienveneu sur formulaire d'abonne."
                type="info"
                showIcon
                />
            
            <h4 >Un réseau de confiance et de qualité</h4>
                    <p class="top-info" >
         Merci pour l’intérêt porté a FEA Boussole Pro. Afin de garantir un réseau de qualité à l’ensemble de ses abonnés nous demandons à chaque abonné de confirmer 2 recommandations.
         Notre équipe va les contacter et une fois les recommandations validées nous vous informerons et mettrons à votre disposition le questionnaire sur les fondamentaux du networking. 
         Pour rappel les critères de validation des recommandations sont les suivants : soit avoir travaillé dans la même entreprise (salarié ou entrepreneur), 
         soit la même association soit enfin avoir voyagé avec elle durant une période supérieure a une semaine.
         </p>
          
       
              
              <div class="item">
              <p style={{color:"#171617"}}> <b>Contacts 1ere recommandation </b><span class="required">*</span> </p>
              <div class="name-item">
              <Input className="inputB" type="text" name="name"  placeholder="Prénom" value={PrénomContact1} onChange={(e)=>setPrénomContact1(e.target.value)} required/>
                <Input className="inputB"  type="text" name="name" placeholder="Nom" value={NomContact1} onChange={(e)=>setNomContact1(e.target.value)} required/>
              </div> 
            </div>
            <div class="item">
            <label class="form-label form-label-left form-label-auto" id="label_6" for="input_6">
            <b> Téléphone de votre première recommandation</b><span class="form-required"> *</span></label>
              <div class="name-item">
              <Input type="tel" id="phone" name="phone" placeholder="Télé" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" value={TeleContact1} onChange={(e)=>setTeleContact1(e.target.value)}  required/>
              <spam><b style={{color: "red"}}>{TeleContact1Err}</b></spam>
               </div>
            </div>

            <div class="item">
              <p style={{color:"#171617"}}><b> Contacts 2nde recommandation</b><span class="required">*</span> </p>
              <div class="name-item">
              <Input className="inputB" type="text" name="name"  placeholder="Prénom" value={PrénomContact2} onChange={(e)=>setPrénomContact2(e.target.value)} required />
                <Input className="inputB"  type="text" name="name" placeholder="Nom" value={NomContact2} onChange={(e)=>setNomContact2(e.target.value)} required/>
              </div>
            </div>
            <div class="item">
            <label class="form-label form-label-left form-label-auto" id="label_6" for="input_6">
            <b>Téléphone de votre seconde recommandation</b>
       <span class="form-required">
         *
       </span>
     </label>
              <div class="name-item">
              <Input type="tel" id="phone" name="phone" placeholder="Télé" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" value={TeleContact2} onChange={(e)=>setTeleContact2(e.target.value)} required/>
              <spam><b style={{color: "red"}}>{TeleContact2Err}</b></spam>
              </div>
          <p>Ces recommandations et les données personnelles communiqués
             ne feront l'objet d'aucune utilisation publicitaire et feront l'objet 
            d'une destruction 48h après validation.</p>
           
            </div>
            <div class="btn-block">
            <Button type="primary" value="Submit" onClick={handleFormSubmit} required style={{margin:"10px"}}>Soumettre</Button>
    
            </div>
          
               </Col>
      
             </Row>
          </form>
   
    );
}

export default FormAbonne;