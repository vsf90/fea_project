
import React, { Component } from 'react'
import { Button,Alert,Row,Col  } from 'antd';
import { EditFilled,DeleteFilled,PlusCircleOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import "../Modérateur/Modérateurs.css";
import {Redirect} from 'react-router';
import axios from 'axios';

export default class RecordsListBoost extends Component {
   
    render() {
      
        return (
          
    
     <tr>
     
     <td >{this.props.obj.ID}</td>
     <td >{this.props.obj.confirmationAbonne}</td>
     <td >{this.props.obj.prenom+" "+this.props.obj.nom}</td>
     <td >{this.props.obj.entreprise}</td>
     <td >{this.props.obj.secteur}</td>
     <td >{this.props.obj.contact}</td>
     <td >{this.props.obj.typeCompagne}</td>
     <td >{this.props.obj.objetCompagne}</td>
     <td >{this.props.obj.montant}</td>
     <td >{this.props.obj.commentaire}</td>
     <td >{this.props.obj.date}</td>
     <td > Valider <Link to={"/EditBoost/"+this.props.obj.ID}><EditFilled style={{fontSize:"20px"}}/></Link></td>

 </tr>
   
        )
    }
}
