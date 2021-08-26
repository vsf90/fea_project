import { Form,Input,Tablele,Alert, Button, Radio,Rate, Checkbox, Row, Col,message,Space } from 'antd';
import { useState } from 'react';
import axios from 'axios';
import tof1 from "../../image/f6.png";


function FeedbackMonFeedback() {
  const [Nom, setNom] = useState("");
  const [Prénom, setPrénom] = useState("");
  const [AvecQui, setAvecQui] = useState("");
  const [Service, setService] = useState("");
  const [Organisation, setOrganisation] = useState("");
  const [Ponctualité, setPonctualité] = useState("");
  const [Qualité , setQualité ] = useState("");
  const [Informations , setInformations ] = useState("");
  const [Informations1, setInformations1] = useState("");
  const [Importance, setImportance] = useState("");
  const [ValeurAjoutée, setValeurAjoutée] = useState("");
  const [MotsClés, setMotsClés] = useState("");
  const [FeedbackParticulier, setFeedbackParticulier] = useState("");
  const [Autorisation, setAutorisation] = useState("");
  const [Amelioration, setAmelioration] = useState("");
  const [FeedbackEquipe, setFeedbackEquipe] = useState("");


  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
  const [Evaluation, setEvaluation] = useState();
  const handleChange = value => {
    setEvaluation( value );
  };
  const [size, setSize] = useState(100);
 var EvaluationExpression=desc[Evaluation-1];
  console.log(Nom);
  console.log(Prénom);
  console.log(AvecQui);
  console.log(Service);
  console.log(Organisation);
  console.log(Ponctualité);
  console.log(Qualité);
  console.log(Informations);
 console.log(Informations1);
 console.log(Importance);
 //console.log(Evaluation);
 console.log(EvaluationExpression);
 console.log(ValeurAjoutée);
 console.log(MotsClés);
 console.log(FeedbackParticulier);
 console.log(Autorisation);
 console.log(Amelioration);
 console.log(FeedbackEquipe);
 
  const handleFormSubmit=(e)=>{
    e.preventDefault();
    const Feedback={
      nom:Nom,
      prenom:Prénom,
      avecqui:AvecQui,
      service:Service,
      organisation:Organisation,
      ponctualité:Ponctualité,
      qualité:Qualité,
      informations:Informations,
      informations1:Informations1,
      importance:Importance,
      evaluation:EvaluationExpression,
      valeurajoutée:ValeurAjoutée,
      motsclés:MotsClés,
      feedbackparticulier:FeedbackParticulier,
      autorisation:Autorisation,
      amelioration:Amelioration,
      feedbackequipe:FeedbackEquipe
     
    }
    console.log(Feedback);


if(  Nom=='' || Prénom=='' || AvecQui=='' || Service=='' ||Organisation=='' || Ponctualité=='' || Qualité=='' || Informations=='' || Informations1=='' || Importance=='' || Evaluation=='' || FeedbackParticulier=='' || Autorisation=='' ){
  
    message.error('Vous devez remplir les champs obligatoires');
  
  }else{
    message.success('La demande est faite avec succès');
     axios.post('http://localhost:8080/BoussolePro-backend/insertFeedback.php',Feedback).then(res=>console.log(res.data));

    setNom('');
    setPrénom('');
    setAvecQui('');
    setService('');
    setOrganisation('');
    setPonctualité('');
    setQualité('');
    setInformations('');
    setInformations1('');
    setImportance('');
    setEvaluation('');
    setValeurAjoutée('');
    setMotsClés('');
    setFeedbackParticulier('');
    setAutorisation('');
    setAmelioration('');
    setFeedbackEquipe('');
  }
}
 
  

    return (
      <div>
      <Alert style={{marginLeft:"40px"}}
                  message="Mon Feedback sur les services BP"
                  description="Bienvenue sur le Feedback sur les services BP"
                  type="info"
                  showIcon
                  />
      <form action="/" style={{backgroundColor:"white",padding:"10px",width:"960px",marginTop:"20px",borderRadius:"8px",marginLeft:"40px"}}>
            <Row>
        <Col span={24}>
           
            <br/>
            <img className="card-img-top" src={tof1} alt="f1" style={{width:"600px", display:"block", margin:"auto",padding:"auto"}} /><br/>
           
        <h2 class="title">Formulaire de FEEDBACK</h2>
            
            <p>Ce formulaire est envoyé par l’équipe Boussole Pro après chaque Sprint pro 15min, Meet-up Pro et Shoura Pro. Il permet de confirmer l’attribution des points, avoir le retour qualitatif et de collecter les informations pouvant intéressées les autres membres du réseau et ainsi être proactif en les transformant en opportunités. 
                Ce retour permet à l’équipe Boussole Pro de constamment améliorer ses services à la communauté.</p>
     
        <Form.Item name="Nom">
        <div class="item">
         <label>  <b>Votre nom</b><span class="required">*</span></label>
          <div class="name-item">
          <div className="row">
              <div className="col-lg-6" style={{width:"470px",marginBottom:"10px"}} >
            <Input  type="text" name="Nom" placeholder="Nom" value={Nom} onChange={(e)=>setNom(e.target.value)} required/>
            </div>
            <br></br>
            <div className="col-lg-6" style={{width:"470px"}}>
            <Input type="text" name="Prénom" placeholder="Prénom" value={Prénom} onChange={(e)=>setPrénom(e.target.value)} required/>
            </div>
            </div>
          </div>
        </div>
      </Form.Item>
    
        <Form.Item name="Avec qui">
             <label><b>Avec qui?</b><span class="required">*</span></label> 
          <Input value={AvecQui} onChange={(e)=>setAvecQui(e.target.value)} />
        </Form.Item>
        
          <Form.Item >
            <label><b>A quel service avez-vous récemment participé ? </b><span class="required">*</span></label>
              <Radio.Group >
      <Radio value="Sprint Pro" checked={Service === "Sprint Pro"}   onChange={(e)=>setService(e.target.value)}>Sprint Pro</Radio><br/>
      <Radio value="Meet up Pro" checked={Service === "Meet up Pro"}   onChange={(e)=>setService(e.target.value)}>Meet'up Pro</Radio><br/>
      <Radio value="Shoura Pro" checked={Service === "Shoura Pro"}   onChange={(e)=>setService(e.target.value)}>Shoura Pro</Radio><br/>
      <Radio value="Shoura Pro Observateur silencieux" checked={AvecQui === "Shoura Pro Observateur silencieux"}   onChange={(e)=>setAvecQui(e.target.value)}>Shoura Pro Observateur silencieux</Radio><br/>
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
      <th scope="col" style={{marginLeft:"20px"}} ><span style={{marginRight:"40px"}}>Non Satisfait</span> <span style={{marginLeft:"20px"}}>Satisfait</span> <span style={{float:"right",marginRight:"50px"}}>Trés Satisfait</span></th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" >Organisation par l’équipe Boussole Pro</th>
      <Radio.Group >
      <Space size={size}>
      <td>  <Radio style={{marginLeft:"100px"}} value="Non Satisfait" checked={Organisation === "Non Satisfait"}   onChange={(e)=>setOrganisation(e.target.value)} ></Radio></td>
      <td>  <Radio  value="Satisfait" checked={Organisation === "Satisfait"}   onChange={(e)=>setOrganisation(e.target.value)}></Radio></td>
      <td>  <Radio  value="Trés Satisfait" checked={Organisation === "Trés Satisfait"}   onChange={(e)=>setOrganisation(e.target.value)}></Radio></td>
   </Space>
    </Radio.Group >
    </tr>
    <tr>
      <th scope="row">Ponctualité des abonné-e-s</th>
      <Radio.Group >
      <Space size={size}>
      <td>  <Radio style={{marginLeft:"100px"}} value="Non Satisfait" checked={Ponctualité === "Non Satisfait"}   onChange={(e)=>setPonctualité(e.target.value)}></Radio></td>
      <td>  <Radio value=" Satisfait" checked={Ponctualité === "Satisfait"}   onChange={(e)=>setPonctualité(e.target.value)}></Radio></td>
      <td>  <Radio value="Trés Satisfait" checked={Ponctualité === "Trés Satisfait"}   onChange={(e)=>setPonctualité(e.target.value)}></Radio></td>
      </Space>
    </Radio.Group >
    </tr>
    <tr>
      <th scope="row">Qualité de l’échange</th>
      <Radio.Group >
      <Space size={size}>
      <td>  <Radio style={{marginLeft:"100px"}} value="Non Satisfait" checked={Qualité === "Non Satisfait"}   onChange={(e)=>setQualité(e.target.value)}></Radio></td>
      <td>  <Radio  value=" Satisfait" checked={Qualité === "Satisfait"}   onChange={(e)=>setQualité(e.target.value)}></Radio></td>
      <td>  <Radio value="Trés Satisfait" checked={Qualité === "Trés Satisfait"}   onChange={(e)=>setQualité(e.target.value)}></Radio></td>
      </Space>
    </Radio.Group >
    </tr>
    <tr>
      <th scope="row">Informations échangées</th>
      <Radio.Group >
      <Space size={size}>
      <td>  <Radio style={{marginLeft:"100px"}} value="Non Satisfait" checked={Informations === "Non Satisfait"}   onChange={(e)=>setInformations(e.target.value)}></Radio></td>
      <td>  <Radio value=" Satisfait" checked={Informations === "Satisfait"}   onChange={(e)=>setInformations(e.target.value)}></Radio></td>
      <td>  <Radio value="Trés Satisfait" checked={Informations === "Trés Satisfait"}   onChange={(e)=>setInformations(e.target.value)}></Radio></td>
      </Space>
    </Radio.Group >
    </tr>
  </tbody>
</table>
   
        <Form.Item >
        <label ><b>Avez-vous des informations susceptibles de se transformer en opportunité pour les autres abonnes Boussole Pro ? (emplois, stages, opportunité de développement de business, conseil important à tous...). Si vous répondez OUI vous serez contacté par l’équipe Boussole Pro.  </b><span className="required">*</span></label>
        <Radio.Group >
      <Radio value="OUI" checked={Informations1 === "OUI"}   onChange={(e)=>setInformations1(e.target.value)}>Oui</Radio><br/>
      <Radio value="NON" checked={Informations1 === "NON"}   onChange={(e)=>setInformations1(e.target.value)}>Non</Radio>
      </Radio.Group>
        </Form.Item>
        <Form.Item >
        <label ><b>Est ce qu’il a été convenu entre abonnés de vous rencontrer sans le support de Boussole Pro ? (Cette question est importante car elle nous permet de confirmer notre utilité à créer des interactions au sein de notre communauté)</b><span class="required">*</span></label>
        <Radio.Group >
      <Radio value="OUI" checked={Importance === "OUI"}   onChange={(e)=>setImportance(e.target.value)}>Oui</Radio><br/>
      <Radio value="NON" checked={Importance === "NON"}   onChange={(e)=>setImportance(e.target.value)}>Non</Radio>
      </Radio.Group>
        </Form.Item>
        <Form.Item >
        <label ><b>Comment évaluez vous le restaurant ou le café? </b><span class="required">*</span></label>
        <br/>
        <span>
       
        <Rate style={{color:'yellow'}} tooltips={desc} onChange={handleChange} value={Evaluation} />
        {Evaluation ? <span classNameName="ant-rate-text">{desc[Evaluation - 1]}</span> : ''}
      </span>
      </Form.Item>
        
          <Form.Item 
         
           rules={[{ required: true, message: 'Please ' }]}>
               <label ><b>Qu'est ce que ce service vous as apporté personnellement? </b></label>
              <Input.TextArea value={ValeurAjoutée} onChange={(e)=>setValeurAjoutée(e.target.value)}  required />
        </Form.Item>
        <label ><b>Mots clés du Sprint</b></label>
        <Form.Item >
        <Input value={MotsClés} onChange={(e)=>setMotsClés(e.target.value)} />
        <p >Merci de préciser les mots clés résumant vos échange (ex: partage de contact, start up, entretien....)</p>
        </Form.Item>
        <label ><b>Avez-vous un feedback particulier ?</b> (Tout ce qui peut vous passer par la tête est important ) <span class="required">*</span> </label>
          <Form.Item>
              <Input.TextArea value={FeedbackParticulier} onChange={(e)=>setFeedbackParticulier(e.target.value)} />
            <p >Votre feedback est important pour nous aider à créer plus d'impact</p>
      </Form.Item>
        
        
        <Form.Item >
        <label ><b>Vous nous autorisez à publier le commentaire comme témoignage avec votre photo de profil qui est sur l'app pour diffusion sur la chaîne Boussole Pro et FEA  </b><span class="required">*</span></label>
        <Radio.Group >
      <Radio value="OUI" checked={Autorisation === "OUI"}   onChange={(e)=>setAutorisation(e.target.value)}>Oui</Radio><br/>
      <Radio value="NON" checked={Autorisation === "NON"}   onChange={(e)=>setAutorisation(e.target.value)}>Non</Radio>
      </Radio.Group>
        </Form.Item>
         
       
        <label ><b>Vos feedbacks pour améliorer votre expérience en tant qu'observateur silencieux</b></label>
          <Form.Item 
          
           rules={[{ required: true, message: 'Please ' }]}>
              
              <Input.TextArea value={Amelioration} onChange={(e)=>setAmelioration(e.target.value)} />
        </Form.Item>
        <label ><b>Vos feedbacks pour l'équipe qui a bénéficié du Shoura</b></label>
          <Form.Item 
          
           rules={[{ required: true, message: 'Please ' }]}>
              
              <Input.TextArea value={FeedbackEquipe} onChange={(e)=>setFeedbackEquipe(e.target.value)} />
              <p >Nous allons le transmettre sous forme de compte rendu</p>
        </Form.Item>
        
        <Form.Item >
        <button type="submit" value="Submit" onClick={handleFormSubmit}  required href="/" style={{marginLeft:"380px"}}>SOUMETTRE</button>
            
          </Form.Item>
  
     
      </Col>
        
      </Row>
          
          
      </form>
      </div>
      );
  }
  
  export default FeedbackMonFeedback;