
import React, { Component } from 'react'
import { Button,Alert,Row,Col  } from 'antd';
import { EditFilled,DeleteFilled,PlusCircleOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import "../Modérateur/Modérateurs.css";
import {Redirect} from 'react-router';
import axios from 'axios';

export default class RecordsListRelais extends Component {
   
    render() {
      
        return (
          
    
     <tr>
     
     <td >{this.props.obj.ID}</td>
     <td >{this.props.obj.initiateur}</td>
     <td >{this.props.obj.prenom+" "+this.props.obj.nom}</td>
     <td >{this.props.obj.avecQui}</td>
     <td >{this.props.obj.objet}</td>
     <td >{this.props.obj.creneaux}</td>
     <td >{this.props.obj.date}</td>
     <td > Valider <Link to={"/EditRelais/"+this.props.obj.ID}><EditFilled style={{fontSize:"20px"}}/></Link></td>

 </tr>
   
        )
    }
}
