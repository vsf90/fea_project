
import React, { Component } from 'react'
import axios from 'axios';
import { Button } from "antd";
import RecordsListMeet from './RecordsListMeet.js';
import Table from 'react-bootstrap/Table';

import { CheckCircleTwoTone } from "@ant-design/icons";
import { Alert } from "antd";


export default class DdMeetUpPro extends Component {
  //data=[];
  constructor(props){
    super(props);
    this.state={demandeMeet: []};
    //console.log(this.state.demandeSprint);
  }
  

  componentDidMount(){
    axios.get('http://localhost:8080/BoussolePro-backend/listMeet.php')
    .then(response=>{
      this.setState({demandeMeet: response.data});
   })
   .catch(function (error){
     console.log(error);
    })
    }
    
    MeetList(){
      console.log(this.state.demandeMeet);
       return this.state.demandeMeet.map(function(object,i){
        return <RecordsListMeet obj={object} key={i} />
       
       });
    }
 
  render() {
    
    return (
      <div className="DdSprintPro">
      <h2>Les demandes Meet'Up Pro</h2>
      
                          <div className="se-body">
                              <div className="input-group">
                                  <input className="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
                                  <button className="btn btn-primary" id="button-search" type="button">Go!</button>
                              </div>
                          </div>

   
 
       {/*<table>
         <thead>
           <tr>
             <th>ID</th>
             <th>initiateur</th>

           </tr>
         </thead>
         <tbody>
           {this.SprintList()}
         </tbody> 
       </table>*/}
      
      <Table responsive bordered>
  <thead>
    <tr>
      <th>ID</th>
      <th >Nom complet</th>
      <th >Avec-qui souhaitez vous avoir le FEA Meet Up PRO?</th>
      <th >Prénom complet du contact souhaité</th>
      <th >Nom complet du contact souhaité</th>
      <th >la raison professionnelle de ce meetUp pro</th>
      <th >Autres infos utiles</th>
      <th >Date</th>
      <th >Actions</th>




   
    </tr>
  </thead>
  <tbody>
    
    
    
   {this.MeetList()}
  </tbody>
</Table>

        
      </div>
    )
    }
}
