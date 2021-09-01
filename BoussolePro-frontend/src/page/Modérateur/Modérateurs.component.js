import { Button,Alert,Row,Col  } from 'antd';
import { EditFilled,DeleteFilled,PlusCircleOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
 import "./Modérateurs.css";
 import RecordsList from '../Admin/RecordsList.js'

import React, { Component } from 'react'
import { config } from '../../config';

export default class Modérateurs extends Component {
  

 constructor(props){
  super(props);
  this.state={listModerateur: []};
 
}

componentDidMount(){
  axios.get(config+'/BoussolePro-backend/listModérateur.php')
  .then(response=>{
    console.log("*-*-*-*->",response);
    this.setState({listModerateur: response.data});
 })
 .catch(function (error){
   console.log(error);
  })
  }
  
  ModerateursList(){
    console.log(this.state.listModerateur);
     return this.state.listModerateur.map(function(object,i){
      return <RecordsList obj={object} key={i} />
     
     });
  }

  render() {
    return (
      <div className="Modérateurs">
    
    <div>
    <Row>
   <Col span={24}>
    <Alert
                message="Bienvenue sur page de la liste des Modérateurs Boussole Pro"
                 
                type="info"
                showIcon
                />
                 <br/>
                 <br/>
 
    <div className="ajouteM">
    <b style={{padding: "5px",margin:"5px"}}>Ajouter Modérateur</b>
    <Link  to="/AddModérateur"><PlusCircleOutlined style={{fontSize:"30px"}} /></Link>
    </div> 
    <hr></hr>
       <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Prénom</th>
      <th scope="col">Nom</th>
      <th scope="col">Email</th>
      <th scope="col">Pays</th>
      <th scope="col">Ville</th>
      <th scope="col">Entreprise</th>
      <th scope="col">Objet de l'entreprise</th>
      <th scope="col">Activité professionnelle</th>
      <th scope="col" style={{textAlign:"center"}}>Action</th>
    </tr>
  </thead>
  <tbody>
  {this.ModerateursList()}
    
  </tbody>
</table>
</Col></Row>
</div >


</div>

     
    )
  }
}
