
import React, { Component } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import RecordsList from './RecordsList.js';
import { CheckCircleTwoTone } from "@ant-design/icons";
import { Alert } from "antd";
import RecordsListMeet from './RecordsListMeet.js';


export default class DdMeetUpPro extends Component {
 
  constructor(props){
    super(props);
    this.state={listMeet: []};
  
  }
  

  componentDidMount(){
    axios.get('http://localhost:8080/BoussolePro-backend/listMeet.php')
    .then(response=>{
      this.setState({listMeet: response.data});
   })
   .catch(function (error){
     console.log(error);
    })
    }
    
    MeetList(){
      console.log(this.state.listMeet);
       return this.state.listMeet.map(function(object,i){
        return <RecordsListMeet obj={object} key={i} />
       
       });
    }
 
  render() {
    console.log(this.MeetList());
    return (
      <div className="DdSprintPro">
           <Alert
                 message="Les demandes Meet'Up Pro"
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
      <th >Nom complet</th>
      <th >Avec-qui souhaitez vous avoir le FEA Meet Up PRO?</th>
      <th >Prénom complet du contact souhaité</th>
      <th >Nom complet du contact souhaité</th>
      <th >la raison professionnelle de ce meetUp pro</th>
      <th >Autres infos utiles</th>
      <th >Date</th>
      <th >Etat</th>
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
