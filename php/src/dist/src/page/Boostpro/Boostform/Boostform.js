import React from 'react'
import axios from 'axios';
import './Boostform.css';
import { useState } from 'react';
import { message, Button, Space, Input,Radio } from 'antd';
  

export default function Boostform() {
  const [Radioo, setRadioo] = useState("");
  const [Radioo1, setRadioo1] = useState("");

  const [Nom, setNom] = useState("");
  const [Prénom, setPrénom] = useState("");
  const [Entreprise, setEntreprise] = useState("");
  const [Contact, setContact] = useState("");
  const [Secteur, setSecteur] = useState("");
  const [Objectif, setObjectif] = useState("");
  const [Montant, setMontant] = useState("");
  const [Commentaire, setCommentaire] = useState("");


  console.log(Radioo);
  console.log(Nom);
  console.log(Prénom);
  console.log(Entreprise);
  console.log(Contact);
  console.log(Radioo1);
  console.log(Secteur);
  console.log(Objectif);
  console.log(Montant);
  console.log(Commentaire);

  const handleFormSubmit=(e)=>{
    e.preventDefault();
    const Boost={
      radio:Radioo,
      nom:Nom,
      prenom:Prénom,
      entreprise:Entreprise,
      secteur:Secteur,
     contact: Contact,
      radio1:Radioo1,
      objetif:Objectif,
      montant:Montant,
      commentaire:Commentaire
    }
    console.log(Boost);

if(Nom=='' || Prénom=='' || Radioo=='' || Entreprise=='' || Contact=='' || Radioo1=='' || Secteur=='' || Objectif==''  ){
  
    message.error('Vous devez remplir les champs obligatoires');
  
  }else{
    message.success('La demande est faite avec succès');
    axios.post('http://localhost/BoussolePro-backend/insertBoost.php',Boost).then(res=>console.log(res.data));

    setRadioo('');
    setNom('');
    setPrénom('');
    setEntreprise('');
    setContact('');
    setRadioo1('');
    setSecteur('');
    setObjectif('');
    setMontant('');
    setCommentaire('');
    
  }
}
    return (
        
           <div>

    <div class="testbox">
      <form action="/" className="ss">
        <div class="boost">
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
              <input className="inputB" type="radio" value="OUI"  checked={Radioo === "OUI"} onChange={(e)=>setRadioo(e.target.value)} id="radio_1" name="status" required/>
              <label for="radio_1" class="radio"><span>OUI</span></label>
            </div>
            <div>
              <input className="inputB" type="radio" value="NON"  checked={Radioo === "NON"} onChange={(e)=>setRadioo(e.target.value)} id="radio_2" name="status" required/>
              <label for="radio_2" class="radio"><span>NON</span></label>
            </div>
           
          </div>
        </div>
		<div class="item">
          <p style={{color:"#171617"}}>Votre Nom complet<span class="required">*</span></p>
          <div class="name-item">
            <input className="inputB" type="text" name="name" value={Prénom} onChange={(e)=>setPrénom(e.target.value)} placeholder="Prénom" required/>
            <input className="inputB"  type="text" name="name" value={Nom } onChange={(e)=>setNom(e.target.value)} placeholder="Nom" required/>
          </div>
        </div>
      	<div class="item">
          <p style={{color:"#171617"}}>Votre entreprise <span class="required">*</span> </p>
          <div class="name-item">
            <input  className="inputB" type="text" name="name" value={Entreprise} onChange={(e)=>setEntreprise(e.target.value)}  required/>
            
          </div>
        </div>
        <div class="item">
          <p style={{color:"#171617"}}>Votre secteur d'activité <span class="required">*</span> </p>
          <div class="name-item">
            <input className="inputB" type="text" name="name" value={Secteur} onChange={(e)=>setSecteur(e.target.value)}  required/>
            
          </div>
        </div>
        <div class="item">
          <p style={{color:"#171617"}}>Qui sera notre contact pour toute demande de support concernant la campagne? <span class="required">*</span> </p>
          <div class="name-item">
          <textarea id="story" name="story" value={Contact} onChange={(e)=>setContact(e.target.value)} rows="5" cols="33">Ecrivez ici...</textarea>            
          </div>
        </div>
        <div class="question">
          <p style={{color:"#171617"}}>Quel type de campagne souhaitez-vous lancer?</p>
          <div class="question-answer">
            
            <Space direction="vertical"  >
          <Radio style={{color:"#666"}} value="Développer les ventes de mes produits et services"  checked={Radioo1 === "Développer les ventes de mes produits et services"} onChange={(e)=>setRadioo1(e.target.value)}>Développer les ventes de mes produits et services</Radio>
          <Radio style={{color:"#666"}} value="Autre"  checked={Radioo1 === "Autre"} onChange={(e)=>setRadioo1(e.target.value)} >Autre</Radio>
        </Space>
           
          </div>
        </div>
        <div class="item">
          <p style={{color:"#171617"}}>Quel est l'objet de la campagne et en quoi est-ce important pour vous ? <span class="required">*</span> </p>
          <div class="name-item">
          <textarea id="story" name="story"  value={Objectif} onChange={(e)=>setObjectif(e.target.value)} rows="5" cols="33">Ecrivez ici...</textarea>            
          </div>
        </div>
        <p class="top-info" style={{color:"#171617"}}> <span style={{fontWeight:"bold"}}>Boussole Pro </span>s'est fixé pour mission de construire <span style={{fontWeight:"bold"}}> un réseau professionnel de qualité </span> pour la communauté, ce qui demande un engagement et une énergie importante engagée voilà plusieurs années. <span style={{fontWeight:"bold"}}>Boussole Pro </span> souhaite la réussite de tous <span style={{fontWeight:"bold"}}>ses abonné-e-s entrepreneur-e-s </span>. Étant entrepreneurs nous mêmes par définition nous comprenons toutes les difficultés qui jalonnent le chemin de la réussite in shaa Allah. Pour cette raison vous avez libre choix de commissionner Boussole Pro en fonction de vos contraintes que seuls vous connaissez. Boussole Pro est là pour vous faciliter et non vous alourdir

<br/>Boussole Pro<br/>

Toujours plus Haut </p>   
		
       
		<div class="item">
          <p style={{color:"#171617"}}>Souhaitez-vous donner un pourcentage ou un montant à Boussole Pro? Si oui, lequel?</p>
          <div class="name-item">
            <input className="inputB" type="text" name="name" value={Montant} onChange={(e)=>setMontant(e.target.value)}  placeholder="Pour soutenir le développement de notre structure" required/>
            
          </div>
        </div>
		<div class="item">
          <p style={{color:"#171617"}}>Tout commentaire est le bienvenue si vous en avez </p>
          <div class="name-item">
          <textarea id="story" name="story" value={Commentaire} onChange={(e)=>setCommentaire(e.target.value)} rows="5" cols="33">Ecrivez ici...</textarea>              
          </div>
        </div>
        
	
		
        <div class="btn-block">
          <button type="submit" href="/" onClick={handleFormSubmit}>SOUMETTRE</button>
        </div>
      </form>
    </div>
</div>
 
       
    )
}
