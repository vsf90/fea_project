
import React, { Component } from 'react'
import axios from 'axios';
import { Button } from "antd";
import RecordsList from './RecordsList.js';
import Table from 'react-bootstrap/Table';
import RecordsListShoura from './RecordsListShoura.js';

export default class DdShouraPro extends Component {
  data=[];
  constructor(props){
    super(props);
    this.state={demandeShoura: []};
    //console.log(this.state.demandeSprint);
  }
  
  componentDidMount(){
    axios.get('http://localhost:8080/BoussolePro-backend/listShoura.php')
    .then(response=>{
      this.setState({demandeShoura: response.data});
   })
   .catch(function (error){
     console.log(error);
    })
    }

   
 
    
    ShouraList(){
      console.log(this.state.demandeShoura);
       return this.state.demandeShoura.map(function(object,i){
        return <RecordsListShoura obj={object} key={i} />
       
       });
    }
 
  render() {
    
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
      { title: 'Avec-qui souhaitez vous avoir le FEA Shoura PRO?', dataIndex: 'avecQui', key: 'avecQui' , align:'center' },
      { title: "Quelle est votre problématique? ", dataIndex: 'problematique', key: 'problematique' , align:'center' },
      { title: 'les domaines des experts/consultants souhaités', dataIndex: 'domainesExpert', key: 'domainesExpert' , align:'center' },
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
    
   // console.log(this.ShouraList());
    return (
      <div className="DdSprintPro">
      <h2>Les demandes de Shoura Pro</h2>
      
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
      <th >Qui est-ce qui initie le Shoura pro ?</th>
      <th >Nom complet</th>
      <th >Avec-qui souhaitez vous avoir le FEA Shoura PRO?</th>
      <th >Quelle est votre problématique?</th>
      <th >Quels sont les domaines des experts/consultants souhaités?</th>
      <th >Créneaux</th>
      <th >Date</th>
      <th >Actions</th>
    </tr>
  </thead>
  <tbody>
    
    
    
   {this.ShouraList()}
  </tbody>
</Table>

        
      </div>
    )
    }
}
