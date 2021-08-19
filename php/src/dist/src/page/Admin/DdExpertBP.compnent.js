import React, { Component } from 'react'
import axios from 'axios';
import { Button,Table } from "antd";
import RecordsList from './RecordsList.js';

export default class DdExpertBP extends Component {
 // data=[];
  constructor(props){
    super(props);
    this.state={demandeExpert: []};
    //console.log(this.state.demandeSprint);
  }
  
  componentDidMount(){
    axios.get('http://localhost/BoussolePro-backend/listExpert.php')
    .then(response=>{
      this.setState({demandeExpert: response.data});
   })
   .catch(function (error){
     console.log(error);
    })
    }
    
    ExpertList(){
      console.log(this.state.demandeExpert);
       return this.state.demandeExpert.map(function(object,i){
        return {
            ID: object.ID,
            initiateur: object.initiateur,
            nomComplet: object.prenom+" "+object.nom,
            avecQui: object.avecQui,
            objet:object.objet,
            creneaux:object.creneaux,
            date:object.date
          }
       
       });
    }
 
  render() {
    console.log(this.ExpertList());
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
        title: 'Qui est-ce qui initie le Sprint Pro?',
        width: 100,
        dataIndex: 'initiateur',
        key: 'initiateur',
        fixed: 'left',
      },
      { title: 'Nom complet', dataIndex: 'nomComplet', key: 'nomComplet', align:'center' },
      { title: 'Avec-qui souhaitez vous avoir le sprint PRO?', dataIndex: 'avecQui', key: 'avecQui' , align:'center' },
      { title: "Objet de la demande", dataIndex: 'objet', key: 'objet' , align:'center' },
      { title: 'Créneaux', dataIndex: 'creneaux', key: 'creneaux' , align:'center' },
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
    
   // console.log(this.ExpertList());
    return (
      <div className="DdSprintPro">
      <h2>Les demandes Expert BP</h2>
      
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
      
       <Table columns={columns} dataSource={this.ExpertList()} scroll={{ x: 1300 }} />

        
      </div>
    )
    }
}
