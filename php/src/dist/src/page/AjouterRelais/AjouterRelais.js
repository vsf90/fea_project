import React from 'react'
import { Form,Input,Alert, Button, Radio,Rate, Checkbox, Row, Col,Upload,message } from 'antd';
import { Link } from 'react-router-dom';
import { UploadOutlined } from '@ant-design/icons';

const props = {
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
  };


export default function AjouterRelais() {
    return (
      <div>
	
	
       <div class="testboxM">
      <form  className="ajoutM">
      
          <Row>
      <Col span={24}>
          
          <Alert
                message="Bienveneu sur la page Ajouter Relais ou Expert"
                 description=" Pour ajouter un Relais ou un Expert merci de remplir le formulaire suivant."
                type="info"
                showIcon
                />
                <br/> 
              
            <div className="AddM">
          
      
      <Form.Item  >
      <div class="item">
          <label><b>Le nom du relais ou de l'expert</b><span class="required">*</span></label>
          <Input placeholder="nom" required/>
        </div>
      </Form.Item>
      <Form.Item>
  <label><b>Image</b><span class="required">*</span></label>
  <br></br>
   <Upload {...props}>
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
  </Form.Item>

     
  <Form.Item>
   <label><b>Expériance/Compétances</b><span class="required">*</span></label>
<Input.TextArea placeholder="Ecrivez ici ..." required />
</Form.Item>
      
       
      <Form.Item >
     <Button type="primary" required style={{margin:"10px"}}>Ajoute</Button>
        </Form.Item>

        </div>
    </Col>
      
    </Row>
        
        
    
      </form>
      </div> 
      </div>

    );
  
     }
