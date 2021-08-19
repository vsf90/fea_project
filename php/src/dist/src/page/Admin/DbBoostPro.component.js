
import React, { Component } from 'react'
import axios from 'axios';
import { Button,Table } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";
import { Alert } from "antd";


export default class DdBoostPro extends Component {
  //data=[];
  constructor(props){
    super(props);
    this.state={demandeBoost: []};
    //console.log(this.state.demandeSprint);
  }
  

  componentDidMount(){
    axios.get('http://localhost:8080/BoussolePro-backend/listBoost.php')
    .then(response=>{
      this.setState({demandeBoost: response.data});
   })
   .catch(function (error){
     console.log(error);
    })
    }
    
    BoostList(){
      console.log(this.state.demandeBoost);
       return this.state.demandeBoost.map(function(object,i){
        return {
            ID: object.ID,
            confirmationAbonne:object.confirmationAbonne,
            nomComplet: object.prenom+" "+object.nom,
            entreprise: object.entreprise,
            secteur:object.secteur,
            contact:object.contact,
            typeCompagne:object.typeCompagne,
            objetCompagne:object.objetCompagne,
            montant:object.montant,
            commentaire:object.commentaire,
            date:object.date
           
          }
       
       });
    }
 
  render() {
    //console.log(this.BoostList());
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
        title: 'Êtes-vous bien abonné(e) de Boussole PRO ?',
        width: 100,
        dataIndex: 'confirmationAbonne',
        key: 'confirmationAbonne',
        fixed: 'left',
      },
      { title: 'Nom complet', dataIndex: 'nomComplet', key: 'nomComplet' , align:'center' },     
      { title: "Votre entreprise", dataIndex: 'entreprise', key: 'entreprise' , align:'center' },
      { title: "Votre secteur d'activité", dataIndex: 'secteur', key: 'secteur' , align:'center' },
      { title: 'Qui sera notre contact pour toute demande de support concernant la campagne?', dataIndex: 'contact', key: 'contact' , align:'center' },
      { title: 'Quel type de campagne souhaitez-vous lancer?', dataIndex: 'typeCompagne', key: 'typeCompagne' , align:'center' },
      { title: "Quel est l'objet de la campagne et en quoi est-ce important pour vous ?", dataIndex: 'objetCompagne', key: 'objetCompagne' , align:'center' },
      { title: 'Souhaitez-vous donner un pourcentage ou un montant à Boussole Pro? Si oui, lequel?', dataIndex: 'montant', key: 'montant' , align:'center' },
      { title: 'Tout commentaire est le bienvenue si vous en avez', dataIndex: 'commentaire', key: 'commentaire' , align:'center' },
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
    
    console.log(this.BoostList());
    return (
      <div className="DdSprintPro">
      <h2>Les demandes Boost Pro</h2>
      
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
      
       <Table columns={columns} dataSource={this.BoostList()} scroll={{ x: 1300 }} />

        
      </div>
    )
    }
}
