import React, { Component } from 'react'
import { Button,Alert,Row,Col  } from 'antd';
import { EditFilled,DeleteFilled,PlusCircleOutlined} from '@ant-design/icons';
import "../Modérateur/Modérateurs.css";
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router';
import axios from 'axios';
import ss from '../../img/picturesExperts/1.jpg';

export default class RecordsListInscrit extends Component {
    refreshPage(){ 
        window.location.reload(); 
    }
    constructor(props){
        super(props);
        this.delete=this.delete.bind(this);
        this.state={
            redirect:false
        }
    }

    delete(){
        axios.get('http://localhost/BoussolePro-backend/deleteInscrit.php/?id='+this.props.obj.ID)
      .then(console.log('deleted'))
     .catch(err=>console.log(err))
        }
    render() {
        const {redirect}=this.state;
        if(redirect){
            return <Redirect to='/ListInscrit' />;
        }
        return (
          
     <tr>
      <th scope="row">{this.props.obj.ID}</th>
      <td><img src={this.props.obj.urlImage} style={{maxHeight:"40px"}}></img></td>
      <td>{this.props.obj.prenom}</td>
      <td>{this.props.obj.nom}</td>
      <td>{this.props.obj.email}</td>
      <td>{this.props.obj.telephone}</td>
      <td>{this.props.obj.type}</td>
      <td>{this.props.obj.verset}</td>
      <td>{this.props.obj.pays}</td>
      <td>{this.props.obj.ville}</td>
      <td>{this.props.obj.entreprise}</td>
      <td>{this.props.obj.objetEntreprise}</td> 
      <td>{this.props.obj.activiteProfessionnelle}</td>
      <td>{this.props.obj.secteur}</td>
      <td>{this.props.obj.expertiseSouhaitez}</td>
      <td>{this.props.obj.expertise}</td>
      <td>{this.props.obj.centresInteret}</td>
      <td>{this.props.obj.confirmation}</td>
      <td>{this.props.obj.membreFEA}</td>
      <td>{this.props.obj.abonnement}</td>
      <td>{this.props.obj.topVille}</td>
      <td>{this.props.obj.confirmationLoi}</td>
      <td>{this.props.obj.PrenomContact1}  {this.props.obj.NomContact1}</td>
      <td>{this.props.obj.TeleContact1}</td>
      <td>{this.props.obj.PrenomContact2}  {this.props.obj.NomContact2}</td>
      <td>{this.props.obj.TeleContact2}</td>
      <td>{this.props.obj.chosesessentielles}</td>
      <td>{this.props.obj.CadreTravail}</td>
      <td>{this.props.obj.FontConfiance}</td>
      <td>{this.props.obj.ReseauQualite}</td>
      <td>{this.props.obj.InformationImportante}</td>
      <td>{this.props.obj.NouveauxClients}</td>
      <td>{this.props.obj.AiderDevelopper}</td>
      <td>{this.props.obj.Benefices}</td>




      <td><Link to={"/EditInscrit/"+this.props.obj.ID}><EditFilled style={{fontSize:"20px"}}/></Link>

       <button id="delete" onClick={this.delete}
        style={{backgroundColor:"transparent",color:"#0d6efd",padding:"2px"}} >
            <DeleteFilled onClick={ this.refreshPage } style={{fontSize:"20px"}}/></button></td>
     
    </tr>
   
        )
    }
}
