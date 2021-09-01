import React from 'react'
import { Form,Input,Alert, Button, Radio,Rate, Checkbox, Row, Col,Upload,message } from 'antd';
import { Link } from 'react-router-dom';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useState } from 'react';
import { config } from '../../config';

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


export default function AjouterRelais() {
    const [Nom, setNom] = useState("");
    const [Img, setImg] = useState("");
    const [Role, setRole] = useState("");
    const [Compétances, setCompétances] = useState("");
  
   console.log(Nom);
   console.log(Img);
   console.log(Role);
   console.log(Compétances);
   
    const handleFormSubmit=(e)=>{
      e.preventDefault();
      const AjoutRE={
        nom:Nom,
        img:Img,
        role:Role,
        compétances:Compétances
       
      }
      console.log(AjoutRE);
      
  
  if(  Nom===''  || Img==='' || Role==='' || Compétances===''){
    
      message.error('Vous devez remplir les champs obligatoires');
    
    }else{
      message.success('La demande est faite avec succès');
     axios.post(config+'/BoussolePro-backend/insertRelaisExpert.php',AjoutRE).then(res=>console.log(res.data));
  
      setNom('');
      setRole('');
      setCompétances('');
      setImg('');
      
    }
  }
    return (
      <div style={{minWidth:'800px'}}>
	
	
       <div class="testboxM">
      <form  className="ajoutM">
      
          <Row>
      <Col span={24}>
          
          <Alert
                message="Bienvenue sur la page Ajouter Relais ou Expert"
                 description=" Pour ajouter un Relais ou un Expert merci de remplir le formulaire suivant."
                type="info"
                showIcon
                />
                <br/> 
              
            <div className="AddM">
          
      
      <Form.Item  >
      <div class="item">
          <label><b>Le nom du relais ou de l'expert</b><span class="required">*</span></label>
          <Input value={Nom} onChange={(e)=>setNom(e.target.value)} placeholder="nom" required/>
        </div>
      </Form.Item>
      <Form.Item>
  <label><b>Image</b><span class="required">*</span></label>
  <br></br>
   {/* <Upload   listType="picture"
      maxCount={1} selected={Img} onChange={(info)=>setImg(info.file.name)}>
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload> */}
  </Form.Item>
  <Form.Item>
  <input selected={Img} onChange={(info)=>setImg(URL.createObjectURL(info.target.files[0]))} type="file"></input>
  </Form.Item>
  <label><b>Vous allez ajouter </b><span class="required">*</span></label>
  <Form.Item >
    <Radio.Group >
      <Radio value="relais" checked={Role === "relais"}   onChange={(e)=>setRole(e.target.value)}>Un relais?</Radio><br/>
      <Radio value="expert" checked={Role === "expert"}   onChange={(e)=>setRole(e.target.value)}>Un expert?</Radio><br/>
     
    </Radio.Group>
        </Form.Item> 

     
  <Form.Item>
   <label><b>Expériance/Compétances</b><span class="required">*</span></label>
<Input.TextArea  value={Compétances} onChange={(e)=>setCompétances(e.target.value)} placeholder="Ecrivez ici ..." required />
</Form.Item>
      
       
      <Form.Item >
     <Button type="primary" onClick={handleFormSubmit} style={{margin:"10px"}} required >Ajouter</Button>
        </Form.Item>

        </div>
    </Col>
      
    </Row>
        
        
    
      </form>
      </div> 
      </div>

    );
  
     }
