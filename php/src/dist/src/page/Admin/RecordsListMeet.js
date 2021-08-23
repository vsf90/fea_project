
import React, { Component } from 'react'
import { Button,Alert,Row,Col  } from 'antd';
import { EditFilled,DeleteFilled,PlusCircleOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import "../Modérateur/Modérateurs.css";
import {Redirect} from 'react-router';
import axios from 'axios';

export default class RecordsListMeet extends Component {
   
    render() {
      
        return (
          
    
     <tr key={this.props.key}>
     
     <td >{this.props.obj.ID}</td>
     <td >{this.props.obj.prenom+" "+this.props.obj.nom}</td>
     <td >{this.props.obj.avecQui}</td>
     <td >{this.props.obj.prenomContactSouhaite}</td>
     <td >{this.props.obj.nomContactSouhaite}</td>
     <td >{this.props.obj.raisonMeet}</td>
     <td >{this.props.obj.autreInfos}</td>
     <td >{this.props.obj.date}</td>
     <td > Valider <Link to={"/EditMeet/"+this.props.obj.ID}><EditFilled style={{fontSize:"20px"}}/></Link></td>

  
 </tr>
   
        )
    }
}
