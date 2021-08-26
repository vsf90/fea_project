
import React, { Component } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { CheckCircleTwoTone } from "@ant-design/icons";
import { Alert } from "antd";
import RecordsListBoost from './RecordsListBoost.js';


export default class DdBoostPro extends Component {
  //data=[];
  constructor(props){
    super(props);
    this.state={listBoost: []};
   
  }
  

  componentDidMount(){
    axios.get('http://localhost:8080/BoussolePro-backend/listBoost.php')
    .then(response=>{
      this.setState({listBoost: response.data});
   })
   .catch(function (error){
     console.log(error);
    })
    }
    
    BoostList(){
      console.log(this.state.listBoost);
       return this.state.listBoost.map(function(object,i){
        return <RecordsListBoost obj={object} key={i} />
       
       });
    }
 
  render() {
    return (
      <div className="DdSprintPro">
          <Alert
                 message="Les demandes Boost Pro"
                 description=" "
                
                 type="info"
                 showIcon
                 />
 
      
                          <div className="se-body">
                              <div className="input-group">
                                  <input className="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
                                  <button className="btn btn-primary" id="button-search" type="button">Go!</button>
                              </div>
                          </div>


                          <Table responsive bordered>
  <thead>
    <tr>
      <th>ID</th>
      <th >Êtes-vous bien abonné(e) de Boussole PRO ?</th>
      <th >Nom complet</th>
      <th >Votre entreprise</th>
      <th >Votre secteur d'activité</th>
      <th >Qui sera notre contact pour toute demande de support concernant la campagne?</th>
      <th >Quel type de campagne souhaitez-vous lancer?</th>
      <th >Quel est l'objet de la campagne et en quoi est-ce important pour vous ?</th>
      <th >Souhaitez-vous donner un pourcentage ou un montant à Boussole Pro? Si oui, lequel?</th>
      <th >Tout commentaire est le bienvenue si vous en avez</th>
      <th >Date</th>
      <th >Etat</th>
      <th >Actions</th>
    </tr>
  </thead>
  <tbody>



   {this.BoostList()}
  </tbody>
</Table>

        
      </div>
    )
    }
}
