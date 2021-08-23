import { Form,Input,Alert, Button, Radio,Rate, Checkbox, Row, Col,message,Space } from 'antd';
import { Link } from 'react-router-dom';
import React, { Component } from 'react'
import axios from 'axios';

     export default class EditSprint extends Component {
       
      
      constructor(props){
        super(props);        
        this.onChangeInitiateur=this.onChangeInitiateur.bind(this);
        this.onChangeNom=this.onChangeNom.bind(this);
        this.onChangePrénom=this.onChangePrénom.bind(this);
        this.onChangeAvecQui=this.onChangeAvecQui.bind(this);
        this.onChangePrenomAbonne=this.onChangePrenomAbonne.bind(this);
        this.onChangeRangAbonne=this.onChangeRangAbonne.bind(this);
        this.onChangePrenomExterieure=this.onChangePrenomExterieure.bind(this);
        this.onChangeRaison=this.onChangeRaison.bind(this);
        this.onChangeCreneaux=this.onChangeCreneaux.bind(this);


       
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
          Initiateur:'',
          nom:'',
          Prénom:'',
          AvecQui:'',
          prenomAbonne:'',
          rangAbonne:'',
          prenomExterieure:'',
          raison:'',
          creneaux:''
         
        }
        
      }
      componentDidMount(){
        console.log(this.props.match.params.id);
        axios.get('http://localhost:8080/BoussolePro-backend/getSprintById.php?id='+this.props.match.params.id)
        .then(response=>{
          this.setState({
                        Initiateur:response.data.initiateur,
                        nom: response.data.nom,
                        Prénom:response.data.prenom,
                        AvecQui:response.data.avecQui,
                        prenomAbonne:response.data.prenomAbonne,
                        rangAbonne:response.data.rangAbonne,
                        prenomExterieure:response.data.prenomExterieure,
                        raison:response.data.raison,
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
      onChangePrenomAbonne(e){
        this.setState({
          prenomAbonne:e.target.value
        })
      };
      onChangeRangAbonne(e){
        this.setState({
          rangAbonne:e.target.value
        })
      };
      onChangePrenomExterieure(e){
        this.setState({
          prenomExterieure:e.target.value
        })
      };
      onChangeRaison(e){
        this.setState({
          raison:e.target.value
        })
      };
      onChangeCreneaux(e){
        this.setState({
          creneaux:e.target.value
        })
      };
     
      onSubmit(e){
        e.preventDefault();
        const EditSprint={
          Initiateur:this.state.Initiateur,
          nom:this.state.nom,
          prenom:this.state.Prénom,
          AvecQui:this.state.AvecQui,
          prenomAbonne:this.state.prenomAbonne,
          rangAbonne:this.state.rangAbonne,
          prenomExterieure:this.state.prenomExterieure,
          raison:this.state.raison,
          creneaux:this.state.creneaux
        };
        console.log(EditSprint);       
        if(  this.state.Initiateur===''|| this.state.nom==='' || this.state.Prénom==='' || this.state.AvecQui==='' || this.state.raison==='' || this.state.creneaux==='' ){
  
          message.error('Vous devez remplir tous les champs obligatoires');
        
        } else {
          message.success('Les informations ont été modifiées avec succès');
        axios.post('http://localhost:8080/BoussolePro-backend/updateSprint.php?id='+this.props.match.params.id,EditSprint).then(res=>console.log(res.data));

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
             message="Bienvenue sur la page modifier les demandes Sprint Pro"
             description=" Pour Modifier les informations d'une demande Sprint merci de remplir le formulaire suivant."
                   type="info"
                   showIcon
                   />
                   <b/> 
                  
                   <div className="EditM" style={{marginTop:"15px"}}>
   
            <Form.Item  >
          <div class="question">
          <label><b>Qui est-ce qui initie le Sprint Pro 15min ?</b><span class="required">*</span></label> <span style={{fontWeight:"800",color:"black",marginLeft:"70px",marginTop:"80px"}}>{this.state.Initiateur}</span>
          <div class="question-answer">
           <Radio.Group>
            <Space direction="vertical"  >
          <Radio style={{color:"#666"}} value="Moi en tant qu abonné" checked={this.state.Initiateur === "Moi en tant qu abonné"}   onChange={this.onChangeInitiateur}>Vous en tant qu'abonné(e)</Radio>
          <Radio style={{color:"#666"}}   value="Equipe Orga Boussole PRO" checked={this.state.Initiateur === "Equipe Orga Boussole PRO"}   onChange={this.onChangeInitiateur} >Équipe Orga Boussole PRO</Radio>
          
        </Space>
        </Radio.Group>
          </div>
        </div>
        </Form.Item>
        
         <Form.Item  >
         <div class="item">
             <label><b>Votre Nom complet</b><span class="required">*</span></label> 
             <div class="name-item">
             <input  className="inputB" type="text" name="name" value={this.state.Prénom} onChange={this.onChangePrénom} placeholder="Prénom" required/>
               <input  className="inputB" type="text" name="name" value={this.state.nom} onChange={this.onChangeNom} placeholder="Nom" required/>
             </div>
           </div>
         </Form.Item>
         <Form.Item  >
          <div class="question">
          <label><b>Avec-qui souhaitez vous avoir le sprint PRO?</b><span class="required">*</span></label> <span style={{fontWeight:"800",color:"black",marginLeft:"70px",marginTop:"80px"}}>{this.state.AvecQui}</span>
          <div class="question-answer">
           <Radio.Group>
            <Space direction="vertical"  >
          <Radio style={{color:"#666"}} value="Un-e abonné-e" checked={this.state.AvecQui === "Un-e abonné-e"}   onChange={this.onChangeAvecQui}>Un-e abonné-e</Radio>
          <Radio style={{color:"#666"}}   value="Un-e membre de FEA" checked={this.state.AvecQui === "Un-e membre de FEA"}   onChange={this.onChangeAvecQui}>Un-e membre de FEA</Radio>
          <Radio style={{color:"#666"}}   value="Un relais BP" checked={this.state.AvecQui === "Un relais BP"}   onChange={this.onChangeAvecQui} >Un relais BP</Radio>
          <Radio style={{color:"#666"}}  value="Une personne extérieure à FEA" checked={this.state.AvecQui === "Une personne extérieure à FEA"}   onChange={this.onChangeAvecQui} >Une personne extérieure à FEA</Radio>
        </Space>
        </Radio.Group>
          </div>
        </div> 
        </Form.Item  >
        <Form.Item  >
         <div class="item">
             <label><b>Dans le cas d’un abonné merci d’indiquer son prénom et son rang visible sur son profil sur l'appli</b></label>
             <div class="name-item">
               <input  className="inputB" type="text" name="name" value={this.state.prenomAbonne} onChange={this.onChangePrenomAbonne} placeholder="Prénom de l'abonné" required/>
               <input  className="inputB" type="text" name="name" value={this.state.rangAbonne} onChange={this.onChangeRangAbonne} placeholder="RANG (Ne rien mettre si APPLI non disponible encore)" required/>
             </div>
           </div>
         </Form.Item>
   
       
         <Form.Item >
         <label><b>Dans le cas d’une personne extérieure merci d’indiquer son prénom et son numéro de téléphone</b></label>
            <Input  className="input" type="text" name="Ville" value={this.state.prenomExterieure} onChange={this.onChangePrenomExterieure}  required/>
           </Form.Item>
           <Form.Item >
          <label><b>Pourquoi souhaitez-vous ce sprint Pro?</b><span class="required">*</span></label>
             <Input  className="input" type="text" name="Entreprise"  value={this.state.raison} onChange={this.onChangeRaison}   required/>
            </Form.Item>
            <Form.Item >
          <label><b>Quelles sont vos préférences pour les créneaux de 15min ? (Plusieurs choix)</b><span class="required">*</span></label>
          <Input  className="input" type="text" name="Ville" value={this.state.creneaux} onChange={this.onChangeCreneaux}  required/>

         </Form.Item>
           
         <Form.Item > 
         <div class="btn-block col">
        <Button type="primary" type="submit" onClick={this.onSubmit} required style={{margin:"10px"}}>Soumettre</Button>
        <Link to="/DdSprintPro"><Button required style={{margin:"10px"}} >Annuler</Button></Link>
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
     
