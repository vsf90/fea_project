
import React, { Component } from 'react'
import { Button,Alert,Row,Col  } from 'antd';
import { EditFilled,DeleteFilled,PlusCircleOutlined} from '@ant-design/icons';
import { Link, Switch ,Route } from 'react-router-dom';
import axios from 'axios';
import "../Modérateur/Modérateurs.css";
import {Redirect} from 'react-router';
import EditModérateur from '../Modérateur/EditModérateur/EditModérateur.component';
import { config } from '../../config';
export default class RecordsList extends Component {
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
        axios.get(config+'/BoussolePro-backend/deleteModerateur.php/?id='+this.props.obj.ID)
  .then(console.log('deleted'))
 .catch(err=>console.log(err))
    }
    
    render() {
        
        const {redirect}=this.state;
        if(redirect){
            return <Redirect to='/Modérateur' />;
        }
        return (
          
     <tr>
      <th scope="row">{this.props.obj.ID}</th>
      <td>{this.props.obj.prenom}</td>
      <td>{this.props.obj.nom}</td>
      <td>{this.props.obj.email}</td>
      <td>{this.props.obj.pays}</td>
      <td>{this.props.obj.ville}</td>
      <td>{this.props.obj.entreprise}</td>
      <td>{this.props.obj.objetEntreprise}</td>
      <td>{this.props.obj.activiteProfessionnelle}</td>
      
      <td><Link to={"/EditModérateur/"+this.props.obj.ID} ><EditFilled style={{fontSize:"20px"}}/></Link> <button id="delete" onClick={this.delete}  style={{backgroundColor:"transparent",color:"#0d6efd",padding:"2px"}} ><DeleteFilled onClick={ this.refreshPage } style={{fontSize:"20px"}}/></button> </td>
      {/*{"/EditModérateur/"+this.props.obj.ID}*/}
     
   
    </tr>
   
        )
    }
}
