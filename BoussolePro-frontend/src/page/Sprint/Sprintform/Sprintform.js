import React from 'react'
import axios from 'axios';
import './Sprintform.css';
import { useState } from 'react';
import { message, Button, Space,Radio } from 'antd';
import { config } from '../../../config';
export default function Sprintform() {
  const [Nom, setNom] = useState("");
  const [Prénom, setPrénom] = useState("");
  const [PrénomAbonné, setPrénomAbonné] = useState("");
  const [Rang, setRang] = useState("");
  const [PrénomExterieure, setPrénomExterieure] = useState("");
  const [RaisonSprint, setRaisonSprint] = useState("");
  const [Radioo, setRadioo] = useState("");
 const [AvecQui, setAvecQui] = useState("");

  const [Matin, setMatin] = useState(false);
  const [ApresMidi, setApresMidi] = useState(false);
  const [Soir, setSoir] = useState(false);
  const [Semaine, setSemaine] = useState(false);
  const [Weekend, setWeekend] = useState(false);

  

  console.log(Nom);
  console.log(Prénom);
  console.log(PrénomAbonné);
  console.log(Rang);
  console.log(PrénomExterieure);
  console.log(RaisonSprint);
 console.log(Radioo);
 console.log(AvecQui);

 console.log(Matin);
 console.log(ApresMidi);
 console.log(Soir);
 console.log(Semaine);
 console.log(Weekend);


 

  const handleFormSubmit=(e)=>{
    e.preventDefault();
    const Sprint={
      radio:Radioo,
      nom:Nom,
      prenom:Prénom,
      avecqui:AvecQui,
      prenomabonné:PrénomAbonné,
      rang:Rang,
      prenomexterieure:PrénomExterieure,
      raisonsprint:RaisonSprint,
      matin:Matin,
      apresmidi:ApresMidi,
      soir:Soir,
      semaine:Semaine,
      weekend:Weekend
    }
    console.log(Sprint);

if(Radioo=='' || Nom=='' || Prénom=='' || AvecQui=='' || RaisonSprint=='' ||(Matin=='' && ApresMidi=='' && Soir=='' && Semaine=='' && Weekend=='')){
  
    message.error('Vous devez remplir les champs obligatoires');
  
  }else{
    message.success('La demande est faite avec succès');
    axios.post(config+'/BoussolePro-backend/insertSprint.php',Sprint).then(res=>console.log(res.data));

    setNom('');
    setPrénom('');
    setAvecQui('');
    setPrénomAbonné('');
    setPrénomExterieure('');
    setRang('');
    setRaisonSprint('');
    setMatin('');
    setApresMidi('');
    setSoir('');
    setSemaine('');
    setWeekend('');
    setRadioo('');
    setAvecQui('');
  }
}

    return (
        
           <div>
	
	
    <div class="testbox">
      <form action="/" className="ss" >
        <div class="banner" >
          <h1>Sprint Pro 15mn</h1>
        </div>
        <p class="top-info" style={{color:"#171617"}}>L'équipe m'organise un créneau de 15 min avec un-e membre de FEA Boussole Pro ou non.</p>
        <div class="question">
          <p style={{color:"#171617"}}>Qui est-ce qui initie le Sprint Pro 15min ? <span class="required">*</span></p>
          <div class="question-answer">
            <div>
              <input className="inputB" type="radio" value="Moi en tant qu abonné"  checked={Radioo === "Moi en tant qu abonné"} onChange={(e)=>setRadioo(e.target.value)} id="radio_1"  required/>
              <label for="radio_1" class="radio"><span>Vous en tant qu'abonné(e)</span></label>
            </div>
            <div>
              <input className="inputB" type="radio" value="Equipe Orga Boussole PRO" checked={Radioo === "Equipe Orga Boussole PRO"}   onChange={(e)=>setRadioo(e.target.value)} id="radio_2"  required/>
              <label for="radio_2" class="radio"><span>Équipe Orga Boussole PRO</span></label>
            </div>
           
          </div>
        </div>
		<div class="item">
          <p style={{color:"#171617"}}>Votre Nom complet<span class="required">*</span></p>
          <div class="name-item">
            <input className="inputB" type="text"  value={Prénom} onChange={(e)=>setPrénom(e.target.value)} placeholder="Prénom" required/>
            <input className="inputB" type="text"  value={Nom } onChange={(e)=>setNom(e.target.value)} placeholder="Nom" required/>
          </div>
        
        </div>
		<div class="question">
          <p style={{color:"#171617"}}>Avec-qui souhaitez vous avoir le sprint PRO?<span class="required">*</span></p>
          <div class="question-answer">
           
            <Space direction="vertical"  >
          <Radio style={{color:"#666"}} value="Un-e abonné-e" checked={AvecQui === "Un-e abonné-e"}   onChange={(e)=>setAvecQui(e.target.value)}>Un-e abonné-e</Radio>
          <Radio style={{color:"#666"}}   value="Un-e membre de FEA" checked={AvecQui === "Un-e membre de FEA"}   onChange={(e)=>setAvecQui(e.target.value)} >Un-e membre de FEA</Radio>
          <Radio style={{color:"#666"}}   value="Un relais BP" checked={AvecQui === "Un relais BP"}   onChange={(e)=>setAvecQui(e.target.value)} >Un relais BP</Radio>
          <Radio style={{color:"#666"}}  value="Une personne extérieure à FEA" checked={AvecQui === "Une personne extérieure à FEA"}   onChange={(e)=>setAvecQui(e.target.value)} >Une personne extérieure à FEA</Radio>
        </Space>
          </div>
        </div>
        <div class="contact-item">
          <div class="item">
            <p style={{color:"#171617"}}>Dans le cas d’un abonné merci d’indiquer son prénom et son rang visible sur son profil sur l'appli</p>
            <input className="inputB" type="text"  value={PrénomAbonné} onChange={(e)=>setPrénomAbonné(e.target.value)} placeholder="Prénom de l'abonné" />
          </div>
        
          <div class="item">
            <p style={{color:"#171617",marginTop:"23px"}}>RANG (Ne rien mettre si APPLI non disponible encore)</p>
            <input className="inputB" type="text"  value={Rang} onChange={(e)=>setRang(e.target.value)} />
          </div>
          
        </div>
		<div class="item">
          <p style={{color:"#171617"}}>Dans le cas d’une personne extérieure merci d’indiquer son prénom et son numéro de téléphone</p>
          <div class="name-item">
            <input className="inputB" type="text"  value={PrénomExterieure} onChange={(e)=>setPrénomExterieure(e.target.value)} placeholder="Prénom de la personne exterieure" required/>
            
          </div>
          
        </div>
		<div class="item">
          <p style={{color:"#171617"}}>Pourquoi souhaitez-vous ce sprint Pro? <span class="required">*</span> </p>
          <div class="name-item">
            <input className="inputB" type="text"  value={RaisonSprint} onChange={(e)=>setRaisonSprint(e.target.value)}  required/>
            
          </div>
        </div>
        
		<div class="item status">
          <p style={{color:"#171617"}}>Quelles sont vos préférences pour les créneaux de 15min ? (Plusieurs choix)<span class="required">*</span></p>
          <div class="status-item">
            <label><input className="inputB" type="checkbox" checked={Matin} onChange={(e)=>setMatin(e.target.checked)} name="name"/> <span>Matin</span></label>
            <label><input className="inputB" type="checkbox" checked={ApresMidi} onChange={(e)=>setApresMidi(e.target.checked)} name="name"/> <span>Après-midi</span></label>
            <label><input className="inputB" type="checkbox" checked={Soir} onChange={(e)=>setSoir(e.target.checked)} name="name"/> <span>Soir</span></label>
		      	<label><input className="inputB" type="checkbox"  checked={Semaine} onChange={(e)=>setSemaine(e.target.checked)} name="name"/> <span>Semaine</span></label>
            <label><input className="inputB" type="checkbox" checked={Weekend} onChange={(e)=>setWeekend(e.target.checked)} name="name"/> <span>Weekend</span></label>

          </div>
        </div>
		<p class="top-info" style={{color:"#171617"}}>Notre équipe vous contactera sous un délai maximum de 48h pour lancer la procédure et le sondage autour de la date de votre prochain sprint pro :) </p>   
        <div class="btn-block">
          <button type="submit" href="/" onClick={handleFormSubmit}>SOUMETTRE</button>
        </div>
      </form>
    </div>
</div>
 
       
    )
}
