import { Form, Input, Alert, Row, Col } from 'antd';
import { Upload, message, Button } from 'antd';
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

function AddOffreStage() {
    return (
        <div className="container">
      <form  >
     
     <Row>
 <Col span={24}>
    
     <Alert
           message="Ajouter une offre de stage"
           description="Pour ajouter une offre de stage merci de remplir le formulaire suivant."
           type="info"
           showIcon
           />    

 <Form.Item  >
 <div class="item">
     <label><b>Votre Nom complet</b><span class="required">*</span></label>
     <div class="name-item">
       <input  className="inputB" type="text" name="name" placeholder="Nom" required/>
       <input  className="inputB" type="text" name="name" placeholder="Prénom" required/>
     </div>
   </div>
 </Form.Item>
 <Form.Item  >
 <div class="item">
     <label><b>Titre</b><span class="required">*</span></label>
     <div class="name-item">
       <input  className="input" type="text" name="titre" placeholder="Titre" required/>
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

  <Form.Item>
  <label><b>Image</b><span class="required">*</span></label>
  <br></br>
   <Upload {...props}>
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
  </Form.Item>

 <Form.Item >
 <div className="row">
 <div class="btn-block col">
     <Button type="primary" required style={{margin:"10px"}}>Ajouter</Button>
     <Button required style={{margin:"10px"}} >Annuler</Button>
   </div>

 </div>
 
   </Form.Item>
   


</Col>

</Row>
  
  

 </form>
     

              
</div>
    );
  }
  
  export default AddOffreStage;
  