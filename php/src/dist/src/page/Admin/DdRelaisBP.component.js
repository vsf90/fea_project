<<<<<<< Updated upstream
import React, { Component } from 'react'
import axios from 'axios';
import { Button,Table } from "antd";
import RecordsList from './RecordsList.js';
=======
import { CheckCircleTwoTone } from "@ant-design/icons";
import { Alert } from "antd";
>>>>>>> Stashed changes

export default class DdRelaisBP extends Component {
  data=[];
  constructor(props){
    super(props);
    this.state={demandeRelais: []};
    //console.log(this.state.demandeSprint);
  }
  
<<<<<<< Updated upstream
  componentDidMount(){
    axios.get('http://localhost/BoussolePro-backend/listRelais.php')
    .then(response=>{
      this.setState({demandeRelais: response.data});
   })
   .catch(function (error){
     console.log(error);
    })
    }
    
    RelaisList(){
      console.log(this.state.demandeRelais);
       return this.state.demandeRelais.map(function(object,i){
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
    console.log(this.RelaisList());
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
    
    console.log(this.RelaisList());
    return (
      <div className="DdSprintPro">
      <h2>Les demandes de Relais BP</h2>
      
                          <div className="se-body">
                              <div className="input-group">
                                  <input className="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
                                  <button className="btn btn-primary" id="button-search" type="button">Go!</button>
                              </div>
                          </div>
=======
   
  return (
    <div className="DdRelaisBP">
      <Alert
                message="Liste des demandes de Relais Pro"
                description="Vous trouverez ici les demandes de Relais Pro de boussole pro."
                type="info"
                showIcon
                />
       
                        <div className="se-body">
                            <div className="input-group">
                                <input className="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
                                <button className="btn btn-primary" id="button-search" type="button">Go!</button>
                            </div>
                        </div>
                   
       <table class="table">
  <thead>
    <tr>
    <th scope="col">#</th>
      <th scope="col">Nom</th>
      <th scope="col">Prénom</th>
      <th scope="col">Avec-qui</th>
      <th scope="col">Qui est-ce qui initie le Sprint Pro 15min ?</th>
      <th scope="col">Raison professionnelle</th>
      <th scope="col">Temps</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Zennou</td>
      <td>Khalid</td>
      <td>BP</td>
      <td>Fatrui lorian</td>
      <td>hayti nhtyd suy</td>
      <td>raison ....</td>
      <td>weekEnd</td>
      <td><CheckCircleTwoTone twoToneColor="#52c41a" /></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>Fatrui lorian</td>
      <td>hayti nhtyd suy</td>
      <td>raison ....</td>
      <td>weekEnd</td>
      <td><CheckCircleTwoTone twoToneColor="#52c41a" /></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>Depamy</td>
      <td>Fatrui lorian</td>
      <td>hayti nhtyd suy</td>
      <td>raison ....</td>
      <td>weekEnd</td>
      <td><CheckCircleTwoTone twoToneColor="#52c41a" /></td>
    </tr>
  </tbody>
</table>
    </div>
  );
}
>>>>>>> Stashed changes

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
      
       <Table columns={columns} dataSource={this.RelaisList()} scroll={{ x: 1300 }} />

        
      </div>
    )
    }
}
