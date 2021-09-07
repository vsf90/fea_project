
import React, { Component } from 'react'
import { Button,Alert,Row,Col  } from 'antd';
import { EditFilled,DeleteFilled,PlusCircleOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import "../Modérateur/Modérateurs.css";
import {Redirect} from 'react-router';
import axios from 'axios';
import { config } from '../../config';

export default class RecordsListSprint extends Component {
    refreshPage(){ 
        window.location.reload(); 
    }
    constructor(props){
        super(props);
        this.valider=this.valider.bind(this);
        this.state={
            redirect:false
        }
    }
    valider(){
        axios.get(config+'/BoussolePro-backend/ValiderSprint.php/?id='+this.props.obj.ID)
  .then(res=>{
      console.log('valider');
      this.refreshPage();
  }
      
    )
 .catch(err=>console.log(err))
    }
   
    render() {
      
        return (
          
    
     <tr key={this.props.obj.ID}>
     
     <td >{this.props.obj.ID}</td>
     <td >{this.props.obj.initiateur}</td>
     <td >{this.props.obj.prenom+" "+this.props.obj.nom}</td>
     <td >{this.props.obj.avecQui}</td>
     <td >{this.props.obj.prenomAbonne}</td>
     <td >{this.props.obj.rangAbonne}</td>
     <td >{this.props.obj.prenomExterieure}</td>
     <td >{this.props.obj.raison}</td>
     <td >{this.props.obj.creneaux}</td>
     <td >{this.props.obj.date}</td>
     <td >{this.props.obj.valider}</td>
     <td > <button id="valider" onClick={this.valider}  
     style={{backgroundColor:"transparent",color:"#0d6efd",padding:"2px"}} >
         Valider</button><Link to={"/EditSprint/"+this.props.obj.ID}>
     <EditFilled style={{fontSize:"20px"}}/></Link></td>

  
 </tr>
   
        )
    }
}
