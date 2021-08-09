import { Form, Input, Alert, Row, Col } from 'antd';
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

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

function AddDemandeEmploi() {
    return (
        <div className="container">
      <form  >
     
     <Row>
 <Col span={24}>
    
     <Alert
           message="Ajouter une Demande d'Emploi"
           description="Pour ajouter une Demande d'emploi merci de remplir le formulaire suivant."
           type="info"
           showIcon
           />    

 <Form.Item  >
 <div class="item">
     <label><b>Votre Nom complet</b><span class="required">*</span></label>
     <div class="name-item">
       <Input  className="inputB" type="text" name="name" placeholder="Nom" required/>
       <Input  className="inputB" type="text" name="name" placeholder="Prénom" required/>
     </div>
   </div>
 </Form.Item>
 <Form.Item  >
 <div class="item">
     <label><b>Titre</b><span class="required">*</span></label>
     <div class="name-item">
       <Input  type="text" name="titre" placeholder="Titre" required/>
     </div>
   </div>
 </Form.Item>

 <Form.Item name={['user', 'email']}  rules={[{ type: 'email' }]}>
 <label><b>Email</b><span class="required">*</span></label>
   <Input required />
   </Form.Item>

   <Form.Item>
   <label><b>Description</b><span class="required">*</span></label>
<Input.TextArea placeholder="Description" required />
</Form.Item>
 <Form.Item >
 <div className="row">
 <div class="btn-block col">
     <Button type="primary" required style={{margin:"10px"}}>Ajouter</Button>
   <Link to="/DemandeEmploi">  <Button required style={{margin:"10px"}} >Annuler</Button></Link>
   </div>

 </div>
 
   </Form.Item>
   


</Col>

</Row>
  
  

 </form>
     

              
</div>
    );
  }
  
  export default AddDemandeEmploi;
  