import React, { Component } from 'react'
import axios from 'axios';
import { Alert } from "antd";
import Table from 'react-bootstrap/Table';
import RecordsListExpert from './RecordsListExpert.js';

export default class DdExpertBP extends Component {
  constructor(props){
    super(props);
    this.state={listExpert: []};
  }
  
  componentDidMount(){
    axios.get('http://localhost/BoussolePro-backend/listExpert.php')
    .then(response=>{
      this.setState({listExpert: response.data});
   })
   .catch(function (error){
     console.log(error);
    })
    }
    
    ExpertList(){
      console.log(this.state.listExpert);
       return this.state.listExpert.map(function(object,i){
        return <RecordsListExpert obj={object} key={i} />
       });
    }
 
  render() {
 
    return (
      <div className="DdSprintPro">
          <Alert
                 message="Les demandes Expert BP"
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
      <th >Qui est-ce qui initie le Sprint Pro?</th>
      <th >Nom complet</th>
      <th >Avec-qui souhaitez vous avoir le sprint PRO?</th>
      <th >Objet de la demande</th>
      <th >Créneaux</th>
      <th >Date</th>
      <th >Etat</th>
      <th >Actions</th>
    </tr>
  </thead>
  <tbody>
   {this.ExpertList()}
  </tbody>
</Table>

        
      </div>
    )
    }
}
