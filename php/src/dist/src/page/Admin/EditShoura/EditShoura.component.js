import { Form,Input,Alert, Button, Radio,Rate, Checkbox, Row, Col,message,Space } from 'antd';
import { Link } from 'react-router-dom';
import React, { Component } from 'react'
import axios from 'axios';

     export default class EditShoura extends Component {
       
      constructor(props){
        super(props);        
        this.onChangeInitiateur=this.onChangeInitiateur.bind(this);
        this.onChangeNom=this.onChangeNom.bind(this);
        this.onChangePrénom=this.onChangePrénom.bind(this);
        this.onChangeAvecQui=this.onChangeAvecQui.bind(this);
        this.onChangeProblematique=this.onChangeProblematique.bind(this);
        this.onChangeDomainesExpert=this.onChangeDomainesExpert.bind(this);
        this.onChangeCreneaux=this.onChangeCreneaux.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
          Initiateur:'',
          nom:'',
          Prénom:'',
          AvecQui:'',
          problematique:'',
          domainesExpert:'',
          creneaux:''
         
        }
        
      }
      componentDidMount(){
        console.log(this.props.match.params.id);
        axios.get('http://localhost:8080/BoussolePro-backend/getShouraById.php?id='+this.props.match.params.id)
        .then(response=>{
          this.setState({
                        Initiateur:response.data.initiateur,
                        nom: response.data.nom,
                        Prénom:response.data.prenom,
                        AvecQui:response.data.avecQui,
                        problematique:response.data.problematique,
                        domainesExpert:response.data.domainesExpert,
                        creneaux:response.data.creneaux
                      });
       })
       .catch(function (error){
         console.log(error);
        })
      }
      onChangeInitiateur(e){
        this.setState({
          Initiateur:e.target.value
        })
      };
      onChangeNom(e){
        this.setState({
          nom:e.target.value
        })
      };
      onChangePrénom(e){
        this.setState({
          Prénom:e.target.value
        })
      };
      onChangeAvecQui(e){
        this.setState({
          AvecQui:e.target.value
        })
      };
      onChangeProblematique(e){
        this.setState({
          problematique:e.target.value
        })
      };
      onChangeDomainesExpert(e){
        this.setState({
          domainesExpert:e.target.value
        })
      };
    
      onChangeCreneaux(e){
        this.setState({
          creneaux:e.target.value
        })
      };
     
      onSubmit(e){
        e.preventDefault();
        const EditShoura={
          Initiateur:this.state.Initiateur,
          nom:this.state.nom,
          prenom:this.state.Prénom,
          AvecQui:this.state.AvecQui,
          problematique:this.state.problematique,
          domainesExpert:this.state.domainesExpert,
          creneaux:this.state.creneaux
        };
        console.log(EditShoura);       
        if(  this.state.Initiateur==''|| this.state.nom=='' || this.state.Prénom=='' || this.state.AvecQui=='' || this.state.problematique=='' || this.state.domainesExpert=='' || this.state.creneaux=='' ){
  
          message.error('Vous devez remplir tous les champs obligatoires');
        
        } else {
          message.success('Les informations ont été modifiées avec succès');
        axios.post('http://localhost/BoussolePro-backend/updateShoura.php?id='+this.props.match.params.id,EditShoura).then(res=>console.log(res.data));

        }
      }
      render() {
        console.log(this.state);
         return (
          <div>
	
	
          <div class="testboxM">
         <form   className="ajoutM">
         
             <Row>
         <Col span={24}>
             
             <Alert
             message="Bienvenue sur la page modifier les demandes Shoura Pro"
             description=" Pour Modifier les informations d'une demande Shoura merci de remplir le formulaire suivant."
                   type="info"
                   showIcon
                   />
                   <b/> 
                  
                   <div className="EditM" style={{marginTop:"15px"}}>
   
            <Form.Item  >
          <div class="question">
          <label><b>Qui est-ce qui initie le Shoura Pro ?</b><span class="required">*</span></label> <span style={{fontWeight:"800",color:"black",marginLeft:"70px",marginTop:"80px"}}>{this.state.Initiateur}</span>
          <div class="question-answer">
           <Radio.Group>
            <Space direction="vertical"  >
          <Radio style={{color:"#666"}} value="Moi en tant qu abonné" checked={this.state.Initiateur === "Moi en tant qu abonné"}   onChange={this.onChangeInitiateur}>Vous en tant qu'abonné(e)</Radio>
          <Radio style={{color:"#666"}}   value="Equipe Orga Boussole PRO" checked={this.state.Initiateur === "Equipe Orga Boussole PRO"}   onChange={this.onChangeInitiateur} >Équipe Orga Boussole PRO</Radio>
        </Space>
        </Radio.Group>
          </div>
        </div>
        </Form.Item  >
        
         <Form.Item  >
         <div class="item">
             <label><b>Votre Nom complet</b><span class="required">*</span></label>
             <div class="name-item">
             <input  className="inputB" type="text" name="name" value={this.state.Prénom} onChange={this.onChangePrénom} placeholder="Nom" required/>
               <input  className="inputB" type="text" name="name" value={this.state.nom} onChange={this.onChangeNom} placeholder="Prénom" required/>
             </div>
           </div>
         </Form.Item>
         <Form.Item  >
          <div class="question">
          <label><b>Avec-qui souhaitez vous avoir le FEA Shoura PRO?</b><span class="required">*</span></label>  <span style={{fontWeight:"800",color:"black",marginLeft:"70px",marginTop:"80px"}}>{this.state.AvecQui}</span>
          <div class="question-answer">
           <Radio.Group>
            <Space direction="vertical"  >
          <Radio style={{color:"#666"}} value="Un-e abonné-e" checked={this.state.AvecQui === "Un-e abonné-e"}   onChange={this.onChangeAvecQui}>Un-e abonné-e</Radio>
          <Radio style={{color:"#666"}}   value="Un-e membre de FEA" checked={this.state.AvecQui === "Un-e membre de FEA"}   onChange={this.onChangeAvecQui} >Un-e membre de FEA</Radio>
          <Radio style={{color:"#666"}}   value="Un relais BP" checked={this.state.AvecQui === "Un relais BP"}   onChange={this.onChangeAvecQui} >Un relais BP</Radio>
          <Radio style={{color:"#666"}}  value="Une personne extérieure à FEA" checked={this.state.AvecQui === "Une personne extérieure à FEA"}   onChange={this.onChangeAvecQui}>Une personne extérieure à FEA</Radio>
        </Space>
        </Radio.Group>
          </div>
        </div>
        </Form.Item  >
       
   
       
         <Form.Item >
         <label><b>Quelle est votre problématique?</b><span class="required">*</span></label>
            <Input.TextArea  className="input" type="text" name="Ville" value={this.state.problematique} onChange={this.onChangeProblematique}  required/>
           </Form.Item>
           <Form.Item >
          <label><b>Quels sont les domaines des experts/consultants souhaités?</b><span class="required">*</span></label>
             <Input.TextArea  className="input" type="text" name="Entreprise"  value={this.state.domainesExpert} onChange={this.onChangeDomainesExpert}  required/>
            </Form.Item>
            <Form.Item >
          <label><b>Quelles sont vos préférences pour les créneaux de 15min ? (Plusieurs choix)</b><span class="required">*</span></label>
          <Input  className="input" type="text" name="Ville" value={this.state.creneaux} onChange={this.onChangeCreneaux}  required/>

         </Form.Item>
            
           
   
         
           
         <Form.Item > 
         <div class="btn-block col">
        <Button type="primary" type="submit" onClick={this.onSubmit} required style={{margin:"10px"}}>Soumettre</Button>
        <Link to="/DdShouraPro"><Button required style={{margin:"10px"}} >Annuler</Button></Link>
      </div>
         
           </Form.Item>
   
           </div>
       </Col>
         
       </Row>
           
           
       
         </form>
         </div> 
         </div>
         )
       }
     }
     
