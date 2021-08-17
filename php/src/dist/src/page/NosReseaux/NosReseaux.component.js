import { Alert } from "antd";
import Search from "antd/lib/input/Search";
import React, { Component } from "react";
import history from "../../history";
import "./NosReseaux.component.css";
import CompteAbonnée from '../../page/NosReseaux/CompteAbonnén/CompteAbonnée.component';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import ss from '../../img/picturesExperts/2.jpg';
import RecordsListNotreReseau from './RecordsListNotreReseau.js';
import axios from 'axios';

class NosReseaux extends Component {
  constructor(props){
    super(props);
    this.state={listNotreReseau: []};
    //console.log(this.state.demandeSprint);
  }
  
  componentDidMount(){
    axios.get('http://localhost/BoussolePro-backend/listNotreReseau.php')
    .then(response=>{
      this.setState({listNotreReseau: response.data});
   })
   .catch(function (error){
     console.log(error);
    })
    }
    
    NotreReseauList(){
      console.log(this.state.listNotreReseau);
       return this.state.listNotreReseau.map(function(object,i){
        return <RecordsListNotreReseau obj={object} key={i} />
       
       });
    }
 

  render() {
    return (
      <div className="clearfix">
        <Alert
                message="Notre Réseau Pro"
                description="Bienvenue sur le Réseau Pro de Boussole Pro."
                type="info"
                showIcon
                />
                <br></br>
                <Search placeholder="Recherche" allowClear  size="large" enterButton  />
                <br></br>
                <br></br>

        <div className="row">
        {this.NotreReseauList()}
           
       
        </div>
        
      </div>
    );
  }
}

export default NosReseaux;