
import React, { Component } from 'react'
import axios from 'axios';
import { Button,Table } from "antd";
import RecordsList from './RecordsList.js';

import { Alert } from "antd";
import { config } from '../../config.js';


export default class Feedbacks extends Component {
  //data=[];
  constructor(props){
    super(props);
    this.state={listFeedback: []};
    //console.log(this.state.demandeSprint);
  }
  

  componentDidMount(){
    axios.get(config+'/BoussolePro-backend/listFeedback.php')
    .then(response=>{
      console.log("response---->feedback",response);
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



      {
        title: 'Date',
        width: 100,
        dataIndex: 'date',
        key: 'date',
        align:'center',
        fixed:'right'
      },
    ];
    
    console.log(this.FeedbacksList());
    return (
      <div className="DdSprintPro">
          <Alert
                 message="Les besoins pros imm??diats"
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
=======
   
  return (
    <div>
    <Alert
                message="Liste des FEEDBACKs"
                description="Vous trouverez ici la liste des feedbacks de boussole pro."
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
      <th scope="col">Pr??nom</th>
      <th scope="col">Avec-qui?</th>
      <th scope="col">Service</th>
      <th scope="col">Niveau de satisfaction</th>
      <th scope="col">Informations susceptibles </th>
      <th scope="col">Confirmer notre utilit?? </th>
      <th scope="col">Evaluation</th>
      <th scope="col">Mots cl??s du Sprint</th>
      <th scope="col">Feedback particulier</th>
      <th scope="col">Autorisation</th>
      <th scope="col">Feedbacks silencieux</th>
      <th scope="col">Feedbacks </th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Zennou</td>
      <td>Khalid</td>
      <td>BP</td>
      <td scope="col">Service</td>
      <td scope="col">Niveau de satisfaction</td>
      <td scope="col">Informations susceptibles </td>
      <td scope="col">Confirmer notre utilit?? </td>
      <td scope="col">Evaluation</td>
      <td scope="col">Mots cl??s du Sprint</td>
      <td scope="col">Feedback particulier</td>
      <td scope="col">Autorisation</td>
      <td scope="col">Feedbacks silencieux</td>
      <td scope="col">Feedbacks </td>
      <td><CheckCircleTwoTone twoToneColor="#52c41a" /></td>
    </tr>
   
  </tbody>
</table>
    </div>
  );
}
>>>>>>> Stashed changes

           </tr>
         </thead>
         <tbody>
           {this.SprintList()}
         </tbody>
       </table>*/}
      
       <Table columns={columns} dataSource={this.FeedbacksList()}  scroll={{ x: 1300 }} />
       <span>(1): A quel service avez-vous r??cemment particip?? ?</span> <br></br>
       <span style={{fontWeight:"bold"}}> Quel a ??t?? votre niveau de satisfaction?</span>
       <ul>
          <li>(2):Organisation par l?????quipe Boussole Pro</li>
          <li>(3):Ponctualit?? des abonn??-e-s</li>
          <li>(4):Qualit?? de l?????change</li>
          <li>(5):Informations ??chang??es</li>
          </ul>
       <span style={{fontWeight:"bold"}}>(6): Avez-vous des informations susceptibles de se transformer en opportunit?? pour les autres abonnes Boussole Pro ? (emplois, stages, opportunit?? de d??veloppement de business, conseil important ?? tous...).</span><br></br>
       <span style={{fontWeight:"bold"}}>(7): Est ce qu???il a ??t?? convenu entre abonn??s de vous rencontrer sans le support de Boussole Pro ?</span> <br></br>
       <span style={{fontWeight:"bold"}}>(8): Comment ??valuez vous le restaurant ou le caf???</span><br></br>
       <span style={{fontWeight:"bold"}}>(9): Qu'est ce que ce service vous as apport?? personnellement?</span><br></br>
       <span style={{fontWeight:"bold"}}>(10): Mots cl??s du Sprint</span><br></br>
       <span style={{fontWeight:"bold"}}>(11): Avez-vous un feedback particulier ?</span><br></br>
       <span style={{fontWeight:"bold"}}>(12): Vous nous autorisez ?? publier le commentaire comme t??moignage avec votre photo de profil qui est sur l'app pour diffusion sur la cha??ne Boussole Pro et FEA</span><br></br>
       <span style={{fontWeight:"bold"}}>(13): Vos feedbacks pour am??liorer votre exp??rience en tant qu'observateur silencieux</span><br></br>
       <span style={{fontWeight:"bold"}}>(14): Vos feedbacks pour l'??quipe qui a b??n??fici?? du Shoura</span><br></br>




        
      </div>
    )
    }
}
