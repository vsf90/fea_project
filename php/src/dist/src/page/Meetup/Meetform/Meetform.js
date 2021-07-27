import React from 'react'
import './Meetform.css';

export default function Meetform() {
    return (
        
           <div>
	
	
    <div class="testbox">
      <form action="/">
        <div class="banner">
          <h1>FEA Meet Up Pro de 1h30</h1>
        </div>
        <p class="top-info" style={{color:"#171617"}}>L'équipe m'organise un créneau de 1h30mn avec un-e membre de FEA Boussole Pro ou non.</p>
      
		<div class="item">
          <p style={{color:"#171617"}}>Votre Nom complet<span class="required">*</span></p>
          <div class="name-item">
            <input type="text" name="name" placeholder="Prénom" required/>
            <input type="text" name="name" placeholder="Nom" required/>
          </div>
        </div>
		<div class="question">
          <p style={{color:"#171617"}}>Avec-qui souhaitez vous avoir le sprint PRO?<span class="required">*</span></p>
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
              <input type="radio" value="none" id="radio_3" name="status" required/>
              <label for="radio_3" class="radio"><span>Un relais BP</span></label>
            </div>
            <div>
              <input type="radio" value="none" id="radio_4" name="status" required/>
              <label for="radio_4" class="radio"><span>Une personne extérieure à FEA</span></label>
            </div>
          </div>
        </div>
        <div class="item">
          <p style={{color:"#171617"}}>Nom complet du contact souhaité (Si plusieurs, merci de les mentionner)</p>
          <div class="name-item">
            <input type="text" name="name" placeholder="Prénom" required/>
            <input type="text" name="name" placeholder="Nom" required/>
          </div>
        </div>
        
          <div class="item">
            <p style={{color:"#171617"}}>Quelle est la raison professionnelle de ce meet'up pro? <span class="required">*</span></p>
            <div class="name-item">
            <textarea id="story" name="story"
          rows="5" cols="33">
          Ecrivez ici...
          </textarea>
            
          </div>          </div>
        
       
		<div class="item">
          <p style={{color:"#171617"}}>Autres infos utiles (Date de dispo, ville, et toute information utile) </p>
          <div class="name-item">
            <textarea id="story" name="story"
          rows="5" cols="33">
           Ecrivez ici...
          </textarea>
                      
          </div>
        </div>
        
	
		<p class="top-info" style={{color:"#171617"}}>Notre équipe vous contactera sous un délai maximum de 72h pour vous organiser le Meet Up Pro. </p>   
        <div class="btn-block">
          <button type="submit" href="/">SOUMETTRE</button>
        </div>
      </form>
    </div>
</div>
 
       
    )
}
