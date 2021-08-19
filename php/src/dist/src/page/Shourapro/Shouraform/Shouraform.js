import React from 'react'
import axios from 'axios';
import './Shouraform.css';
import { useState } from 'react';
import { message, Button, Space,Radio } from 'antd';

 
export default function Sprintform() {
  const [Radioo, setRadioo] = useState("");

  const [Nom, setNom] = useState("");
  const [Prénom, setPrénom] = useState("");
  const [AvecQui, setAvecQui] = useState("");
  const [Problematique, setProblematique] = useState("");
  const [Domaines, setDomaines] = useState("");
 
  const [Matin, setMatin] = useState(false);
  const [ApresMidi, setApresMidi] = useState(false);
  const [Soir, setSoir] = useState(false);
  const [Semaine, setSemaine] = useState(false);
  const [Weekend, setWeekend] = useState(false);

  console.log(Radioo);
  console.log(Nom);
  console.log(Prénom);
  console.log(AvecQui);
  console.log(Problematique);
  console.log(Domaines);
  
 console.log(Matin);
 console.log(ApresMidi);
 console.log(Soir);
 console.log(Semaine);
 console.log(Weekend);


 

  const handleFormSubmit=(e)=>{
    e.preventDefault();
    const Shoura={
      radio:Radioo,
      nom: Nom,
      prenom:Prénom,
      avecqui:AvecQui,
      problematique:Problematique,
      domaines:Domaines,
      matin:Matin,
      apresmidi:ApresMidi,
      soir:Soir,
      semaine:Semaine,
      weekend:Weekend
    }
    console.log(Shoura);

if(Nom=='' || Prénom=='' || AvecQui=='' || Problematique=='' || Domaines=='' || Radioo=='' ||(Matin=='' && ApresMidi=='' && Soir=='' && Semaine=='' && Weekend=='')){
  
    message.error('Vous devez remplir les champs obligatoires');
  
  }else{
    message.success('La demande est faite avec succès');
    axios.post('http://localhost:8080/BoussolePro-backend/insertShoura.php',Shoura).then(res=>console.log(res.data));

    setRadioo('');
    setNom('');
    setPrénom('');
    setAvecQui('');
    setProblematique('');
    setDomaines('');
   
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
        <div class="shoura">
          <h1>FEA Shoura Pro de 1h</h1>
        </div>
        <p class="top-info" style={{color:"#171617"}}>L'équipe m'organise un FEA Shoura Pro de 1h.</p>
        <div class="question">
          <p style={{color:"#171617"}}>Qui est-ce qui initie le Shoura pro ? <span class="required">*</span></p>
          <div class="question-answer">
            <div>
              <input className="inputB" type="radio" value="Moi en tant qu abonné(e)"  checked={Radioo === "Moi en tant qu abonné(e)"} onChange={(e)=>setRadioo(e.target.value)} id="radio_1" name="status" required/>
              <label for="radio_1" class="radio"><span>Vous en tant qu'abonné(e)</span></label>
            </div>
            <div>
              <input className="inputB" type="radio" value="Equipe Orga Boussole PRO"  checked={Radioo === "Équipe Orga Boussole PRO"} onChange={(e)=>setRadioo(e.target.value)} id="radio_2" name="status" required/>
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
          <p style={{color:"#171617"}}>Avec-qui souhaitez vous avoir le FEA Shoura PRO?<span class="required">*</span></p>
          <div class="question-answer">
          <Space direction="vertical"  >
          <Radio style={{color:"#666"}} value="Un-e abonné-e" checked={AvecQui === "Un-e abonné-e"}   onChange={(e)=>setAvecQui(e.target.value)}>Un-e abonné-e</Radio>
          <Radio style={{color:"#666"}}   value="Un-e membre de FEA" checked={AvecQui === "Un-e membre de FEA"}   onChange={(e)=>setAvecQui(e.target.value)} >Un-e membre de FEA</Radio>
          <Radio style={{color:"#666"}}   value="Un relais BP" checked={AvecQui === "Un relais BP"}   onChange={(e)=>setAvecQui(e.target.value)} >Un relais BP</Radio>
          <Radio style={{color:"#666"}}  value="Une personne extérieure à FEA" checked={AvecQui === "Une personne extérieure à FEA"}   onChange={(e)=>setAvecQui(e.target.value)} >Une personne extérieure à FEA</Radio>
        </Space>
          </div>
        </div>
       
		<div class="item">
          <p style={{color:"#171617"}}>Quelle est votre problématique? <span class="required">*</span> </p>
          <div class="name-item">
          <textarea id="story" name="story" value={Problematique} onChange={(e)=>setProblematique(e.target.value)} rows="5" cols="33">Contexte, objectif, projet professionnel, problèmes rencontrés</textarea>            
          </div>
        </div>
        <div class="item">
          <p style={{color:"#171617"}}>Quels sont les domaines des experts/consultants souhaités? <span class="required">*</span> </p>
          <div class="name-item">
          <textarea id="story" name="story" value={Domaines} onChange={(e)=>setDomaines(e.target.value)} rows="5" cols="33">Exemple : Finance, marketing, design, IT,.....</textarea>            
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
		<p class="top-info" style={{color:"#171617"}}>Notre équipe vous contactera sous un délai maximum de 72h pour vous proposer un Shoura Pro. </p>   
        <div class="btn-block">
          <button type="submit" href="/" onClick={handleFormSubmit}>SOUMETTRE</button>
        </div>
      </form>
    </div>
</div>
 
       
    )
}
