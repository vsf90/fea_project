import React from 'react'
import './Expertform.css';

export default function Expertform() {
    return (
        
           <div>
	
	
    <div class="testbox">
      <form action="/" className="ss">
        <div class="expert">
          <h1>Expert BP</h1>
        </div>
        <p class="top-info" style={{color:"#171617"}}>L'équipe m'organise un créneau de 15 min avec un-e membre de FEA Boussole Pro ou non.</p>
        <div class="question">
          <p style={{color:"#171617"}}>Qui est-ce qui initie le Sprint Pro 15min ? <span class="required">*</span></p>
          <div class="question-answer">
            <div>
              <input className="inputB" type="radio" value="none" id="radio_1" name="status" required/>
              <label for="radio_1" class="radio"><span>Vous en tant qu'abonné(e)</span></label>
            </div>
            <div>
              <input className="inputB" type="radio" value="none" id="radio_2" name="status" required/>
              <label for="radio_2" class="radio"><span>Équipe Orga Boussole PRO</span></label>
            </div>
           
          </div>
        </div>
		<div class="item">
          <p style={{color:"#171617"}}>Votre Nom complet<span class="required">*</span></p>
          <div class="name-item">
            <input className="inputB" type="text" name="name" placeholder="Prénom" required/>
            <input className="inputB" type="text" name="name" placeholder="Nom" required/>
          </div>
        </div>
		<div class="question">
          <p style={{color:"#171617"}}>Avec-qui souhaitez vous avoir le sprint PRO?<span class="required">*</span></p>
          <div class="question-answer">
            <div>
              <input className="inputB" type="radio" value="none" id="radio_1" name="status" required/>
              <label for="radio_1" class="radio"><span>Un-e abonné-e</span></label>
            </div>
            <div>
              <input className="inputB" type="radio" value="none" id="radio_2" name="status" required/>
              <label for="radio_2" class="radio"><span>Un-e membre de FEA</span></label>
            </div>
            <div>
              <input className="inputB" type="radio" value="none" id="radio_3" name="status" required/>
              <label for="radio_3" class="radio"><span>Un relais BP</span></label>
            </div>
            <div>
              <input className="inputB" type="radio" value="none" id="radio_4" name="status" required/>
              <label for="radio_4" class="radio"><span>Une personne extérieure à FEA</span></label>
            </div>
          </div>
        </div>
        <div class="contact-item">
          <div class="item">
            <p style={{color:"#171617"}}>Dans le cas d’un abonné merci d’indiquer son prénom et son rang visible sur son profil sur l'appli</p>
            <input className="inputB" type="text" name="name" placeholder="Prénom" />
          </div>
          <div class="item">
            <p style={{color:"#171617",marginTop:"23px"}}>RANG (Ne rien mettre si APPLI non disponible encore)</p>
            <input className="inputB" type="text" name="name" />
          </div>
        </div>
		<div class="item">
          <p style={{color:"#171617"}}>Dans le cas d’une personne extérieure merci d’indiquer son prénom et son numéro de téléphone</p>
          <div class="name-item">
            <input className="inputB" type="text" name="name" placeholder="Prénom" required/>
            
          </div>
        </div>
		<div class="item">
          <p style={{color:"#171617"}}>Pourquoi souhaitez-vous ce sprint Pro? </p>
          <div class="name-item">
            <input className="inputB" type="text" name="name" placeholder="Prénom" required/>
            
          </div>
        </div>
        
		<div class="item status">
          <p style={{color:"#171617"}}>Quelles sont vos préférences pour les créneaux de 15min ? (Plusieurs choix)<span class="required">*</span></p>
          <div class="status-item">
            <label><input className="inputB" type="checkbox" name="name"/> <span>Matin</span></label>
            <label><input className="inputB" type="checkbox" name="name"/> <span>Après-midi</span></label>
            <label><input className="inputB" type="checkbox" name="name"/> <span>Soir</span></label>
			<label><input className="inputB" type="checkbox" name="name"/> <span>Semaine</span></label>
            <label><input className="inputB" type="checkbox" name="name"/> <span>Weekend</span></label>

          </div>
        </div>
		<p class="top-info" style={{color:"#171617"}}>Notre équipe vous contactera sous un délai maximum de 48h pour lancer la procédure et le sondage autour de la date de votre prochain sprint pro :) </p>   
        <div class="btn-block">
          <button type="submit" href="/">SOUMETTRE</button>
        </div>
      </form>
    </div>
</div>
 
       
    )
}
