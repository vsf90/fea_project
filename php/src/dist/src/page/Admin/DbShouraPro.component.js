
import React, { Component } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Alert } from "antd";
import RecordsListShoura from './RecordsListShoura';


export default class DdShouraPro extends Component {
  data=[];
  constructor(props){
    super(props);
    this.state={listShoura: []};

  }
  
  componentDidMount(){
    axios.get('http://localhost/BoussolePro-backend/listShoura.php')
    .then(response=>{
      this.setState({listShoura: response.data});
   })
   .catch(function (error){
     console.log(error);
    })
    }

    ShouraList(){
       return this.state.listShoura.map(function(object,i){
        return <RecordsListShoura obj={object} key={i} />
       
       });
    }
 
  render() {
   
    return (
      <div className="DdSprintPro">
          <Alert
                 message="Les demandes de Shoura Pro"
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
