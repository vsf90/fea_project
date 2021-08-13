import React, { Component } from 'react'
import axios from 'axios';
import { Button,Table } from "antd";
import RecordsList from './RecordsList.js';

export default class Feedbacks extends Component {
  //data=[];
  constructor(props){
    super(props);
    this.state={listFeedback: []};
    //console.log(this.state.demandeSprint);
  }
  
  componentDidMount(){
    axios.get('http://localhost/BoussolePro-backend/listFeedback.php')
    .then(response=>{
      this.setState({listFeedback: response.data});
   })
   .catch(function (error){
     console.log(error);
    })
    }
    
    FeedbacksList(){
      console.log(this.state.listFeedback);
       return this.state.listFeedback.map(function(object,i){
        return {
            ID: object.ID,
            nomComplet: object.prenom+" "+object.nom,
            avecQui: object.avecQui,
            serviceRecent:object.serviceRecent,
            organisation:object.organisation,
            ponctualite:object.ponctualite,
            qualite:object.qualite,
            informations:object.informations,
            informationBoussolePro:object.informationBoussolePro,
            importance:object.importance,
            evaluation:object.evaluation,
            valeurAjoutee:object.valeurAjoutee,
            motsClesSprint:object.motsClesSprint,
            feedbackParticulier:object.feedbackParticulier,
            autorisation:object.autorisation,
            feedbackAmelioration:object.feedbackAmelioration,
            feedbackEquipe:object.feedbackEquipe,
            date:object.date
          }
       
       });
    }
 
  render() {
    console.log(this.FeedbacksList());
    const columns = [
      {
        title: 'ID',
        width: 50,
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
      { title: "Avec qui?", dataIndex: 'avecQui', key: 'avecQui', align:'left', },
      { title: '1', dataIndex: 'serviceRecent', key: 'serviceRecent' , align:'center' },
      { title: "2", dataIndex: 'organisation', key: 'organisation' , align:'center' },
      { title: "3", dataIndex: 'ponctualite', key: 'ponctualite' , align:'center' },
      { title: "4", dataIndex: 'qualite', key: 'qualite' , align:'center' },
      { title: "5", dataIndex: 'informations', key: 'informations' , align:'center' },
      { title: "6", dataIndex: 'informationBoussolePro', key: 'informationBoussolePro' , align:'center' },
      { title: "7", dataIndex: 'importance', key: 'importance' , align:'center' },
      { title: "8", dataIndex: 'evaluation', key: 'evaluation' , align:'center' },
      { title: "9", dataIndex: 'valeurAjoutee', key: 'valeurAjoutee' , align:'center' },
      { title: "10", dataIndex: 'motsClesSprint', key: 'motsClesSprint' , align:'center' },
      { title: "11", dataIndex: 'feedbackParticulier', key: 'feedbackParticulier' , align:'center' },
      { title: "12", dataIndex: 'autorisation', key: 'autorisation' , align:'center' },
      { title: "13", dataIndex: 'feedbackAmelioration', key: 'feedbackAmelioration' , align:'center' },
      { title: "14", dataIndex: 'feedbackEquipe', key: 'feedbackEquipe' , align:'center' },


      { title: 'Date', dataIndex: 'date', key: 'date' , align:'left' },

      {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 77,
        align:'center',
        render: () => <a>Valider</a>,
      },
    ];
    
    console.log(this.FeedbacksList());
    return (
      <div className="DdSprintPro">
      <h2>Les besoins pros immédiats</h2>
      
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
      
       <Table columns={columns} dataSource={this.FeedbacksList()}  scroll={{ x: 1300 }} />
       <span>(1): A quel service avez-vous récemment participé ?</span> <br></br>
       <span style={{fontWeight:"bold"}}> Quel a été votre niveau de satisfaction?</span>
       <ul>
          <li>(2):Organisation par l’équipe Boussole Pro</li>
          <li>(3):Ponctualité des abonné-e-s</li>
          <li>(4):Qualité de l’échange</li>
          <li>(5):Informations échangées</li>
          </ul>
       <span style={{fontWeight:"bold"}}>(6): Avez-vous des informations susceptibles de se transformer en opportunité pour les autres abonnes Boussole Pro ? (emplois, stages, opportunité de développement de business, conseil important à tous...).</span><br></br>
       <span style={{fontWeight:"bold"}}>(7): Est ce qu’il a été convenu entre abonnés de vous rencontrer sans le support de Boussole Pro ?</span> <br></br>
       <span style={{fontWeight:"bold"}}>(8): Comment évaluez vous le restaurant ou le café?</span><br></br>
       <span style={{fontWeight:"bold"}}>(9): Qu'est ce que ce service vous as apporté personnellement?</span><br></br>
       <span style={{fontWeight:"bold"}}>(10): Mots clés du Sprint</span><br></br>
       <span style={{fontWeight:"bold"}}>(11): Avez-vous un feedback particulier ?</span><br></br>
       <span style={{fontWeight:"bold"}}>(12): Vous nous autorisez à publier le commentaire comme témoignage avec votre photo de profil qui est sur l'app pour diffusion sur la chaîne Boussole Pro et FEA</span><br></br>
       <span style={{fontWeight:"bold"}}>(13): Vos feedbacks pour améliorer votre expérience en tant qu'observateur silencieux</span><br></br>
       <span style={{fontWeight:"bold"}}>(14): Vos feedbacks pour l'équipe qui a bénéficié du Shoura</span><br></br>




        
      </div>
    )
    }
}
