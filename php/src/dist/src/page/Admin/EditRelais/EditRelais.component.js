import { Form,Input,Alert, Button, Radio,Rate, Checkbox, Row, Col,message,Space } from 'antd';
import { Link } from 'react-router-dom';
import React, { Component } from 'react'
import axios from 'axios';

     export default class EditRelais extends Component {
       
      
      constructor(props){
        super(props);        
        this.onChangeInitiateur=this.onChangeInitiateur.bind(this);
        this.onChangeNom=this.onChangeNom.bind(this);
        this.onChangePrénom=this.onChangePrénom.bind(this);
        this.onChangeAvecQui=this.onChangeAvecQui.bind(this);
        this.onChangeObjet=this.onChangeObjet.bind(this);
        this.onChangeCreneaux=this.onChangeCreneaux.bind(this);


       
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
          Initiateur:'',
          nom:'',
          Prénom:'',
          AvecQui:'',
          objet:'',
          creneaux:''
         
        }
        
      }
      componentDidMount(){
        console.log(this.props.match.params.id);
        axios.get('http://localhost/BoussolePro-backend/getRelaisById.php?id='+this.props.match.params.id)
        .then(response=>{
          this.setState({
                        Initiateur:response.data.initiateur,
                        nom: response.data.nom,
                        Prénom:response.data.prenom,
                        AvecQui:response.data.avecQui,
                        objet:response.data.objet,
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
      onChangeObjet(e){
        this.setState({
          objet:e.target.value
        })
      };
    
      onChangeCreneaux(e){
        this.setState({
          creneaux:e.target.value
        })
      };
      
      onSubmit(e){
        e.preventDefault();
        const EditRelais={
          Initiateur:this.state.Initiateur,
          nom:this.state.nom,
          prenom:this.state.Prénom,
          AvecQui:this.state.AvecQui,
          objet:this.state.objet,
          creneaux:this.state.creneaux
        };
        console.log(EditRelais);       
        if(  this.state.Initiateur==''|| this.state.nom=='' || this.state.Prénom=='' || this.state.AvecQui=='' || this.state.objet=='' || this.state.creneaux=='' ){
  
          message.error('Vous devez remplir tous les champs obligatoires');
        
        } else {
          message.success('Les informations ont été modifiées avec succès');
        axios.post('http://localhost/BoussolePro-backend/updateRelais.php?id='+this.props.match.params.id,EditRelais).then(res=>console.log(res.data));

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
             message="Bienvenue sur la page modifier les demandes Relais BP"
             description=" Pour Modifier les informations d'une demande Relais BP merci de remplir le formulaire suivant."
                   type="info"
                   showIcon
                   />
                   <b/> 
                  
                   <div className="EditM" style={{marginTop:"15px"}}>
   
            <Form.Item  >
          <div class="question">
          <label><b>Qui est-ce qui initie le Sprint Pro 15min ?</b><span class="required">*</span></label>         <span style={{fontWeight:"800",color:"black",marginLeft:"70px",marginTop:"80px"}}>{this.state.Initiateur}</span>

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
             <input  className="inputB" type="text" name="name" value={this.state.Prénom} onChange={this.onChangePrénom} placeholder="Prénom" required/>
               <input  className="inputB" type="text" name="name" value={this.state.nom} onChange={this.onChangeNom} placeholder="Nom" required/>
             </div>
           </div>
         </Form.Item>
         <Form.Item  >
          <div class="question">
          <label><b>Avec-qui souhaitez vous avoir le sprint PRO?</b><span class="required">*</span></label>
               <input  className="inputB" type="text" name="name" value={this.state.AvecQui} onChange={this.onChangeAvecQui} placeholder="Nom du relais" required/>
        </div>
        </Form.Item  >
        <Form.Item  >
         <div class="item">
             <label><b>Objet de la demande</b><span class="required">*</span></label>
               <textarea  className="inputB" type="text" name="name" value={this.state.objet} onChange={this.onChangeObjet}  required/>
           </div>
         </Form.Item>
         <Form.Item >
          <label><b>Quelles sont vos préférences pour les créneaux de 15min ? (Plusieurs choix)</b><span class="required">*</span></label>
          <input  className="inputB" type="text" name="Ville" value={this.state.creneaux} onChange={this.onChangeCreneaux}  required/>

         </Form.Item>
           
   
         
           
         <Form.Item > 
         <div class="btn-block col">
        <Button type="primary" type="submit" onClick={this.onSubmit} required style={{margin:"10px"}}>Soumettre</Button>
        <Link to="/DdRelaisBP"><Button required style={{margin:"10px"}} >Annuler</Button></Link>
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
     
