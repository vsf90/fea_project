import React from 'react';
import { Link } from 'react-router-dom';
import { Form,Input,Alert, Button, Radio,Rate, Checkbox, Row, Col,message } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import { config } from '../../config';
function AddPartenaire() {
  const [selectedFile, setSelectedFile] = useState(""); 

  const [Img, setImg] = useState("");
  const [Nom, setNom] = useState("");
  const [Activité, setActivité] = useState("");
  const [Avantage, setAvantage] = useState("");
  const [Lien, setLien] = useState("");
  
  // const handleChange=(event) =>{
  //   //console.log("comme",event.target.files[0]);
  //   setImg(URL.createObjectURL(event.target.files[0]));
  // }

  console.log(Img);
  console.log(Nom);
 console.log(Activité);
 console.log(Avantage);
 console.log(Lien);
 
  const handleFormSubmit=(e)=>{
    e.preventDefault();
    const dd = new FormData(); 
    dd.append('image', selectedFile, selectedFile.name);
    const Partenaire={
    
      nom:Nom,
      activité:Activité,
      avantage:Avantage,
      lien:Lien,
      image:selectedFile.name,
      img:Img,
    }
    console.log(Partenaire);


if(  Nom==='' || /*Img===''*/  Activité==='' || Avantage==='' || Lien==='' ){
  
    message.error('Vous devez remplir les champs obligatoires');
  
  } else {
    message.success('Le Partenaire a été ajouté avec succès');
    axios.post(config+'/BoussolePro-backend/insertPartenaire.php',Partenaire).then(res=>console.log(res.data));
    axios.post(config+'/BoussolePro-backend/insertRelaisExpertFileInput.php',dd).then(res=>console.log(res.data)); 
 
      setNom('');
      setImg('');
      setActivité('');
      setAvantage('');
      setLien('');
  } 
}
    return (
        <div style={{minWidth:'800px'}}> 
        <div class="testboxM">
       <form  className="ajoutM">
       
           <Row>
       <Col span={24}>
           
           <Alert
                 message="Bienvenue sur la page ajouter partenaire"
                 description=" Pour ajouter un partenaire merci de remplir le formulaire suivant."
                
                 type="info"
                 showIcon
                 />
                 <br></br>
                 <b/> 
                
                 <div className="AddM">
         
           
           
       
        <Form.Item >
        <label><b>Image</b></label><span class="required"> *</span> <br></br>
        <input selected={Img} onChange={(info)=>{/*setImg(URL.createObjectURL(info.target.files[0]));*/setSelectedFile(info.target.files[0]);}} type="file" name="file"></input>
        </Form.Item >
        
      
       <Form.Item >
       <label><b>Nom du partenaire (nom de la societé)</b><span class="required">*</span></label>
          <Input  className="input" type="text" value={Nom} onChange={(e)=>setNom(e.target.value)} name="Ville" placeholder="Nom" required/>
         </Form.Item>
         <Form.Item >
       <label><b>Activité</b><span class="required">*</span></label>
          <Input  className="input" type="text" value={Activité} onChange={(e)=>setActivité(e.target.value)} name="Entreprise" placeholder="Activité" required/>
         </Form.Item>
         <Form.Item >
       <label><b>Lien du site du partenaire</b><span class="required">*</span></label>
          <Input  className="input" type="text" value={Lien} onChange={(e)=>setLien(e.target.value)} name="Entreprise" placeholder="Lien" required/>
         </Form.Item>
         <Form.Item >
       <label><b>Avantages pour nos abonnées</b><span class="required">*</span></label>
          <Input  className="input" type="text"  value={Avantage} onChange={(e)=>setAvantage(e.target.value)} name="Avantage" required/>
         </Form.Item>
         
        
         
       <Form.Item >
       <div class="btn-block col">
     <Button type="primary" onClick={handleFormSubmit} required style={{margin:"10px"}}>Ajouter</Button>
     <Link to="/NosPartenaires"><Button required style={{margin:"10px"}} >Annuler</Button></Link>
   </div>
         </Form.Item>
 
         </div>
     </Col>
       
     </Row>
         
         
     
       </form>
       </div> 
       </div>
    );
}

export default AddPartenaire;