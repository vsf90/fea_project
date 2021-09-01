import { Form,Input,Alert, Button, Radio,Rate, Checkbox, Row, Col,message,Space } from 'antd';
import { Link } from 'react-router-dom';
import React, { Component } from 'react'
import axios from 'axios';
import { config } from '../../../config';

     export default class EditMeet extends Component {
       
      
      constructor(props){
        super(props);        
        this.onChangeInitiateur=this.onChangeInitiateur.bind(this);
        this.onChangeNom=this.onChangeNom.bind(this);
        this.onChangePrénom=this.onChangePrénom.bind(this);
        this.onChangeAvecQui=this.onChangeAvecQui.bind(this);
        this.onChangePrenomContactSouhaite=this.onChangePrenomContactSouhaite.bind(this);
        this.onChangeNomContactSouhaite=this.onChangeNomContactSouhaite.bind(this);
        this.onChangeRaisonMeet=this.onChangeRaisonMeet.bind(this);
        this.onChangeAutreInfos=this.onChangeAutreInfos.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
          Initiateur:'',
          nom:'',
          Prénom:'',
          AvecQui:'',
          prenomContactSouhaite:'',
          nomContactSouhaite:'',
          raisonMeet:'',
          autreInfos:''
         
        }
        
      }
      componentDidMount(){
        console.log(this.props.match.params.id);
        axios.get(config+'/BoussolePro-backend/getMeetById.php?id='+this.props.match.params.id)
        .then(response=>{
          this.setState({
                        Initiateur:response.data.initiateur,
                        nom: response.data.nom,
                        Prénom:response.data.prenom,
                        AvecQui:response.data.avecQui,
                        prenomContactSouhaite:response.data.prenomContactSouhaite,
                        nomContactSouhaite:response.data.nomContactSouhaite,
                        raisonMeet:response.data.raisonMeet,
                        autreInfos:response.data.autreInfos                     
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
      onChangePrenomContactSouhaite(e){
        this.setState({
          prenomContactSouhaite:e.target.value
        })
      };
    
      onChangeNomContactSouhaite(e){
        this.setState({
         nomContactSouhaite:e.target.value
        })
      };
      onChangeRaisonMeet(e){
        this.setState({
          raisonMeet:e.target.value
        })
      };
      onChangeAutreInfos(e){
        this.setState({
          autreInfos:e.target.value
        })
      };
      
      onSubmit(e){
        e.preventDefault();
        const EditMeet={
          Initiateur:this.state.Initiateur, 
          nom:this.state.nom,
          prenom:this.state.Prénom,
          AvecQui:this.state.AvecQui,
          prenomContactSouhaite:this.state.prenomContactSouhaite,
          nomContactSouhaite:this.state.nomContactSouhaite,
          raisonMeet:this.state.raisonMeet,
          autreInfos:this.state.autreInfos


        };
        console.log(EditMeet);       
        if(  this.state.Initiateur==''|| this.state.nom=='' || this.state.Prénom=='' || this.state.AvecQui=='' || this.state.raisonMeet=='' ){
  
          message.error('Vous devez remplir tous les champs obligatoires');
        
        } else {
          message.success('Les informations ont été modifiées avec succès');
        axios.post(config+'/BoussolePro-backend/updateMeet.php?id='+this.props.match.params.id,EditMeet).then(res=>console.log(res.data));

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
             message="Bienvenue sur la page modifier les demandes Meet'Up Pro"
             description=" Pour Modifier les informations d'une demande Meet'Up merci de remplir le formulaire suivant."
                   type="info"
                   showIcon
                   />
                   <b/> 
                  
                   <div className="EditM" style={{marginTop:"15px"}}>
   
         
        
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
          <label><b>Avec-qui souhaitez vous avoir le MeetUp PRO?</b><span class="required">*</span></label>  <span style={{fontWeight:"800",color:"black",marginLeft:"70px",marginTop:"80px"}}>{this.state.AvecQui}</span>
          <div class="question-answer">
           <Radio.Group>
            <Space direction="vertical"  >
          <Radio style={{color:"#666"}} value="Un-e abonné-e" checked={this.state.AvecQui === "Un-e abonné-e"}   onChange={this.onChangeAvecQui}>Un-e abonné-e</Radio>
          <Radio style={{color:"#666"}}   value="Un-e membre de FEA" checked={this.state.AvecQui === "Un-e membre de FEA"}   onChange={this.onChangeAvecQui} >Un-e membre de FEA</Radio>
          <Radio style={{color:"#666"}}   value="Un relais BP" checked={this.state.AvecQui === "Un relais BP"}   onChange={this.onChangeAvecQui} >Un relais BP</Radio>
          <Radio style={{color:"#666"}}  value="Une personne extérieure à FEA" checked={this.state.AvecQui === "Une personne extérieure à FEA"}   onChange={this.onChangeAvecQui} >Une personne extérieure à FEA</Radio>
        </Space>
        </Radio.Group>
          </div>
        </div>
        </Form.Item  >
        <Form.Item  >
         <div class="item">
             <label><b>Nom complet du contact souhaité (Si plusieurs, merci de les mentionner)</b></label>
             <div class="name-item">
               <input  className="inputB" type="text" name="name" value={this.state.prenomContactSouhaite} onChange={this.onChangePrenomContactSouhaite}  required/>
               <input  className="inputB" type="text" name="name" value={this.state.nomContactSouhaite} onChange={this.onChangeNomContactSouhaite}  required/>
             </div>
           </div>
         </Form.Item>
   
       
         <Form.Item >
         <label><b>Quelle est la raison professionnelle de ce meet'up pro? </b><span class="required">*</span></label>
            <Input.TextArea  className="input" type="text" name="Ville" value={this.state.raisonMeet} onChange={this.onChangeRaisonMeet}  required/>
           </Form.Item>
           <Form.Item >
          <label><b>Autres infos utiles (Date de dispo, ville, et toute information utile)</b></label>
             <Input.TextArea  className="input" type="text" name="Entreprise"  value={this.state.autreInfos} onChange={this.onChangeAutreInfos}   required/>
            </Form.Item>
           
           
   
         
           
         <Form.Item > 
         <div class="btn-block col">
        <Button type="primary" type="submit" onClick={this.onSubmit} required style={{margin:"10px"}}>Soumettre</Button>
        <Link to="/DdMeetUpPro"><Button required style={{margin:"10px"}} >Annuler</Button></Link>
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
     
