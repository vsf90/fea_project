import { Form, Input, Alert, Row, Col } from 'antd';
import { Upload, message, Button,Space} from 'antd';
import { Link } from 'react-router-dom';
import { UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';
import axios from 'axios';


/*const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };*/

function AddDemandeStage() {

  const [Nom, setNom] = useState("");
  const [Prénom, setPrénom] = useState("");
  const [Titre, setTitre] = useState("");
  const [Contenu, setContenu] = useState("");
  const [Img, setImg] = useState("");
  
  const handleChange=(event) =>{
    //console.log("comme",event.target.files[0]);
    setImg(URL.createObjectURL(event.target.files[0]));
  }

  console.log(Nom);
  console.log(Prénom);
  console.log(Titre);
  console.log(Contenu);
  console.log(Img);

 
  const handleFormSubmit=(e)=>{
    e.preventDefault();
    const DemandeStage={
     nom: Nom,
      prenom:Prénom,
      titre:Titre,
      img:Img,
      contenu:Contenu
      
     
    }
    console.log(DemandeStage);

if(Nom=='' || Prénom=='' || Titre==''  || Contenu=='' /*|| Img==''*/ ){
  
    message.error('Vous devez remplir les champs obligatoires');
  
  }else{
    message.success("La demande de stage a été publiée avec succès");
    axios.post('http://localhost/BoussolePro-backend/insertDemandeStage.php',DemandeStage).then(res=>console.log(res.data));

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
           message="Ajouter une demande de stage"
           description="Pour ajouter une demande de stage merci de remplir le formulaire suivant."
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

<Form.Item >
  <label><b>Image</b></label> <br></br>
  <input type="file" className={Img != null  ? 'hidden' : ''} onChange={handleChange}/>
  </Form.Item >

 <Form.Item >
 <div className="row">
 <div class="btn-block col">
     <Button type="primary" required style={{margin:"10px"}} onClick={handleFormSubmit}>Ajouter</Button>
     <Link to="/DemandeStage"><Button required style={{margin:"10px"}} >Annuler</Button></Link>
   </div>

 </div>
 
   </Form.Item>
   


</Col>

</Row>
  
  

 </form>
     

              
</div>
    );
  }
  
  export default AddDemandeStage;
  