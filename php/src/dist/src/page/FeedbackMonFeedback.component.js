
import { Form,Input,Tablele,Alert, Button, Radio,Rate, Checkbox, Row, Col } from 'antd';
import { useState } from 'react';
import tof1 from "../image/f6.png";


function FeedbackMonFeedback() {
  const [Nom, setNom] = useState("");
  const [Prénom, setPrénom] = useState("");
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('--------------------------fsdfds--->',Nom);
    console.log('--------------------------fsdfds--->',Prénom);
   
} 
const handleChangeNom = (e)=> {
  setNom(e.target.value);
  console.log(Nom);
}
const handleChangePrénom = (e)=> {
  setPrénom(e.target.value);
  console.log(Prénom);
}
  
  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
  const [value, setvalue] = useState();
  const handleChange = value => {
    setvalue( value );
  };
  

    return (
      <form action="/">
            <Row>
        <Col span={24}>
           
            <Alert
                  message="Mon Feedback sur les services BP"
                  description="Bienveneu sur le Feedback sur les services BP"
                  type="info"
                  showIcon
                  /><br/>
            <img className="card-img-top" src={tof1} alt="f1" /><br/>
           
        <h2 class="title">Formulaire de FEEDBACK</h2>
            
            <p>Ce formulaire est envoyé par l’équipe Boussole Pro après chaque Sprint pro 15min, Meet-up Pro et Shoura Pro. Il permet de confirmer l’attribution des points, avoir le retour qualitatif et de collecter les informations pouvant intéressées les autres membres du réseau et ainsi être proactif en les transformant en opportunités. 
                Ce retour permet à l’équipe Boussole Pro de constamment améliorer ses services à la communauté.</p>
     
        <Form.Item name="Nom">
        <div class="item">
         <label>  <b>Votre nom</b><span class="required">*</span></label>
          <div class="name-item">
            <input type="text" name="Nom" placeholder="Nom"  required  value={Nom} onChange={handleChangeNom} />
            <input type="text"  name="Prénom" placeholder="Prénom" required value={Prénom} onChange={handleChangePrénom} />
          </div>
        </div>
      </Form.Item>
    
        <Form.Item name="Avec qui">
             <label><b>Avec qui?</b><span class="required">*</span></label> 
          <Input />
        </Form.Item>
        <label><b>A quel service avez-vous récemment participé ? </b><span class="required">*</span></label>
          <Form.Item >
              <Radio.Group >
      <Radio value={1}>Sprint Pro</Radio><br/>
      <Radio value={2}>Meet'up Pro</Radio><br/>
      <Radio value={3}>Shoura Pro</Radio><br/>
      <Radio value={4}>Shoura Pro Observateur silencieux</Radio><br/>
    </Radio.Group>
        </Form.Item> 
        <label class="form-label form-label-left form-label-auto" id="label_5" for="input_5">
          <b>Quel a été votre niveau de satisfaction?</b>
          <span class="required">*</span>
        </label>
        <table className="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Non Satisfait</th>
      <th scope="col">Satisfait</th>
      <th scope="col">Trés Satisfait</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" >Organisation par l’équipe Boussole Pro</th>
      <td>  <Radio value="Non Satisfait"></Radio></td>
      <td>  <Radio value=" Satisfait"></Radio></td>
      <td>  <Radio value="Trés Satisfait"></Radio></td>
      
    </tr>
    <tr>
      <th scope="row">Ponctualité des abonné-e-s</th>
      <td>  <Radio value="Non Satisfait"></Radio></td>
      <td>  <Radio value=" Satisfait"></Radio></td>
      <td>  <Radio value="Trés Satisfait"></Radio></td>
    </tr>
    <tr>
      <th scope="row">Qualité de l’échange</th>
      <td>  <Radio value="Non Satisfait"></Radio></td>
      <td>  <Radio value=" Satisfait"></Radio></td>
      <td>  <Radio value="Trés Satisfait"></Radio></td>
    </tr>
    <tr>
      <th scope="row">Informations échangées</th>
      <td>  <Radio value="Non Satisfait"></Radio></td>
      <td>  <Radio value=" Satisfait"></Radio></td>
      <td>  <Radio value="Trés Satisfait"></Radio></td>
    </tr>
  </tbody>
</table>
   
        <Form.Item >
        <label ><b>Avez-vous des informations susceptibles de se transformer en opportunité pour les autres abonnes Boussole Pro ? (emplois, stages, opportunité de développement de business, conseil important à tous...). Si vous répondez OUI vous serez contacté par l’équipe Boussole Pro.  </b><span className="required">*</span></label>
        <Radio.Group >
      <Radio value={1}>Oui</Radio><br/>
      <Radio value={2}>Non</Radio>
      </Radio.Group>
        </Form.Item>
        <Form.Item >
        <label ><b>Est ce qu’il a été convenu entre abonnés de vous rencontrer sans le support de Boussole Pro ? (Cette question est importante car elle nous permet de confirmer notre utilité à créer des interactions au sein de notre communauté)</b><span class="required">*</span></label>
        <Radio.Group >
      <Radio value={1}>Oui</Radio><br/>
      <Radio value={2}>Non</Radio>
      </Radio.Group>
        </Form.Item>
        <Form.Item >
        <label ><b>Comment évaluez vous le restaurant ou le café? </b><span class="required">*</span></label>
        <br/>
        <span>
       
        <Rate style={{color:'yellow'}} tooltips={desc} onChange={handleChange} value={value} />
        {value ? <span classNameName="ant-rate-text">{desc[value - 1]}</span> : ''}
      </span>
      </Form.Item>
        
          <Form.Item 
         
           rules={[{ required: true, message: 'Please ' }]}>
               <label ><b>Qu'est ce que ce service vous as apporté personnellement? </b><span class="required">*</span></label>
              <Input.TextArea  required />
        </Form.Item>
        <label ><b>Mots clés du Sprint</b><span class="required">*</span></label>
        <Form.Item >
        <Input />
        <p >Merci de préciser les mots clés résumant vos échange (ex: partage de contact, start up, entretien....)</p>
        </Form.Item>
        <label ><b>Avez-vous un feedback particulier ?</b> (Tout ce qui peut vous passer par la tête est important ) <span class="required">*</span> </label>
          <Form.Item>
              <Input.TextArea />
            <p >Votre feedback est important pour nous aider à créer plus d'impact</p>
      </Form.Item>
        
        
        <Form.Item >
        <label ><b>Vous nous autorisez à publier le commentaire comme témoignage avec votre photo de profil qui est sur l'app pour diffusion sur la chaîne Boussole Pro et FEA  </b><span class="required">*</span></label>
        <Radio.Group >
      <Radio value={1}>Oui</Radio><br/>
      <Radio value={2}>Non</Radio>
      </Radio.Group>
        </Form.Item>
         
       
        <label ><b>Vos feedbacks pour améliorer votre expérience en tant qu'observateur silencieux</b><span class="required">*</span></label>
          <Form.Item 
          
           rules={[{ required: true, message: 'Please ' }]}>
              
              <Input.TextArea />
        </Form.Item>
        <label ><b>Vos feedbacks pour l'équipe qui a bénéficié du Shoura</b><span class="required">*</span></label>
          <Form.Item 
          
           rules={[{ required: true, message: 'Please ' }]}>
              
              <Input.TextArea />
              <p >Nous allons le transmettre sous forme de compte rendu</p>
        </Form.Item>
        
        <Form.Item >
        <button type="submit" value="Submit" onClick={handleSubmit}  required href="/">SOUMETTRE</button>
            
          </Form.Item>
  
     
      </Col>
        
      </Row>
          
          
      </form>
      );
  }
  
  export default FeedbackMonFeedback
;