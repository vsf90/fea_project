import React from 'react'
import './Meetform.css';
import { useState } from 'react';
import { message, Button, Space } from 'antd';

  


export default function Meetform() {
  const [Nom, setNom] = useState("");
  const [Prénom, setPrénom] = useState("");
  const [Radio, setRadio] = useState("");
  const [PrénomMeet, setPrénomMeet] = useState("");
  const [NomMeet, setNomMeet] = useState("");
  const [Raison, setRaison] = useState("");
  const [Info, setInfo] = useState("");
 
  
  console.log(Nom);
  console.log(Prénom);
  console.log(Radio);
  console.log(PrénomMeet);
  console.log(NomMeet);

  console.log(Raison);
  console.log(Info);
 


  const handleFormSubmit=(e)=>{
    e.preventDefault();
    const Meet={
      Nom,
      Prénom,
      Radio,
      PrénomMeet,
      NomMeet,
      Raison,
      Info
    }
    console.log(Meet);
   
if(Nom=='' || Prénom=='' || Radio=='' || PrénomMeet=='' || NomMeet=='' || Raison=='' ||Info==''){
  
    message.error('Vous devez remplir les champs obligatoires');
  
  }else{
    message.success('La demande est faite avec succès');
    setNom('');
    setPrénom('');
    setRadio('');
    setPrénomMeet('');
    setNomMeet('');
    setRaison('');
    setInfo('');
  
    
  }
  }

    return (
        
           <div>
	
	
    <div class="testbox">
      <form action="/" className="ss">
        <div class="meet">
          <h1>FEA Meet Up Pro de 1h30</h1>
        </div>
        <p class="top-info" style={{color:"#171617"}}>L'équipe m'organise un créneau de 1h30mn avec un-e membre de FEA Boussole Pro ou non.</p>
      
		<div class="item">
          <p style={{color:"#171617"}}>Votre Nom complet<span class="required">*</span></p>
          <div class="name-item">
            <input className="inputB" type="text" name="name" value={Prénom} onChange={(e)=>setPrénom(e.target.value)}placeholder="Prénom" required/>
            <input className="inputB" type="text" name="name" value={Nom} onChange={(e)=>setNom(e.target.value)} placeholder="Nom" required/>
          </div>
        </div>
		<div class="question">
          <p style={{color:"#171617"}}>Avec-qui souhaitez vous avoir le sprint PRO?<span class="required">*</span></p>
          <div class="question-answer">
            <div>
              <input className="inputB" type="radio" value="Abonné"  checked={Radio === "Abonné"} onChange={(e)=>setRadio(e.target.value)} id="radio_1" name="status" required/>
              <label for="radio_1" class="radio"><span>Un-e abonné-e</span></label>
            </div>
            <div>
              <input className="inputB" type="radio" value="Fea"  checked={Radio === "Fea"} onChange={(e)=>setRadio(e.target.value)} id="radio_2" name="status" required/>
              <label for="radio_2" class="radio"><span>Un-e membre de FEA</span></label>
            </div>
            <div>
              <input className="inputB" type="radio" value="Relais"  checked={Radio === "Relais"} onChange={(e)=>setRadio(e.target.value)} id="radio_3" name="status" required/>
              <label for="radio_3" class="radio"><span>Un relais BP</span></label>
            </div>
            <div>
              <input className="inputB" type="radio" value="Exterieure"  checked={Radio === "Exterieure"} onChange={(e)=>setRadio(e.target.value)} id="radio_4" name="status" required/>
              <label for="radio_4" class="radio"><span>Une personne extérieure à FEA</span></label>
            </div>
          </div>
        </div>
        <div class="item">
          <p style={{color:"#171617"}}>Nom complet du contact souhaité (Si plusieurs, merci de les mentionner)</p>
          <div class="name-item">
            <input  className="inputB" type="text" name="name" value={PrénomMeet} onChange={(e)=>setPrénomMeet(e.target.value)} placeholder="Prénom" required/>
            <input className="inputB" type="text" name="name" value={NomMeet} onChange={(e)=>setNomMeet(e.target.value)} placeholder="Nom" required/>
          </div>
        </div>
        
          <div class="item">
            <p style={{color:"#171617"}}>Quelle est la raison professionnelle de ce meet'up pro? <span class="required">*</span></p>
            <div class="name-item">
            <textarea id="story" name="story" value={Raison} onChange={(e)=>setRaison(e.target.value)}
          rows="5" cols="33">
          Ecrivez ici...
          </textarea>
            
          </div>          </div>
        
       
		<div class="item">
          <p style={{color:"#171617"}}>Autres infos utiles (Date de dispo, ville, et toute information utile) </p>
          <div class="name-item">
            <textarea id="story" name="story" value={Info} onChange={(e)=>setInfo(e.target.value)}
          rows="5" cols="33">
           Ecrivez ici...
          </textarea>
                      
          </div>
        </div>
        
	
		<p class="top-info" style={{color:"#171617"}}>Notre équipe vous contactera sous un délai maximum de 72h pour vous organiser le Meet Up Pro. </p>   
        <div class="btn-block">
          <button type="submit" href="/" onClick={handleFormSubmit}>SOUMETTRE</button>
        </div>
      </form>
    </div>
</div>
 
       
    )
}

