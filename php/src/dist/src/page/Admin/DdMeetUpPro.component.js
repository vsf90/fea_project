
import React, { Component } from 'react'
import axios from 'axios';
import { Button,Table } from "antd";
import RecordsList from './RecordsList.js';

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
    axios.get('http://localhost/BoussolePro-backend/listMeet.php')
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
        return {
            ID: object.ID,
            nomComplet: object.prenom+" "+object.nom,
            avecQui: object.avecQui,
            prenomContactSouhaite:object.prenomContactSouhaite,
            nomContactSouhaite:object.nomContactSouhaite,
            raisonMeet:object.raisonMeet,
            autreInfos:object.autreInfos,
            date:object.date
          }
       
       });
    }
 
  render() {
    console.log(this.MeetList());
    const columns = [
      {
        title: 'ID',
        width: 100,
        dataIndex: 'ID',
        key: 'ID',
        fixed: 'left',
        align:'center'
      },
      {
        title: 'Nom complet',
        width: 100,
        dataIndex: 'nomComplet',
        key: 'nomComplet',
        fixed: 'left',
      },
      { title: 'Avec-qui souhaitez vous avoir le FEA Meet Up PRO?', dataIndex: 'avecQui', key: 'avecQui' , align:'center' },     
      { title: "Prénom complet du contact souhaité", dataIndex: 'prenomContactSouhaite', key: 'prenomContactSouhaite' , align:'center' },
      { title: 'Nom complet du contact souhaité', dataIndex: 'nomContactSouhaite', key: 'nomContactSouhaite' , align:'center' },
      { title: 'la raison professionnelle de ce meetUp pro', dataIndex: 'raisonMeet', key: 'raisonMeet' , align:'center' },
      { title: 'Autres infos utiles', dataIndex: 'autreInfos', key: 'autreInfos' , align:'center' },
      { title: 'Date', dataIndex: 'date', key: 'date' , align:'center' },

      {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 100,
        align:'center',
        render: () => <a>Valider</a>,
      },
    ];
    
    console.log(this.MeetList());
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
      
       <Table columns={columns} dataSource={this.MeetList()} scroll={{ x: 1300 }} />

        
      </div>
    )
    }
}
