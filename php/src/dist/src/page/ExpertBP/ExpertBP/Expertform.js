import React from 'react'
import axios from 'axios';
import './Expertform.css';
import { useState } from 'react';
import { message, Button, Space,Radio,Input } from 'antd';
import { config } from '../../../config';
export default function Expertform() {
 
  const [Radioo, setRadioo] = useState("");
  const [Nom, setNom] = useState("");
  const [Prénom, setPrénom] = useState("");
  const [AvecQui, setAvecQui] = useState("");
  const [Objet, setObjet] = useState("");
  
  const [Matin, setMatin] = useState(false);
  const [ApresMidi, setApresMidi] = useState(false);
  const [Soir, setSoir] = useState(false);
  const [Semaine, setSemaine] = useState(false);
  const [Weekend, setWeekend] = useState(false);

  
  console.log(Radioo);
  console.log(Nom);
  console.log(Prénom);
  console.log(AvecQui);
  console.log(Objet);

 console.log(Matin);
 console.log(ApresMidi);
 console.log(Soir);
 console.log(Semaine);
 console.log(Weekend);


 

  const handleFormSubmit=(e)=>{
    e.preventDefault();
    const Expert={
      radio:Radioo,
      nom:Nom,
      prenom:Prénom,
      avecqui:AvecQui,
      objet: Objet,
      matin:Matin,
      apresmidi:ApresMidi,
      soir:Soir,
      semaine:Semaine,
     weekend:Weekend
    }
    console.log(Expert);

   
if(Nom=='' || Prénom=='' || Radio=='' || AvecQui=='' || Objet=='' ||(Matin=='' && ApresMidi=='' && Soir=='' && Semaine=='' && Weekend=='')){
  
    message.error('Vous devez remplir les champs obligatoires');
  
  }else{
    message.success('La demande est faite avec succès');
    axios.post(config+'/BoussolePro-backend/insertExpert.php',Expert).then(res=>console.log(res.data));

    setRadioo('');
    setNom('');
    setPrénom('');
    setAvecQui('');
    setObjet('');
    setMatin('');
    setApresMidi('');
    setSoir('');
    setSemaine('');
    setWeekend('');
  
  }
}
    return (
        
           <div>
	
	
    <div class="testbox">
      <form action="/" className="ss">
        <div class="expert">
          <h1>Expert BP</h1>
        </div>
        <p class="top-info" style={{color:"#171617"}}>L'équipe m'organise un créneau de 15 min avec un expert BP.</p>
        <div class="question">
          <p style={{color:"#171617"}}>Qui est-ce qui initie le Sprint Pro 15min ? <span class="required">*</span></p>
          <div class="question-answer">
            <div>
              <input className="inputB" type="radio" value="Moi en tant qu abonné(e)"  checked={Radioo === "Moi en tant qu abonné(e)"} onChange={(e)=>setRadioo(e.target.value)} id="radio_1" name="status" required/>
              <label for="radio_1" class="radio"><span>Vous en tant qu'abonné(e)</span></label>
            </div>
            <div>
              <input className="inputB" type="radio" value="Equipe Orga Boussole PRO" checked={Radioo === "Equipe Orga Boussole PRO"}   onChange={(e)=>setRadioo(e.target.value)} id="radio_2" name="status" required/>
              <label for="radio_2" class="radio"><span>Équipe Orga Boussole PRO</span></label>
            </div>
           
          </div>
        </div>
		<div class="item">
          <p style={{color:"#171617"}}>Votre Nom complet<span class="required">*</span></p>
          <div class="name-item">
            <input className="inputB" type="text" name="name" value={Prénom} onChange={(e)=>setPrénom(e.target.value)} placeholder="Prénom" required/>
            <input className="inputB" type="text" name="name" value={Nom} onChange={(e)=>setNom(e.target.value)} placeholder="Nom" required/>
          </div>
        </div>
		<div class="question">
          <p style={{color:"#171617"}}>Avec-qui souhaitez vous avoir le sprint PRO?<span class="required">*</span></p>
          <div class="question-answer">
          <Input className="input" type="text" name="name" value={AvecQui} onChange={(e)=>setAvecQui(e.target.value)}  required/>

           
           
          </div>
        </div>
      
		<div class="item">
          <p style={{color:"#171617"}}>Objet de la demande <span class="required">*</span> </p>
          <div class="name-item">
           
            <textarea id="story" name="story" 
          rows="5" cols="33" value={Objet} onChange={(e)=>setObjet(e.target.value)} >
          Ecrivez ici...
          </textarea>
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
