import { Form, Input, Alert, Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';


function AddDemandeStage() {
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
       <Input  className="inputB" type="text" name="name" placeholder="Nom" required/>
       <Input  className="inputB" type="text" name="name" placeholder="Prénom" required/>
     </div>
   </div>
 </Form.Item>

 <Form.Item  >
     <label><b>Titre</b><span class="required">*</span></label>
       <Input  className="inputB" type="text" name="titre" placeholder="Titre" required/>
 </Form.Item>
 <Form.Item name={['user', 'email']}  rules={[{ type: 'email' }]}>
 <label><b>Email</b><span class="required">*</span></label>
   <Input required className="inputB"/>
   </Form.Item>

   <Form.Item>
   <label><b>Description</b><span class="required">*</span></label>
<Input.TextArea placeholder="Description" required />
</Form.Item>



 <Form.Item >
 <div className="row">
 <div class="btn-block col">
     <Button type="primary" required style={{margin:"10px"}}>Ajouter</Button>
   <Link to="/DemandeStage">  <Button required style={{margin:"10px"}} >Annuler</Button></Link>
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
  