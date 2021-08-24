import { Form,Input,Alert, Button, Radio,Rate, Checkbox, Row, Col,message,Space } from 'antd';
import { Link } from 'react-router-dom';
import React, { Component } from 'react'
import axios from 'axios';

     export default class EditBoost extends Component {
       
      
      constructor(props){
        super(props);        
        this.onChangeConfirmationAbonne=this.onChangeConfirmationAbonne.bind(this);
        this.onChangeNom=this.onChangeNom.bind(this);
        this.onChangePrénom=this.onChangePrénom.bind(this);
        this.onChangeEntreprise=this.onChangeEntreprise.bind(this);
        this.onChangeSecteur=this.onChangeSecteur.bind(this);
        this.onChangeContact=this.onChangeContact.bind(this);
        this.onChangeTypeCompagne=this.onChangeTypeCompagne.bind(this);
        this.onChangeObjetCompagne=this.onChangeObjetCompagne.bind(this);
        this.onChangeMontant=this.onChangeMontant.bind(this);
        this.onChangeCommentaire=this.onChangeCommentaire.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
          confirmationAbonne:'',
          nom:'',
          Prénom:'',
          entreprise:'',
          secteur:'',
          contact:'',
          typeCompagne:'',
          objetCompagne:'',
          montant:'',
          commentaire:''
         
        }
        
      }
      componentDidMount(){
        console.log(this.props.match.params.id);
        axios.get('http://localhost/BoussolePro-backend/getBoostById.php?id='+this.props.match.params.id)
        .then(response=>{
          this.setState({
                        confirmationAbonne:response.data.confirmationAbonne,
                        nom: response.data.nom,
                        Prénom:response.data.prenom,
                        entreprise:response.data.entreprise,
                        secteur:response.data.secteur,
                        contact:response.data.contact,
                        typeCompagne:response.data.typeCompagne,
                        objetCompagne:response.data.objetCompagne,
                        montant:response.data.montant,
                        commentaire:response.data.commentaire


                       });
       })
       .catch(function (error){
         console.log(error);
        })
      }
      onChangeConfirmationAbonne(e){
        this.setState({
          confirmationAbonne:e.target.value
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
      onChangeEntreprise(e){
        this.setState({
          entreprise:e.target.value
        })
      };
      onChangeSecteur(e){
        this.setState({
          secteur:e.target.value
        })
      };
    
      onChangeContact(e){
        this.setState({
         contact:e.target.value
        })
      };
      onChangeTypeCompagne(e){
        this.setState({
          typeCompagne:e.target.value
        })
      };
      onChangeObjetCompagne(e){
        this.setState({
          objetCompagne:e.target.value
        })
      };
      onChangeMontant(e){
        this.setState({
          montant:e.target.value
        })
      }; onChangeCommentaire(e){
        this.setState({
          commentaire:e.target.value
        })
      };
      
      onSubmit(e){
        e.preventDefault();
        const EditBoost={
          confirmationAbonne:this.state.confirmationAbonne, 
          nom:this.state.nom,
          prenom:this.state.Prénom,
          entreprise:this.state.entreprise,
          secteur:this.state.secteur,
          contact:this.state.contact,
          typeCompagne:this.state.typeCompagne,
          objetCompagne:this.state.objetCompagne,
          montant:this.state.montant,
          commentaire:this.state.commentaire
        };
        console.log(EditBoost);       
        if(  this.state.confirmationAbonne==''|| this.state.nom=='' || this.state.Prénom=='' || this.state.entreprise=='' || this.state.secteur=='' || this.state.contact=='' || this.state.objetCompagne=='' ){
  
          message.error('Vous devez remplir tous les champs obligatoires');
        
        } else {
          message.success('Les informations ont été modifiées avec succès');
        axios.post('http://localhost/BoussolePro-backend/updateBoost.php?id='+this.props.match.params.id,EditBoost).then(res=>console.log(res.data));

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
             message="Bienvenue sur la page modifier les demandes Boost Pro"
             description=" Pour Modifier les informations d'une demande Boost merci de remplir le formulaire suivant."
                   type="info"
                   showIcon
                   />
                   <b/> 
                  
                   <div className="EditM" style={{marginTop:"15px"}}>
   
            <Form.Item  >
          <div class="question">
          <label><b>Êtes-vous bien abonné(e) de Boussole PRO ? (Ce service est réservé exclusivement aux abonné(e)s)</b><span class="required">*</span></label> <span style={{fontWeight:"800",color:"black",marginLeft:"70px",marginTop:"80px"}}>{this.state.confirmationAbonne}</span>
          <div class="question-answer">
           
           
              
            <Radio.Group> 
            <Space direction="vertical"  >
          <Radio style={{color:"#666"}} value="OUI" checked={this.state.confirmationAbonne === "OUI"}   onChange={this.onChangeConfirmationAbonne}>OUI</Radio>
          <Radio style={{color:"#666"}}   value="NON" checked={this.state.confirmationAbonne === "NON"}   onChange={this.onChangeConfirmationAbonne} >NON</Radio>
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
       
         <Form.Item >
         <label><b>Votre entreprise</b><span class="required">*</span></label>
            <Input  className="input" type="text" name="Ville" value={this.state.entreprise} onChange={this.onChangeEntreprise} placeholder="entreprise" required/>
           </Form.Item>
           <Form.Item >
          <label><b>Votre secteur d'activité</b><span class="required">*</span></label>
             <Input  className="input" type="text" name="Entreprise"  value={this.state.secteur} onChange={this.onChangeSecteur}  placeholder="secteur d'activité" required/>
            </Form.Item>
            <Form.Item >
          <label><b>Qui sera notre contact pour toute demande de support concernant la campagne?</b><span class="required">*</span></label>
             <Input.TextArea  className="input" type="text" name="Entreprise"  value={this.state.contact} onChange={this.onChangeContact}   required/>
            </Form.Item>
            <Form.Item  >
          <div class="question">
          <label><b>Quel type de campagne souhaitez-vous lancer?</b></label> <span style={{fontWeight:"800",color:"black",marginLeft:"70px",marginTop:"80px"}}>{this.state.typeCompagne}</span>
          <div class="question-answer">
           
          
              <Radio.Group> 
              <Space direction="vertical"  >
          <Radio style={{color:"#666"}} value="Développer les ventes de mes produits et services" checked={this.state.typeCompagne === "Développer les ventes de mes produits et services"}   onChange={this.onChangeTypeCompagne}>Développer les ventes de mes produits et services</Radio>
          <Radio style={{color:"#666"}}   value="Autre" checked={this.state.typeCompagne === "Autre"}   onChange={this.onChangeTypeCompagne} >Autre</Radio>
          </Space>
          </Radio.Group>       
      
          </div>
        </div>
        </Form.Item  >
            <Form.Item >
          <label><b>Quel est l'objet de la campagne et en quoi est-ce important pour vous ?</b><span class="required"> *</span></label>
             <Input.TextArea  className="input" type="text" name="Entreprise"  value={this.state.objetCompagne} onChange={this.onChangeObjetCompagne}   required/>
            </Form.Item>  
            <Form.Item >
          <label><b>Souhaitez-vous donner un pourcentage ou un montant à Boussole Pro? Si oui, lequel?</b></label>
             <Input  className="input" type="text" name="Entreprise"  value={this.state.montant} onChange={this.onChangeMontant}   required/>
            </Form.Item>
            <Form.Item >
          <label><b>Tout commentaire est le bienvenue si vous en avez</b></label>
             <Input.TextArea  className="input" type="text" name="Entreprise"  value={this.state.commentaire} onChange={this.onChangeCommentaire}   required/>
            </Form.Item>
            
           
   
         
           
         <Form.Item > 
         <div class="btn-block col">
        <Button type="primary" type="submit" onClick={this.onSubmit} required style={{margin:"10px"}}>Soumettre</Button>
        <Link to="/DdBoostPro"><Button required style={{margin:"10px"}} >Annuler</Button></Link>
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
     
