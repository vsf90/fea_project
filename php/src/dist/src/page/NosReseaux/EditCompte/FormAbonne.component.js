import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Form, Input, Alert, Button,  DatePicker, Space ,Checkbox, Row, Col ,message } from 'antd';
import { config } from '../../../config';

function FormAbonne() {
 
  const [PrénomContact1, setPrénomContact1] = useState("");
  const [PrénomContact2, setPrénomContact2] = useState("");
  const [NomContact1, setNomContact1] = useState("");
  const [NomContact2, setNomContact2] = useState("");
  const [TeleContact2, setTeleContact2] = useState("");
  const [TeleContact1, setTeleContact1] = useState("");

  
  const [PrénomContact1Err, setPrénomContact1Err] = useState("");
  const [PrénomContact2Err, setPrénomContact2Err] = useState("");
  const [NomContact1Err, setNomContact1Err] = useState("");
  const [NomContact2Err, setNomContact2Err] = useState("");
  const [TeleContact2Err, setTeleContact2Err] = useState("");
  const [TeleContact1Err, setTeleContact1Err] = useState("");
 
  const handleFormSubmit=(e)=>{
      e.preventDefault();
      const abonnement={
        NomContact1:NomContact1,
        PrénomContact1:PrénomContact1,
        TeleContact1:TeleContact1,

        NomContact2:NomContact2,
        PrénomContact2:PrénomContact2,
        TeleContact2:TeleContact2,
      }
      console.log(abonnement);
      var config1 = {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        };
      axios.post(config+'/BoussolePro-backend/insertAbonnement.php',abonnement,config1)
      .then(res=>console.log(res.data));

      if( PrénomContact1===''){
        setPrénomContact1Err("le champ est obligatoire !!")
      }

      if( PrénomContact2===''){
        setPrénomContact2Err("le champ est obligatoire !!")
      }

      if( NomContact1===''){
           setNomContact1Err("le champ est obligatoire !!")
      }

      if( NomContact2===''){
        setNomContact2Err("le champ est obligatoire !!")
      }

      if( TeleContact1===''){
         setTeleContact1Err("le champ est obligatoire !!")
      }

      if( TeleContact2===''){
        setTeleContact2Err("le champ est obligatoire !!")
      }

  if( PrénomContact1===''||PrénomContact2===''|| NomContact1===''||NomContact2===''||TeleContact1===''||TeleContact2==='' ){
    message.error('Vous devez remplir les champs obligatoires');
    }
    
    else{
      message.success('La demande est faite avec succès');
     
     setNomContact1Err("")
     setPrénomContact1Err("")
     setTeleContact1Err("")
      setNomContact2Err("")
      setPrénomContact2Err("")
      setTeleContact2Err("")
    }
  }
    return (
      <form  className="first" style={{padding: "14px",marginTop:"19px",backgroundColor:"white"}}>
      <Row>
      <Col span={24}>
          
             
            
                  <h4 >Un réseau de confiance et de qualité</h4>
                    <p class="top-info" >
                    Merci pour l’intérêt porté a FEA Boussole Pro. Afin de garantir un réseau de qualité à l’ensemble de ses abonnés nous demandons à chaque abonné de confirmer 2 recommandations.
                    Notre équipe va les contacter et une fois les recommandations validées nous vous informerons et mettrons à votre disposition le questionnaire sur les fondamentaux du networking. 
                    Pour rappel les critères de validation des recommandations sont les suivants : soit avoir travaillé dans la même entreprise (salarié ou entrepreneur), 
                    soit la même association soit enfin avoir voyagé avec elle durant une période supérieure a une semaine.
                    </p>
          
       
              
                    <Form.Item  >
         <div class="item">
             <label><b>Contacts 1ere recommandation</b><span class="required">*</span></label>
             <div class="name-item">
               <input  className="inputB" type="text" name="name" value={PrénomContact1} onChange={(e)=>setPrénomContact1(e.target.value)} placeholder="Prénom" required/>
               <input  className="inputB" type="text" name="name" value={NomContact1} onChange={(e)=>setNomContact1(e.target.value)}  placeholder="Nom" required/>
               <div className="col-md-6">
                        <spam><b style={{color: "red"}}>{PrénomContact1Err}</b></spam>
                    </div>
                    <div className="col-md-6">
                        <spam><b style={{color: "red"}}>{NomContact1Err}</b></spam>
                    </div>
             </div>
           </div>
         </Form.Item>       
            <div class="item">
            <label class="form-label form-label-left form-label-auto" id="label_6" for="input_6">
            <b> Téléphone de votre première recommandation</b><span class="form-required"> *</span></label>
              <div class="name-item">
              <Input type="tel" id="phone" name="phone" placeholder="Télé" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" value={TeleContact1} onChange={(e)=>setTeleContact1(e.target.value)}  required/>
              <spam><b style={{color: "red"}}>{TeleContact1Err}</b></spam>
               </div>
            </div>

            <Form.Item  >
         <div class="item">
             <label><b>Contacts 2nde recommandation</b><span class="required">*</span></label>
             <div class="name-item">
               <input  className="inputB" type="text" name="name"  value={PrénomContact2} onChange={(e)=>setPrénomContact2(e.target.value)} placeholder="Prénom" required/>
               <input  className="inputB" type="text" name="name"  value={NomContact2} onChange={(e)=>setNomContact2(e.target.value)}  placeholder="Nom" required/>
               <div className="col-md-6">
                        <spam><b style={{color: "red"}}>{PrénomContact2Err}</b></spam>
                    </div>
                    <div className="col-md-6">
                        <spam><b style={{color: "red"}}>{NomContact2Err}</b></spam>
                    </div>
             </div>
           </div>
         </Form.Item>      
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