
import { Form, Input, Alert, Button, Space ,Checkbox, Row, Col,message } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import tof1 from "../image/1.png";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


function FeedbackMesBesions() {
  

  const [Nom, setNom] = useState("");
  const [Prénom, setPrénom] = useState("");
  const [Besoins, setBesoins] = useState("");
  const [Date1, setDate1] = useState("");
  const [AutresDemandes, setAutresDemandes] = useState("");

  console.log(Nom);
  console.log(Prénom);
 console.log(Besoins);
 console.log(Date1);
 console.log(AutresDemandes);
 
  const handleFormSubmit=(e)=>{
    e.preventDefault();
    const Besoin={
      nom:Nom,
      prenom:Prénom,
      besoins:Besoins,
      date1:Date1,
      autresdemandes:AutresDemandes
     
    }
    console.log(Besoin);

if(  Nom=='' || Prénom=='' || Besoins=='' || Date1=='' || AutresDemandes==''){
  
    message.error('Vous devez remplir les champs obligatoires');
  
  }else{
    message.success('La demande est faite avec succès');
   axios.post('http://localhost/BoussolePro-backend/insertBesoins.php',Besoin).then(res=>console.log(res.data));

    setNom('');
    setPrénom('');
    setBesoins('');
    setDate1('');
    setAutresDemandes('');
  }
}


  
     return (
       <div>
      <Alert style={{marginLeft:"40px"}}
      message="mes besoins pros immédiats"
      description="Bienveneu sur les besoins pros immédiats."
      type="info"
      showIcon
      />
        <form  style={{backgroundColor:"white",padding:"10px",width:"960px",marginTop:"20px",borderRadius:"8px",marginLeft:"40px"}}>
      
          <Row>
      <Col span={24}>
          
         
          <img className="card-img-top" src={tof1} alt="1" style={{width:"600px", display:"block", margin:"auto",padding:"auto"}} />
          <h2 class="title">Vos besoins pros immédiats</h2>
          
          <p>Par ce formulaire nous souhaitons vous offrir la meilleure expérience abonné(e) Boussole Pro.
              N'hésitez pas à nous indiquer vos besoins professionnels les plus urgents afin de vous proposer des interactions boussole pro pouvant vous être utile.</p>
      
      <Form.Item  >
      <div class="item">
          <label><b>Votre Nom complet</b><span class="required">*</span></label>
          <div class="name-item">
            <div className="row">
              <div className="col-lg-6" style={{width:"470px",marginBottom:"10px"}} >
              
            <Input  type="text" name="Nom" placeholder="Nom"  value={Nom} onChange={(e)=>setNom(e.target.value)} required/>
            </div>
            <br></br>
            <div className="col-lg-6" style={{width:"470px"}}>
            <Input type="text" name="Prénom" placeholder="Prénom"  value={Prénom} onChange={(e)=>setPrénom(e.target.value)} required/>
            </div>
            </div>
          </div>
        </div>  
      </Form.Item>

      
     
        <Form.Item name="Besoins"> 
        <label><b>Quels sont vos besoins les plus urgents d'un point de vue professionnel ? </b><span class="required">*</span></label>
            <Input.TextArea   value={Besoins} onChange={(e)=>setBesoins(e.target.value)} required />
      </Form.Item>

      <Form.Item>
      <label style={{marginRight:"10px"}}><b>Date de Votre prochain déplacement</b><span class="required">*</span></label>
      <DatePicker   selected={Date1} onChange={(date) => setDate1(date)} minDate={new Date()}   />
      
      </Form.Item>

      <p>N'hésitez pas à mentionner la ville et tout détail pouvant nous aider à vous proposer plus de meet up pro</p>
      
      <Form.Item>
      <label><b>Autres demandes</b><span class="required">*</span></label>
        <Input.TextArea name="Autredemandes" value={AutresDemandes} onChange={(e)=>setAutresDemandes(e.target.value)}  required/>
      </Form.Item>

      <p>Vous voulez interagir sur un centre d'intérêt pro précis...</p>
      <Form.Item >
      <div class="btn-block">
          <button type="submit" value="Submit" onClick={handleFormSubmit}  required href="/">SOUMETTRE</button>
        </div>
      
        </Form.Item>

   
    </Col>
      
    </Row>
        
        
    
      </form>
      </div>
    


    );
  
     }
  export default FeedbackMesBesions
;