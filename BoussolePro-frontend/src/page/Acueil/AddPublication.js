import { Form, Input, Alert, Row, Col } from 'antd';
import { Upload, message, Button,Space} from 'antd';
import { Link } from 'react-router-dom';
import { UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';
import axios from 'axios';
import { config } from '../../config';



function AddPublication() { 
  const [selectedFile, setSelectedFile] = useState(""); 

  const [Nom, setNom] = useState("");
  const [Prénom, setPrénom] = useState("");
  const [Titre, setTitre] = useState("");
  const [Contenu, setContenu] = useState("");
  const [Img, setImg] = useState("");

  console.log(Nom);
  console.log(Prénom);
  console.log(Titre);
  console.log(Contenu);
  console.log(Img);

  const handleFormSubmit=(e)=>{
    e.preventDefault();
    const dd = new FormData(); 
    if(selectedFile){
      dd.append('image', selectedFile, selectedFile.name); 
    }
   
    const publication={
     nom: Nom,
      prenom:Prénom,
      titre:Titre,
      image:selectedFile? selectedFile.name: "publication.png",
      contenu:Contenu,
      img:Img,
    }
    console.log(publication);

if(Nom=='' || Prénom=='' || Titre==''  || Contenu==''){
  
    message.error('Vous devez remplir les champs obligatoires');
  
  }else{
    message.success("La publication a été publiée avec succès");
    axios.post(config+'/BoussolePro-backend/insertPublication.php',publication).then(res=>console.log(res.data));
    axios.post(config+'/BoussolePro-backend/insertRelaisExpertFileInput.php',dd).then(res=>console.log(res.data)); 

    setNom('');
    setPrénom('');
    setContenu('');
    setTitre('');
    setImg('');
   
  
    
  }
  }

    return (
        <div className="container">
      <form  >
     
     <Row>
 <Col span={24}>
    
     <Alert
           message="Ajouter une publication sur le fil d'actualités"
           description="Pour ajouter une publication merci de remplir le formulaire suivant."
           type="info"
           showIcon
           />    

 <Form.Item  >
 <div class="item">
     <label><b>Votre Nom complet</b><span class="required">*</span></label>
     <div class="name-item">
       <input  className="inputB" type="text" name="name"  value={Nom} onChange={(e)=>setNom(e.target.value)} placeholder="Nom" required/>
       <input  className="inputB" type="text" name="name" value={Prénom} onChange={(e)=>setPrénom(e.target.value)} placeholder="Prénom" required/>
     </div>
   </div>
 </Form.Item>
 <Form.Item  >
 <div class="item">
     <label><b>Titre</b><span class="required">*</span></label>
     <div class="name-item">
       <Input  className="input" type="text" name="titre"  value={Titre} onChange={(e)=>setTitre(e.target.value)} placeholder="Titre" required/>
     </div>
   </div>
 </Form.Item>



   <Form.Item>
   <label><b>Contenu</b><span class="required">*</span></label>
<Input.TextArea value={Contenu} onChange={(e)=>setContenu(e.target.value)}  placeholder="Contenu" required />
</Form.Item>

<Form.Item>
  <label><b>Image</b></label> <br></br>
  <input selected={Img} onChange={(info)=>{/*setImg(URL.createObjectURL(info.target.files[0]));*/setSelectedFile(info.target.files[0]);}} type="file" name="file"></input>
</Form.Item>


 <Form.Item >
 <div className="row">
 <div class="btn-block col">
     <Button type="primary" required style={{margin:"10px"}} onClick={handleFormSubmit}>Ajouter</Button>
     <Link to="/Acueil"><Button required style={{margin:"10px"}} >Annuler</Button></Link>
   </div>

 </div>
 
   </Form.Item>
   


</Col>

</Row>
  
  

 </form>
     

              
</div>
    );
  }
  
  export default AddPublication;
  