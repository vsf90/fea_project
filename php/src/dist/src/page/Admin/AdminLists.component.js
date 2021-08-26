import React, { Component } from 'react'
import { Button,Alert} from 'antd';
import { EditFilled,DeleteFilled,PlusCircleOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import "./AdminList.css";
import axios from 'axios';
 import RecordsListAdmin from '../Admin/RecordsListAdmin.js'
export default class Modérateurs extends Component {
   
 // data=[];
 constructor(props){
  super(props);
  this.state={listAdmin: []};
  //console.log(this.state.demandeSprint);
}

componentDidMount(){
  axios.get('http://localhost:8080/BoussolePro-backend/listAdmin.php')
  .then(response=>{
    this.setState({listAdmin: response.data});
 })
 .catch(function (error){
   console.log(error);
  })
  }
  
  AdminsList(){
    console.log(this.state.listAdmin);
     return this.state.listAdmin.map(function(object,i){
      return <RecordsListAdmin obj={object} key={i} />
     
     });
  }
  render() {
    return (
        <div className="Administrateur">
  <Alert
                message="Bienvenue sur page de la liste des Administatuers Boussole Pro"
                 
                type="info"
                showIcon
                />
                <br/>
                <br/>
        <div>
        
            <div className="ajouteM">
            <b style={{padding: "5px",margin:"5px"}}>Ajouter Admin</b>

    <Link  to="/AddAdmin"><PlusCircleOutlined style={{fontSize:"30px"}} /></Link>
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
      {this.AdminsList()}

       
      </tbody>
    </table>
    </div >
   
    
    </div>
     
     )
    }
  }
  