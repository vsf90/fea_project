
import { Form, Input, Alert, Button,  DatePicker, Space ,Checkbox, Row, Col } from 'antd';
import { useState } from 'react';
import tof1 from "../image/1.png";

function FeedbackMesBesions() {
  const [nom, setNom] = useState("");
  const [Prénom, setPrénom] = useState("");
  const [Besoins, setBesoins] = useState("");
  const [Autredemandes, setAutredemandes] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('--------------------------fsdfds--->',nom);
    console.log('--------------------------fsdfds--->',Prénom);
    console.log('--------------------------fsdfds--->',Besoins);
    console.log('--------------------------fsdfds--->',Autredemandes);
} 


  const handleChangeNom = (e)=> {
    setNom(e.target.value);
    console.log(nom);
  }
  const handleChangePrénom = (e)=> {
    setPrénom(e.target.value);
    console.log(Prénom);
  }
  const handleChangeBesoins = (e)=> {
    setBesoins(e.target.value);
    console.log(Besoins);
  }
  const handleChangeAutredemandes = (e)=> {
    setAutredemandes(e.target.value);
    console.log(Autredemandes);
  }
     return (
        <form action="/" onSubmit={handleSubmit}>
      
          <Row>
      <Col span={24}>
          
          <Alert
                message="mes besoins pros immédiats"
                description="Bienveneu sur les besoins pros immédiats."
                type="info"
                showIcon
                />
          <img className="card-img-top" src={tof1} alt="1" />
          <h2 class="title">Vos besoins pros immédiats</h2>
          
          <p>Par ce formulaire nous souhaitons vous offrir la meilleure expérience abonné(e) Boussole Pro.
              N'hésitez pas à nous indiquer vos besoins professionnels les plus urgents afin de vous proposer des interactions boussole pro pouvant vous être utile.</p>
      
      <Form.Item  >
      <div class="item">
          <label><b>Votre Nom complet</b><span class="required">*</span></label>
          <div class="name-item">
            <input type="text" name="Nom" placeholder="Nom" value={nom} onChange={handleChangeNom} required/>
            <input type="text" name="Prénom" placeholder="Prénom" value={Prénom} onChange={handleChangePrénom} required/>
          </div>
        </div>  
      </Form.Item>

      
     
        <Form.Item name="Besoins"> 
        <label><b>Quels sont vos besoins les plus urgents d'un point de vue professionnel ? </b><span class="required">*</span></label>
            <Input.TextArea  value={Besoins} onChange={handleChangeBesoins} required />
      </Form.Item>

      <Form.Item>
      <label><b>Date de Votre prochain déplacement</b><span class="required">*</span></label>
      <DatePicker  />
      </Form.Item>

      <p>N'hésitez pas à mentionner la ville et tout détail pouvant nous aider à vous proposer plus de meet up pro</p>
      
      <Form.Item>
      <label><b>Autres demandes</b><span class="required">*</span></label>
        <Input.TextArea name="Autredemandes" value={Autredemandes} onChange={handleChangeAutredemandes}  required/>
      </Form.Item>

      <p>Vous voulez interagir sur un centre d'intérêt pro précis...</p>
      <Form.Item >
      <div class="btn-block">
          <button type="submit" value="Submit" onClick={handleSubmit}  required href="/">SOUMETTRE</button>
        </div>
      
        </Form.Item>

   
    </Col>
      
    </Row>
        
        
    
      </form>
    


    );
  
     }
  export default FeedbackMesBesions
;