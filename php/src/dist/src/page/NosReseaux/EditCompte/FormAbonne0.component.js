import React from 'react';
import { useState } from 'react';

import { Form, Input,Checkbox, Alert, Button,  Radio, Space , Row, Col,message  } from 'antd';
import axios from 'axios';
function FormAbonne0() {
    const [Nom, setNom] = useState("");
    const [Prénom, setPrénom] = useState("");
    const [telephone, setTelephone] = useState("");
    const [Email, setEmail] = useState("");
    const [ObjectifProfess, setObjectifProfess] = useState("");
    const [type, setType] = useState("");
    const [verset, setVerset] = useState("");
    const [profession, setProfession] = useState("");
    const [entreprise, setEntreprise] = useState("");
    const [ville, setVille] = useState("");
    const [villeTop, setVilleTop] = useState("");
    const [pays, setPays] = useState("");
    const [secteur, setSecteur] = useState("");
    const [expertise, setExpertise] = useState("");
    const [expertiseSouhaitez, setExpertiseSouhaitez] = useState("");
    const [centresInteret, setCentresInteret] = useState("");
    const [confirmation, setConfirmation] = useState("");
    const [confirmationLoi, setConfirmationLoi] = useState("");
    const [abonnement, setAbonnement] = useState("");
    const [membreFEA, setMembreFEA] = useState("");
    const [urlImage, setUrlImage] = useState("");


    
    
    const [NomErr, setNomErr] = useState("");
    const [PrénomErr, setPrénomErr] = useState("");
    const [telephoneErr, setTelephoneErr] = useState("");
    const [EmailErr, setEmailErr] = useState("");
    const [ObjectifProfessErr, setObjectifProfessErr] = useState("");
    const [typeErr, setTypeErr] = useState("");
    const [versetErr, setVersetErr] = useState("");
    const [professionErr, setProfessionErr] = useState("");
    const [entrepriseErr, setEntrepriseErr] = useState("");
    const [villeErr, setVilleErr] = useState("");
    const [villeTopErr, setVilleTopErr] = useState("");
    const [paysErr, setPaysErr] = useState("");
    const [secteurErr, setSecteurErr] = useState(""); 
    const [expertiseErr, setExpertiseErr] = useState(""); 
    const [expertiseSouhaitezErr, setExpertiseSouhaitezErr] = useState("");
    const [centresInteretErr, setCentresInteretErr] = useState(""); 
    const [confirmationErr, setConfirmationErr] = useState(""); 
    const [confirmationLoiErr, setConfirmationLoiErr] = useState(""); 
    const [abonnementErr, setAbonnementErr] = useState("");
    const [membreFEAErr, setMembreFEAErr] = useState("");
    const [urlImageErr, setUrlImageErr] = useState("");  
 







    const handleFormSubmit=(e)=>{
        e.preventDefault();
       
        const abonnement0={
          nom:Nom,
          prenom:Prénom,
          telephone:telephone,
          Email:Email,
          type:type,
          verset:verset,
          profession:profession,
          ObjectifProfess:ObjectifProfess,
          entreprise:entreprise,
          ville:ville,
          villeTop:villeTop,
          pays:pays,
          secteur:secteur,
          expertise:expertise,
          expertiseSouhaitez:expertiseSouhaitez,
          centresInteret:centresInteret,
          confirmation:confirmation,
          confirmationLoi:confirmationLoi,
          abonnement:abonnement,
          membreFEA:membreFEA,
          urlImage:urlImage,


        }
        console.log(abonnement0);
        var config = {
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          };
        
          axios.post('http://localhost:8080/BoussolePro-backend/insertAbonne.php', abonnement0, config)
          .then(res => console.log("------------------------>data returned",res.data));
//         if(  Nom==='' || Prénom===''|| type===''|| telephone==='' || Email===''|| ObjectifProfess==='' || profession==='' || entreprise===''
//         || ville==='' || villeTop==='' || pays===''|| secteur==='' || expertise==='' || expertiseSouhaitez===''
//         || centresInteret==='' || confirmation==='' || confirmationLoi==='' || membreFEA===''|| abonnement==='' || urlImage===''){
      
//             message.error('Vous devez remplir les champs obligatoires');
//             setNomErr("le champ Nom est obligatoire merci de le remplir !!");
//             setPrénomErr("le champ Prénom est obligatoire merci de le remplir !!");
//             setTelephoneErr("le champ telephonephone est obligatoire  !!");
//             setEmailErr("le champ Email est obligatoire  !!");
//             setObjectifProfessErr("le champ Email est obligatoire  !!");
//             setTypeErr("le champ est obligatoire  !!");
//             setVersetErr("le champ est obligatoire  !!");
//             setProfessionErr("le champ est obligatoire  !!");
//             setEntrepriseErr("le champ est obligatoire  !!");
//             setVilleErr("le champ est obligatoire  !!");
//             setVilleTopErr("le champ est obligatoire  !!");
//             setPaysErr("le champ est obligatoire  !!");
//             setSecteurErr("le champ est obligatoire  !!");
//             setExpertiseErr("le champ est obligatoire  !!");
//             setExpertiseSouhaitezErr("le champ est obligatoire  !!");
//             setCentresInteretErr("le champ est obligatoire  !!");
//             setConfirmationErr("le champ est obligatoire  !!");
//             setConfirmationLoiErr("le champ est obligatoire  !!");
//             setAbonnementErr("le champ est obligatoire  !!");
//             setMembreFEAErr("le champ est obligatoire  !!");
//             setUrlImageErr("le champ est obligatoire  !!");
// }
//             else{
//                 message.success('La demande est faite avec succès');
               
//                 setPrénom('');
//                 setNom(''); 
//                 setObjectifProfess('');
//                 setTelephone('');
//                 setEmail('');
//                 setType('');
//                 setVerset('');
//                 setProfession('');
//                 setEntreprise('');
//                 setVille('');
//                 setPays('');
//                 setSecteur('');
//                 setVilleTop('');
//                 setExpertise('');
//                 setExpertiseSouhaitez(''); 
//                 setCentresInteret(''); 
//                 setConfirmation(''); 
//                 setConfirmationLoi(''); 
//                 setAbonnement(''); 
//                 setMembreFEA(''); 
//                // setUrlImage('');

//             }
}
    return (
        <div>
           <form  className="second" style={{padding: "14px",marginTop:"19px"}}>
        <Row>
        <Col span={24}>
            
            <Alert   message="Un réseau de confiance et de qualité"
                  description="Bienveneu sur formulaire d'abonne."
                  type="info"
                  showIcon/>
             <div style={{textAlign:"center"}}> 
              <h4 style={{color:"#171617"}}>Formulaire d’abonnement à FEA Boussole Pro</h4></div>

              <div class="item">              
                <p style={{color:"#171617"}}><b>CONTACTS</b><span class="required">*</span></p>
                <div class="name-item">
                    <div className="col-md-6">
                        <Input className="inputB" type="text" style={{width: "400px"}} name="name"  placeholder="Prénom"
                          value={Prénom} onChange={(e)=>setPrénom(e.target.value)}  required/>
                    </div>
                    <div className="col-md-6">
                        <Input className="inputB" style={{width: "430px"}} type="text" name="name" placeholder="Nom"
                          value={Nom} onChange={(e)=>setNom(e.target.value)} required/>
                    </div>
                    <div className="col-md-6">
                        <spam><b style={{color: "red"}}>{PrénomErr}</b></spam>
                    </div>
                    <div className="col-md-6">
                        <spam><b style={{color: "red"}}>{NomErr}</b></spam>
                    </div>
                </div>


              <Col>
              <Form.Item >
                <label >
                <b> telephonephone</b><span class="form-required"> *</span></label>
                  <Input type="tel" id="phone" name="phone" placeholder="Indiquer votre indicatif pays" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                   value={telephone} onChange={(e)=>setTelephone(e.target.value)} required/>
                  <spam><b style={{color: "red"}}>{telephoneErr}</b></spam>
               </Form.Item> 

               <Form.Item name={['user', 'email']}  rules={[{ type: 'email' }]}>
                <label><b>Email</b><span class="required">*</span></label>
                  <Input  placeholder="Exmple: boussole@fea.com" value={Email} onChange={(e)=>setEmail(e.target.value)} required />
                  <spam><b style={{color: "red"}}>{EmailErr}</b></spam>
               </Form.Item>
              </Col>
               <Form.Item >
            <label><b>Vous êtes?</b><span class="required">*</span></label>
              <Radio.Group value={type} onChange={(e)=>setType(e.target.value)}>
                <Radio value="Professionnel" >Professionnel</Radio><br/>
                <Radio value="Jeune" >Jeune diplômé-e</Radio><br/>
              </Radio.Group><br/>
              <spam><b style={{color: "red"}}>{typeErr}</b></spam>
        </Form.Item>

        <Form.Item >
      <label><b>Un verset - hadith qui vous inspire</b></label>
        <Input  type="text" name="verset" value={verset} onChange={(e)=>setVerset(e.target.value)} required />
        <spam><b style={{color: "red"}}>{versetErr}</b></spam>
        </Form.Item>

        <Form.Item >
          <label><b>Votre profession?</b></label>
            <Input  type="text" name="profession" value={profession} onChange={(e)=>setProfession(e.target.value)} required />
            <spam><b style={{color: "red"}}>{professionErr}</b></spam>
        </Form.Item>
        
        <Form.Item >
          <label><b>Votre objectif professionnel</b><span class="required">*</span></label>
            <Input  type="text" name="objectifProfess" value={ObjectifProfess} onChange={(e)=>setObjectifProfess(e.target.value)} required />
            <spam><b style={{color: "red"}}>{ObjectifProfessErr}</b></spam>
        </Form.Item> 

        <Form.Item >
          <label><b>Votre entreprise?</b></label>
            <Input  type="text" name="entreprise" value={entreprise} onChange={(e)=>setEntreprise(e.target.value)} required />
            <p>Ou votre école pour le cas d'un jeune diplômé-e</p>
            <spam><b style={{color: "red"}}>{entrepriseErr}</b></spam>
        </Form.Item> 

{/* pas encore fait !!!!!!!!!!!!!!!!!!!!!!!! */}
        <Form.Item >
        <label><b>Le secteur de votre entreprise</b></label>
        <select class="form-control" value={secteur} onChange={(e)=>setSecteur(e.target.value)}>
          <option value="un">Un</option>
          <option value="deux">Deux</option>
          <option value="trois">Trois</option>
        </select>
        <spam><b style={{color: "red"}}>{secteurErr}</b></spam>
        </Form.Item>
         

        <Form.Item >
          <label><b>Votre ville</b><span class="required">*</span></label>
            <Input  type="text" name="ville" value={ville} onChange={(e)=>setVille(e.target.value)} required />
            <spam><b style={{color: "red"}}>{villeErr}</b></spam>
        </Form.Item>

        <Form.Item >
          <label><b>Pays</b><span class="required">*</span></label>
            <Input  type="text" name="Pays" value={pays} onChange={(e)=>setPays(e.target.value)} required />
            <spam><b style={{color: "red"}}>{paysErr}</b></spam>
        </Form.Item>
        
        <Form.Item >
          <label><b>Top 3 des villes où vous êtes en déplacement</b></label>
            <Input  type="text" name="villeTop" value={villeTop} onChange={(e)=>setVilleTop(e.target.value)} required />
            <spam><b style={{color: "red"}}>{villeTopErr}</b></spam>
        </Form.Item>
        
        {/* pas encore fait !!!!!!!!!!!! */}
        <Form.Item >
        <label><b>Votre expertise (5 années d'expérience minimum, plusieurs choix possible) </b><span class="required">*</span></label>
        <select class="form-control" value={expertise} onChange={(e)=>setExpertise(e.target.value)}>
          <option value="un">Un</option>
          <option value="deux">Deux</option>
          <option value="trois">Trois</option>
        </select>
        <spam><b style={{color: "red"}}>{expertiseErr}</b></spam>

        </Form.Item>
{/* pas encore fait !!!!!!!!!!!! */}
        <Form.Item >
        <label><b>L' expertise que vous souhaitez développer (plusieurs choix possible)  </b><span class="required">*</span></label>
        <select class="form-control" value={expertiseSouhaitez} onChange={(e)=>setExpertiseSouhaitez(e.target.value)}>
          <option value="un">Un</option>
          <option value="deux">Deux</option>
          <option value="trois">Trois</option>
        </select>
        <spam><b style={{color: "red"}}>{expertiseSouhaitezErr}</b></spam>

        </Form.Item>
{/* pas encore fait !!!!!!!!!!!! */}
        <Form.Item >
        <label><b>Vos centres d'intérêt  </b></label>
        <select class="form-control" value={centresInteret} onChange={(e)=>setCentresInteret(e.target.value)}>
          <option value="un">sport</option>
          <option value="deux">voyage</option>
          <option value="trois">Lecture</option>
        </select>
        <spam><b style={{color: "red"}}>{centresInteretErr}</b></spam>

        </Form.Item>

       <Form.Item >
            <label><b>Je confirme soumettre 2 contacts. Tout abonné-e doit être recommandé par 2 personnes. Remarque : ce sont les 2 personnes qui peuvent vous recommander et qui vous connaissent (de votre entourage ou autres).</b><span class="required">*</span></label>
              <Radio.Group value={confirmation} onChange={(e)=>setConfirmation(e.target.value)}>
              <Radio value="confirme" >OUI je confirme</Radio><br/>
              <Radio value="nonconfirm" >NON je ne confirme pas</Radio><br/>
              </Radio.Group><br/>
              <spam><b style={{color: "red"}}>{confirmationErr}</b></spam>
        </Form.Item> 

        <Form.Item >
            <label><b>êtes vous un membre de FEA?</b><span class="required">*</span></label><br/>
              <Radio.Group value={membreFEA} onChange={(e)=>setMembreFEA(e.target.value)}>
              <Radio value="membre" >Membre de FEA</Radio><br/>
              <Radio value="nonmembre" >Non membre de FEA</Radio><br/>
              </Radio.Group><br/>
              <spam><b style={{color: "red"}}>{membreFEAErr}</b></spam>
        </Form.Item>

        <Form.Item >
            <label><b>Quel abonnement choisissez-vous?</b><span class="required">*</span></label><br/>
              <Radio.Group value={abonnement} onChange={(e)=>setAbonnement(e.target.value)} >
              <Radio value="Standard15" >Standard à 15 euros par mois - avec engagement annuel</Radio><br/>
              <Radio value="Standard180" >Standard à 180 euros par an + 5% de réduction</Radio><br/>
              <Radio value="Premium25" >Premium à 25 euros par mois - avec engagement annuel</Radio><br/>
              <Radio value="Premium300" >Premium à 300 euros par an + 5% de réduction</Radio><br/>
              </Radio.Group>
              <br/>
              <spam><b style={{color: "red"}}>{abonnementErr}</b></spam>
        </Form.Item>

        <Form.Item >
            <label><b>Conformément à la loi 09-08, vous disposez d’un droit d’accès, de rectification et d’opposition au traitement de vos données personnelles. </b><span class="required">*</span></label><br/>
              <Radio.Group value={confirmationLoi} onChange={(e)=>setConfirmationLoi(e.target.value)}>
              <Radio value="Accepteconditions" >J'accepte les conditions d'utilisation</Radio><br/>
              <Radio value="NonAccepteconditions" >Je n'accepte pas les conditions d'utilisation</Radio><br/>
              </Radio.Group><br/>
              <spam><b style={{color: "red"}}>{confirmationLoiErr}</b></spam>
        </Form.Item>
        
        <Form.Item >
        <label><b>Merci d’uploader votre future photo de profil. Vous pouvez également uploader une photo de paysage. </b><span class="required">*</span></label><br/>
        <input type="file" className={urlImage != null  ? 'hidden' : ''} onChange={(e)=>{
          console.log("-*-*-*---->",URL.createObjectURL(e.target.files[0]));
          setUrlImage(URL.createObjectURL(e.target.files[0]));
        }} />
        </Form.Item>

              <p>Notre équipe entrera en contact avec vous et sera à votre disposition pour toutes demandes.
              Contrairement à d’autres réseaux FEA Boussole Pro se caractérise par l’importance du contact
              humain et un service de suivi de qualité. Nous vous remercions de votre confiance :)</p>

              <div class="btn-block">
              <Button type="primary" value="Submit" 
              onClick={handleFormSubmit}  
              href="/" 
              required style={{margin:"10px",width: "220px"}}>
              Soumettre
              </Button>
              </div>
              </div>
                 </Col>
        
            </Row>
            </form>  
        </div>
    );
}

export default FormAbonne0;