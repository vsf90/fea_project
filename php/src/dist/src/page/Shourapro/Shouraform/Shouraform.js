import React from 'react'
import './Shouraform.css';

export default function Shouraform() {
    return (
        
           <div>
	
	
    <div class="testbox">
      <form action="/">
        <div class="shoura">
          <h1>FEA Shoura Pro de 1h</h1>
        </div>
        <p class="top-info" style={{color:"#171617"}}>L'équipe m'organise un FEA Shoura Pro de 1h.</p>
        <div class="question">
          <p style={{color:"#171617"}}>Qui est-ce qui initie le Shoura pro ? <span class="required">*</span></p>
          <div class="question-answer">
            <div>
              <input type="radio" value="none" id="radio_1" name="status" required/>
              <label for="radio_1" class="radio"><span>Vous en tant qu'abonné(e)</span></label>
            </div>
            <div>
              <input type="radio" value="none" id="radio_2" name="status" required/>
              <label for="radio_2" class="radio"><span>Équipe Orga Boussole PRO</span></label>
            </div>
           
          </div>
        </div>
		<div class="item">
          <p style={{color:"#171617"}}>Votre Nom complet<span class="required">*</span></p>
          <div class="name-item">
            <input type="text" name="name" placeholder="Prénom" required/>
            <input type="text" name="name" placeholder="Nom" required/>
          </div>
        </div>
		<div class="question">
          <p style={{color:"#171617"}}>Avec-qui souhaitez vous avoir le FEA Shoura PRO?<span class="required">*</span></p>
          <div class="question-answer">
            <div>
              <input type="radio" value="none" id="radio_1" name="status" required/>
              <label for="radio_1" class="radio"><span>Un-e abonné-e</span></label>
            </div>
            <div>
              <input type="radio" value="none" id="radio_2" name="status" required/>
              <label for="radio_2" class="radio"><span>Un-e membre de FEA</span></label>
            </div>
            <div>
              <input type="radio" value="none" id="radio_4" name="status" required/>
              <label for="radio_4" class="radio"><span>Une personne extérieure à FEA</span></label>
            </div>
          </div>
        </div>
       
		<div class="item">
          <p style={{color:"#171617"}}>Quelle est votre problématique? <span class="required">*</span> </p>
          <div class="name-item">
          <textarea id="story" name="story" rows="5" cols="33">Contexte, objectif, projet professionnel, problèmes rencontrés</textarea>            
          </div>
        </div>
        <div class="item">
          <p style={{color:"#171617"}}>Quels sont les domaines des experts/consultants souhaités? <span class="required">*</span> </p>
          <div class="name-item">
          <textarea id="story" name="story" rows="5" cols="33">Exemple : Finance, marketing, design, IT,.....</textarea>            
          </div>
        </div>
		
        
		<div class="item status">
          <p style={{color:"#171617"}}>Quelles sont vos préférences pour les créneaux de 15min ? (Plusieurs choix)<span class="required">*</span></p>
          <div class="status-item">
            <label><input type="checkbox" name="name"/> <span>Matin</span></label>
            <label><input type="checkbox" name="name"/> <span>Après-midi</span></label>
            <label><input type="checkbox" name="name"/> <span>Soir</span></label>
			<label><input type="checkbox" name="name"/> <span>Semaine</span></label>
            <label><input type="checkbox" name="name"/> <span>Weekend</span></label>

          </div>
        </div>
		<p class="top-info" style={{color:"#171617"}}>Notre équipe vous contactera sous un délai maximum de 72h pour vous proposer un Shoura Pro. </p>   
        <div class="btn-block">
          <button type="submit" href="/">SOUMETTRE</button>
        </div>
      </form>
    </div>
</div>
 
       
    )
}
