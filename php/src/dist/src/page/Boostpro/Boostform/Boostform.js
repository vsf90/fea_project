import React from 'react'
import './Boostform.css';

export default function Boostform() {
    return (
        
           <div>
	
	
    <div class="testbox">
      <form action="/">
        <div class="banner">
          <h1>Boost Pro</h1>
        </div>
        <h4 style={{marginTop:"5px"}}>Boost Pro</h4>
        <p class="top-info" style={{color:"#171617",marginBottom:"20px"}}>
Boussole Pro et tout le réseau FEA est là pour vous supporter à 200%. Après validation par l’équipe de votre demande nous créons un groupe Telegram de suivi dédié. Vous devez faire une vidéo de lancement inspirante qui pousse à l’action montrant toute la qualité de vos produits/services. Nous avons alors ensemble 2 semaines pour rythmer la communication. Dans certains cas vous devez faire une vidéo intermédiaire de mi-parcours pour rebooster la communauté. A la fin du cycle de 2 semaines il est impératif de faire une vidéo de clôture à destination des membres et remplir le certificat de remerciement 
a la communauté FEA qui sera partagé en guise de clôture du Boost Pro.</p>
        <div class="question">
          <p style={{color:"#171617"}}>Êtes-vous bien abonné(e) de Boussole PRO ? (Ce service est réservé exclusivement aux abonné(e)s)  <span class="required">*</span></p>
          <div class="question-answer">
            <div>
              <input type="radio" value="none" id="radio_1" name="status" required/>
              <label for="radio_1" class="radio"><span>OUI</span></label>
            </div>
            <div>
              <input type="radio" value="none" id="radio_2" name="status" required/>
              <label for="radio_2" class="radio"><span>NON</span></label>
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
      	<div class="item">
          <p style={{color:"#171617"}}>Votre entreprise <span class="required">*</span> </p>
          <div class="name-item">
            <input type="text" name="name"  required/>
            
          </div>
        </div>
        <div class="item">
          <p style={{color:"#171617"}}>Votre secteur d'activité <span class="required">*</span> </p>
          <div class="name-item">
            <input type="text" name="name"  required/>
            
          </div>
        </div>
        <div class="item">
          <p style={{color:"#171617"}}>Qui sera notre contact pour toute demande de support concernant la campagne? <span class="required">*</span> </p>
          <div class="name-item">
          <textarea id="story" name="story" rows="5" cols="33">Ecrivez ici...</textarea>            
          </div>
        </div>
        <div class="question">
          <p style={{color:"#171617"}}>Quel type de campagne souhaitez-vous lancer?</p>
          <div class="question-answer">
            <div>
              <input type="radio" value="none" id="radio_1" name="status" required/>
              <label for="radio_1" class="radio"><span>Développer les ventes de mes produits et services</span></label>
            </div>
            <div>
              <input type="radio" value="none" id="radio_2" name="status" required/>
              <label for="radio_2" class="radio"><span>Autre</span></label>
            </div>
           
          </div>
        </div>
        <div class="item">
          <p style={{color:"#171617"}}>Quel est l'objet de la campagne et en quoi est-ce important pour vous ? <span class="required">*</span> </p>
          <div class="name-item">
          <textarea id="story" name="story" rows="5" cols="33">Ecrivez ici...</textarea>            
          </div>
        </div>
        <p class="top-info" style={{color:"#171617"}}> <span style={{fontWeight:"bold"}}>Boussole Pro </span>s'est fixé pour mission de construire <span style={{fontWeight:"bold"}}> un réseau professionnel de qualité </span> pour la communauté, ce qui demande un engagement et une énergie importante engagée voilà plusieurs années. <span style={{fontWeight:"bold"}}>Boussole Pro </span> souhaite la réussite de tous <span style={{fontWeight:"bold"}}>ses abonné-e-s entrepreneur-e-s </span>. Étant entrepreneurs nous mêmes par définition nous comprenons toutes les difficultés qui jalonnent le chemin de la réussite in shaa Allah. Pour cette raison vous avez libre choix de commissionner Boussole Pro en fonction de vos contraintes que seuls vous connaissez. Boussole Pro est là pour vous faciliter et non vous alourdir

<br/>Boussole Pro<br/>

Toujours plus Haut </p>   
		
       
		<div class="item">
          <p style={{color:"#171617"}}>Souhaitez-vous donner un pourcentage ou un montant à Boussole Pro? Si oui, lequel?</p>
          <div class="name-item">
            <input type="text" name="name" placeholder="Pour soutenir le développement de notre structure" required/>
            
          </div>
        </div>
		<div class="item">
          <p style={{color:"#171617"}}>Tout commentaire est le bienvenue si vous en avez </p>
          <div class="name-item">
          <textarea id="story" name="story" rows="5" cols="33">Ecrivez ici...</textarea>              
          </div>
        </div>
        
	
		
        <div class="btn-block">
          <button type="submit" href="/">SOUMETTRE</button>
        </div>
      </form>
    </div>
</div>
 
       
    )
}
