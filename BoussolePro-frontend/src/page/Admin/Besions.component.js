
import React, { Component } from 'react'
import axios from 'axios';
import { Alert, Button,Table } from "antd";
import RecordsList from './RecordsList.js';
import { config } from '../../config.js';

export default class Besoins extends Component {
  //data=[];
  constructor(props){
    super(props);
    this.state={listBesoins: []};
    //console.log(this.state.demandeSprint);
  }
  
  componentDidMount(){
    axios.get(config+'/BoussolePro-backend/listBesoins.php')
    .then(response=>{
      this.setState({listBesoins: response.data});
   })
   .catch(function (error){
     console.log(error);
    })
    }
    
    BesoinsList(){
      console.log(this.state.listBesoins);
       return this.state.listBesoins.map(function(object,i){
        return {
            ID: object.ID,
            nomComplet: object.prenom+" "+object.nom,
            besoins: object.besoins,
            dateDeplacement:object.dateDeplacement,
            autresDemandes:object.autresDemandes,
            date:object.date
          }
       
       });
    }
 
  render() {
    console.log(this.BesoinsList());
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
      { title: "Quels sont vos besoins les plus urgents d'un point de vue professionnel ?", dataIndex: 'besoins', key: 'besoins', align:'center' },
      { title: 'Date de Votre prochain déplacement', dataIndex: 'dateDeplacement', key: 'dateDeplacement' , align:'center' },
      { title: "Autres demandes", dataIndex: 'autresDemandes', key: 'autresDemandes' , align:'center' },

      {
        title: 'Date',
        key: 'date',
        dataIndex: 'date',
        fixed: 'right',
        width: 100,
        align:'center',
      },
    ];
    
    console.log(this.BesoinsList());
    return (
      <div className="DdSprintPro">
          <Alert
                 message="Les besoins pros immédiats"
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
      
       <Table columns={columns} dataSource={this.BesoinsList()} scroll={{ x: 1300 }} />

        
      </div>
    )
    }
}

// import { CheckCircleTwoTone } from "@ant-design/icons";
// import { Alert } from "antd";

// function BesionsPro() {
  
   
//   return (
//     <div className="BesionsPro">
//      <Alert
//                 message="Liste des Besions Pro "
//                 description="Vous trouverez ici la liste des Besions Pro  de boussole pro."
//                 type="info"
//                 showIcon
//                 />
//     <h2>Les Besions Pro </h2>
    
//                         <div className="se-body">
//                             <div className="input-group">
//                                 <input className="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
//                                 <button className="btn btn-primary" id="button-search" type="button">Go!</button>
//                             </div>
//                         </div>
                   
//        <table class="table">
//   <thead>
//     <tr>
//     <th scope="col">#</th>
//       <th scope="col">Nom</th>
//       <th scope="col">Prénom</th>
//       <th scope="col">Besoins les plus urgents</th>
//       <th scope="col">Date de Votre prochain déplacement</th>
//       <th scope="col">Autres demandes</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">1</th>
//       <td>Zennou</td>
//       <td>Khalid</td>
//       <td scope="col">Besoins les plus urgents</td>
//       <td scope="col">Date de Votre prochain déplacement</td>
//       <td scope="col">Autres demandes</td>
//     </tr>
//     <tr>
//       <th scope="row">2</th>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td scope="col">Besoins les plus urgents</td>
//       <td scope="col">Date de Votre prochain déplacement</td>
//       <td scope="col">Autres demandes</td>
//     </tr>
//     <tr>
//       <th scope="row">3</th>
//       <td>Larry</td>
//       <td>Depamy</td>
//       <td scope="col">Besoins les plus urgents</td>
//       <td scope="col">Date de Votre prochain déplacement</td>
//       <td scope="col">Autres demandes</td>
//     </tr>
//   </tbody>
// </table>
//     </div>
//   );
// }

// export default BesionsPro;

