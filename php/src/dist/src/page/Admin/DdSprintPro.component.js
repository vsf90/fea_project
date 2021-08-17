
import React, { Component } from 'react'
import axios from 'axios';
import { Button } from "antd";
import { EditFilled,DeleteFilled,PlusCircleOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import RecordsListSprint from './RecordsListSprint.js';

import { CheckCircleTwoTone } from "@ant-design/icons";



export default class DdSprintPro extends Component {
  data=[];
  constructor(props){
    super(props);
    this.state={demandeSprint: []};
    //console.log(this.state.demandeSprint);
  }
  
  componentDidMount(){
    axios.get('http://localhost:8080/BoussolePro-backend/listSprint.php')
    .then(response=>{
      this.setState({demandeSprint: response.data});
   })
   .catch(function (error){
     console.log(error);
    })
    }

    
    SprintList(){
      console.log(this.state.demandeSprint);
       return this.state.demandeSprint.map(function(object,i){
         console.log(i);
        return <RecordsListSprint obj={object} key={i} />
       
       });
    }
 
  render() {
    console.log("waw");
    console.log(this.SprintList());
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
      { title: "informations dans le cas d'un abonné", dataIndex: 'prenomAbonne', key: 'prenomAbonne' , align:'center' },
      { title: 'RANG', dataIndex: 'rang', key: 'rang' , align:'center' },
      { title: 'informations personne extérieure', dataIndex: 'prenomExterieure', key: 'prenomExterieure' , align:'center' },
      { title: 'Pourquoi souhaitez-vous ce sprint Pro?', dataIndex: 'raison', key: 'raison' , align:'center' },
      { title: 'Créneaux', dataIndex: 'creneaux', key: 'creneaux' , align:'center' },
      { title: 'Date', dataIndex: 'date', key: 'date' , align:'center' },

      {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 100,
        align:'center',
        render: () => <a>Valider <Link to={"/EditSprint/"+this.SprintList()[0].ID}><EditFilled style={{fontSize:"20px"}}/></Link></a>,
      },  
    ];
    
    console.log(this.SprintList());
    return (
      <div className="DdSprintPro">
      <h2>Les demandes de SprintPro</h2>
      
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
      
      { /*<Table columns={columns} dataSource={this.SprintList()} scroll={{ x: 1300 }} />*/}
      <Table responsive bordered>
  <thead>
    <tr>
      <th>ID</th>
      <th >Qui est-ce qui initie le Sprint Pro?</th>
      <th >Nom complet</th>
      <th >Avec-qui souhaitez vous avoir le sprint PRO?</th>
      <th >informations dans le cas d'un abonné</th>
      <th >RANG</th>
      <th >informations personne extérieure</th>
      <th >Pourquoi souhaitez-vous ce sprint Pro?</th>
      <th >Créneaux</th>
      <th >Date</th>
      <th >Actions</th>




   
    </tr>
  </thead>
  <tbody>
    
    
    
   {this.SprintList()}
  </tbody>
</Table>

        
      </div>
    )
    }
}
