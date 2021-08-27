import React, { Component } from 'react'
import { Alert } from "antd";
import { Link } from "react-router-dom";
import axios from 'axios';
import RecordsListDemandeStage from './RecordsListDemandeStage.js';
import { config } from '../../config.js';
  
  export default class DemandeStage extends Component {
       //data=[];
  constructor(props){
    super(props);
    this.state={DemandeStageList: []};
    //console.log(this.state.OffreStage);
  }
  
  componentDidMount(){
    axios.get(config+'/BoussolePro-backend/listDemandeStage.php')
    .then(response=>{
      this.setState({DemandeStageList: response.data});
   })
   .catch(function (error){
     console.log(error);
    })
    }
    
    DemandeStageList(){
      //console.log(this.state.OffreStage);
       return this.state.DemandeStageList.map(function(object,i){
        return <RecordsListDemandeStage obj={object} key={i} />
       
       });
    }
 
      render() {
          //console.log(this.state.OffreStage);
          return (
            <div className="container" style={{minWidth:'900px'}}>
     
            <Alert
               message="Les Demandes de stages"
               description="Bienvenue sur Les Demandes de Stages."
               type="info"
               showIcon
               />
               <br></br>
               <div className="se mb-4">
                            <div className="se-header">Search</div>
                            <div className="se-body">
                                <div className="input-group">
                                    <input className="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
                                    <button className="btn btn-primary" id="button-search" type="button">Go!</button>
                                </div>
                            </div>
                </div>
                        <Link to="/AddDemandeStage"><div className="card" >
                          <b style={{textAlign:"center",fontSize:"18px",fontWeight:"normal",fontFamily:"ui-sans-serif"}}>Ajouter une Demandes de stage</b>
                        </div> </Link>
                        <br></br>
             
                  
                      {this.DemandeStageList()}
                </div>
                   
    
                  
    
          )
      }
  }
  
  