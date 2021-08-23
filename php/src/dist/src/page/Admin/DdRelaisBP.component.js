
import React, { Component } from 'react'
import axios from 'axios';
import { Button} from "antd";
import Table from 'react-bootstrap/Table';
import RecordsList from './RecordsList.js';
import { CheckCircleTwoTone } from "@ant-design/icons";
import { Alert } from "antd";
import RecordsListRelais from './RecordsListRelais.js';


export default class DdRelaisBP extends Component {
  data=[];
  constructor(props){
    super(props);
    this.state={listRelais: []};
  }

  componentDidMount(){
    axios.get('http://localhost/BoussolePro-backend/listRelais.php')
    .then(response=>{
      this.setState({listRelais: response.data});
   })
   .catch(function (error){
     console.log(error);
    })
    }
    
    RelaisList(){
      console.log(this.state.listRelais);
       return this.state.listRelais.map(function(object,i){
        return <RecordsListRelais obj={object} key={i} />
      });
    }
 
  render() {

    return (
      <div className="DdSprintPro">
          <Alert
                 message="Les demandes de Relais BP"
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
      <th >Qui est-ce qui initie le Sprint Pro?</th>
      <th >Nom complet</th>
      <th >Avec-qui souhaitez vous avoir le sprint PRO?</th>
      <th >Objet de la demande</th>
      <th >Créneaux</th>
      <th >Date</th>
      <th >Actions</th>
    </tr>
  </thead>
  <tbody>
   {this.RelaisList()}
  </tbody>
</Table>

        
      </div>
    )
    }
}
