
import React, { Component } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import RecordsListSprint from './RecordsListSprint';
import { config } from '../../config';

export default class DdSprintPro extends Component {
  data=[];
  constructor(props){
    super(props);
    this.state={demandeSprint: [],
      val:'',
      listFilter: []};
    
  }
  
  componentDidMount(){
    axios.get(config+'/BoussolePro-backend/listSprint.php')
    .then(response=>{
      console.log("****----------------> dd sprint", response);
       this.setState({demandeSprint: response.data,
        listFilter:response.data});
   })
   .catch(function (error){
     console.log(error);
    })
    }

    
    SprintList(){
      console.log(this.state.demandeSprint);
      return Array.isArray(this.state.listFilter) && this.state.listFilter.map(function(object,i){
        return <RecordsListSprint obj={object} key={i}/>
       
       });
    }
    OnchangeState(e){
      console.log("hey we are *******************");
      this.setState({
          
          val:e.target.value,
  
      },()=>{
          this.setState({
              listFilter:this.state.demandeSprint.filter(elm=>(elm.nom.includes(this.state.val)))
              })
          }
      )
      console.log("----------------------- val ",this.state.val)
  }
 
  render() {
    
  
    return (
      <div className="DdSprintPro">
      <h2>Les demandes de SprintPro</h2>
      
                    <div className="se mb-4">
                            <div className="se-header">Search</div>
                            <div className="se-body">
                                <div className="input-group">
                                    <input className="form-control" type="text" 
                                    placeholder="Enter search titre..." 
                                    aria-label="Enter search term..." 
                                    value={this.state.val} onChange={(e)=>{this.OnchangeState(e)}}
                                    aria-describedby="button-search" />
                                    <button className="btn btn-primary" id="button-search" type="button">Go!</button>
                                </div>
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
