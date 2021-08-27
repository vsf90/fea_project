import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Form, Input,Checkbox, Alert, Button,  Radio, Space , Row, Col,message  } from 'antd';
function FormAbonne0() {
   
    const [Télé, setTélé] = useState("");
    const [secteur, setSecteur] = useState("");
    const [expertise, setExpertise] = useState("");
    const [expertiseSouhaitez, setExpertiseSouhaitez] = useState("");
    const [centresInteret, setCentresInteret] = useState("");

    const [ObjectifProfess, setObjectifProfess] = useState("");
    const [Radio1, setRadio1] = useState("");
    const [Radio2, setRadio2] = useState("");
    const [Radio3, setRadio3] = useState("");
    const [Radio4, setRadio4] = useState("");
    const [Radio5, setRadio5] = useState("");
    const [verset, setVerset] = useState("");
    const [profession, setProfession] = useState("");
    const [entreprise, setEntreprise] = useState("");
    const [villeTop, setVilleTop] = useState("");
    const [Img, setImg] = useState("");

    
    console.log(Img);
  
    const [TéléErr, setTéléErr] = useState("");
    const [ObjectifProfessErr, setObjectifProfessErr] = useState("");
    const [Radio1Err, setRadio1Err] = useState("");
    const [Radio2Err, setRadio2Err] = useState("");
    const [Radio3Err, setRadio3Err] = useState("");
    const [Radio4Err, setRadio4Err] = useState("");
    const [Radio5Err, setRadio5Err] = useState("");
    const [versetErr, setVersetErr] = useState("");
    const [professionErr, setProfessionErr] = useState("");
    const [entrepriseErr, setEntrepriseErr] = useState("");
    const [villeTopErr, setVilleTopErr] = useState("");





    const handleFormSubmit=(e)=>{
        e.preventDefault();
       
        const abonnement0={
         
          telephone:Télé,
          type:Radio1,
          Radio2:Radio2,
          Radio3:Radio3,
          Radio4:Radio4,
          Radio5:Radio5,
          verset:verset,
          profession:profession,
          ObjectifProfess:ObjectifProfess,
          entreprise:entreprise,
          villeTop:villeTop,
          secteur:secteur,
          urlImage:Img,
          expertise:expertise,
          expertiseSouhaitez:expertiseSouhaitez,
          centresInteret:centresInteret

        }
        console.log(abonnement0);
        if(  Radio1==''|| Radio2==''|| Radio3==''|| Radio4=='' 
        || Radio5=='' || Télé=='' ||  ObjectifProfess=='' || profession=='' || entreprise==''
        || villeTop=='' ){
      
            message.error('Vous devez remplir les champs obligatoires');
           
            setTéléErr("le champ Téléphone est obligatoire  !!");
            setObjectifProfessErr("le champ Email est obligatoire  !!");
            setRadio1Err("le champ est obligatoire  !!");
            setRadio2Err("le champ est obligatoire  !!");
            setRadio3Err("le champ est obligatoire  !!");
            setRadio4Err("le champ est obligatoire  !!");
            setRadio5Err("le champ est obligatoire  !!");
            setVersetErr("le champ est obligatoire  !!");
            setProfessionErr("le champ est obligatoire  !!");
            setEntrepriseErr("le champ est obligatoire  !!");
            setVilleTopErr("le champ est obligatoire  !!");


}
            else{
                message.success('La demande est faite avec succès');
                axios.post('http://localhost/BoussolePro-backend/insertAbonne.php?id='+localStorage.getItem('ID'),abonnement0).then(res=>console.log(res.data));

                
                setObjectifProfess('');
                setTélé('');
                setRadio1('');
                setRadio2('');
                setRadio3('');
                setRadio4('');
                setVerset('');
                setProfession('');
                setEntreprise('');
              
                setVilleTop('');
            }}
    return (
        <div>
           <form  className="second" style={{padding: "14px",marginTop:"19px",backgroundColor:"white"}}>
        <Row>
        <Col span={24}>
            
           
             <div style={{textAlign:"center"}}> 
              <h4 style={{color:"#171617"}}>Formulaire d’abonnement à FEA Boussole Pro</h4></div>

              <div class="item">                      

              <Col>
              <Form.Item >
                <label >
                <b> Téléphone</b><span className="form-required"> *</span></label>
                  <Input type="tel" id="phone" name="phone" placeholder="Indiquer votre indicatif pays" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                   value={Télé} onChange={(e)=>setTélé(e.target.value)} required/>
                  <spam><b style={{color: "red"}}>{TéléErr}</b></spam>
               </Form.Item> 

             
              </Col>
               <Form.Item >
            <label><b>Vous êtes?</b><span className="required">*</span></label><br></br>
              <Radio.Group value={Radio1} onChange={(e)=>setRadio1(e.target.value)}>
                <Radio value="Professionnel" >Professionnel</Radio><br/>
                <Radio value="Jeune diplômé-e" >Jeune diplômé-e</Radio><br/>
              </Radio.Group><br/>
              <spam><b style={{color: "red"}}>{Radio1Err}</b></spam>
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
          <label><b>Votre objectif professionnel</b><span className="required">*</span></label>
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
        <Input  type="text" name="ville" value={secteur} onChange={(e)=>setSecteur(e.target.value)} required />

        </Form.Item>
         

     
        
        <Form.Item >
          <label><b>Top 3 des villes où vous êtes en déplacement</b></label>
            <Input  type="text" name="villeTop" value={villeTop} onChange={(e)=>setVilleTop(e.target.value)} required />
            <spam><b style={{color: "red"}}>{villeTopErr}</b></spam>
        </Form.Item>
        
        {/* pas encore fait !!!!!!!!!!!! */}
        <Form.Item >
        <label><b>Votre expertise (5 années d'expérience minimum) </b><span class="required">*</span></label>
        <Input  type="text" name="villeTop" value={expertise} onChange={(e)=>setExpertise(e.target.value)}required />
           
       
        </Form.Item>
{/* pas encore fait !!!!!!!!!!!! */}
        <Form.Item >
        <label><b>L' expertise que vous souhaitez développer  </b><span class="required">*</span></label>
        <Input  type="text" name="villeTop" value={expertiseSouhaitez} onChange={(e)=>setExpertiseSouhaitez(e.target.value)} required />

       
        </Form.Item>
{/* pas encore fait !!!!!!!!!!!! */}
        <Form.Item >
        <label><b>Vos centres d'intérêt  </b></label>
        <Input  type="text" name="villeTop" value={centresInteret} onChange={(e)=>setCentresInteret(e.target.value)}required />

        </Form.Item>

       <Form.Item >
            <label><b>Je confirme soumettre 2 contacts. Tout abonné-e doit être recommandé par 2 personnes. Remarque : ce sont les 2 personnes qui peuvent vous recommander et qui vous connaissent (de votre entourage ou autres).</b><span class="required">*</span></label>
              <Radio.Group value={Radio5} onChange={(e)=>setRadio5(e.target.value)}>
              <Radio value="OUI je confirme" >OUI je confirme</Radio><br/>
              <Radio value="NON je ne confirme pas" >NON je ne confirme pas</Radio><br/>
              </Radio.Group><br/>
              <spam><b style={{color: "red"}}>{Radio5Err}</b></spam>
        </Form.Item> 

        <Form.Item >
            <label><b>êtes vous un membre de FEA?</b><span className="required">*</span></label><br/>
              <Radio.Group value={Radio2} onChange={(e)=>setRadio2(e.target.value)}>
              <Radio value="Membre de FEA" >Membre de FEA</Radio><br/>
              <Radio value="Non membre de FEA" >Non membre de FEA</Radio><br/>
              </Radio.Group><br/>
              <spam><b style={{color: "red"}}>{Radio2Err}</b></spam>
        </Form.Item>

        <Form.Item >
            <label><b>Quel abonnement choisissez-vous?</b><span className="required">*</span></label><br/>
              <Radio.Group value={Radio3} onChange={(e)=>setRadio3(e.target.value)} >
              <Radio value="Standard 15 euros par mois" >Standard à 15 euros par mois - avec engagement annuel</Radio><br/>
              <Radio value="Standard à 180 euros par an" >Standard à 180 euros par an + 5% de réduction</Radio><br/>
              <Radio value="Premium à 25 euros par mois" >Premium à 25 euros par mois - avec engagement annuel</Radio><br/>
              <Radio value="Premium à 300 euros par an" >Premium à 300 euros par an + 5% de réduction</Radio><br/>
              </Radio.Group>
              <br/>
              <spam><b style={{color: "red"}}>{Radio3Err}</b></spam>
        </Form.Item>

        <Form.Item >
            <label><b>Conformément à la loi 09-08, vous disposez d’un droit d’accès, de rectification et d’opposition au traitement de vos données personnelles. </b><span class="required">*</span></label><br/>
              <Radio.Group value={Radio4} onChange={(e)=>setRadio4(e.target.value)}>
              <Radio value="J accepte les conditions d'utilisation" >J'accepte les conditions d'utilisation</Radio><br/>
              <Radio value="Je n accepte pas les conditions d'utilisation" >Je n'accepte pas les conditions d'utilisation</Radio><br/>
              </Radio.Group><br/>
              <spam><b style={{color: "red"}}>{Radio4Err}</b></spam>
        </Form.Item>
        
        <Form.Item >
        <label><b>Merci d’uploader votre future photo de profil. Vous pouvez également uploader une photo de paysage. </b><span class="required">*</span></label><br/>
        <input type="file" selected={Img} onChange={(info)=>setImg(URL.createObjectURL(info.target.files[0]))} />
        </Form.Item> 
        

              <p>Notre équipe entrera en contact avec vous et sera à votre disposition pour toutes demandes.
              Contrairement à d’autres réseaux FEA Boussole Pro se caractérise par l’importance du contact
              humain et un service de suivi de qualité. Nous vous remercions de votre confiance :)</p>
              <div class="btn-block">
              <Button type="primary" value="Submit" 
              onClick={handleFormSubmit}  
              required href="/" 
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