
import React, { Component } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import RecordsListSprint from './RecordsListSprint';

export default class DdSprintPro extends Component {
  data=[];
  constructor(props){
    super(props);
    this.state={demandeSprint: []};
    
  }
  
  componentDidMount(){
    axios.get('http://localhost/BoussolePro-backend/listSprint.php')
    .then(response=>{
      console.log("****----------------> dd sprint", response);
       this.setState({demandeSprint: response.data});
   })
   .catch(function (error){
     console.log(error);
    })
    }

    
    SprintList(){
      console.log(this.state.demandeSprint);
       return this.state.demandeSprint.map(function(object,i){
        return <RecordsListSprint obj={object} key={i}/>
       
       });
    }
 
  render() {
    
  
    return (
      <div className="DdSprintPro">
      <h2>Les demandes de SprintPro</h2>
      
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
      <th >Qui est-ce qui initie le Sprint Pro?</th>
      <th >Nom complet</th>
      <th >Avec-qui souhaitez vous avoir le sprint PRO?</th>
      <th >informations dans le cas d'un abonné</th>
      <th >RANG</th>
      <th >informations personne extérieure</th>
      <th >Pourquoi souhaitez-vous ce sprint Pro?</th>
      <th >Créneaux</th>
      <th >Date</th>
      <th >Etat</th>
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
