import React, { Component } from 'react'
import { Alert } from "antd";
import { Link } from "react-router-dom";
import axios from 'axios';
import RecordsListOffreEmploi from './RecordsListOffreEmploi.js';
import { config } from '../../config.js';
  
  export default class OffreEmploi extends Component {
       //data=[];
  constructor(props){
    super(props);
    this.state={OffreEmploi: []};
    //console.log(this.state.OffreEmploi);
  }
  
  componentDidMount(){
    axios.get(config+'/BoussolePro-backend/listOffreEmploi.php')
    .then(response=>{
      this.setState({OffreEmploi: response.data});
   })
   .catch(function (error){
     console.log(error);
    })
    }
    
    OffreEmploiList(){
      //console.log(this.state.OffreEmploi);
       return this.state.OffreEmploi.map(function(object,i){
        return <RecordsListOffreEmploi obj={object} key={i} />
       
       });
    }
 
      render() {
          //console.log(this.state.OffreStage);
          return (
            <div className="container" style={{minWidth:'900px'}}>
     
            <Alert
               message="Les Offres d'emploi"
               description="Bienvenue sur Les Offres d'emploi."
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
                        <Link to="/AddOffreEmploi"><div className="card" >
                          <b style={{textAlign:"center",fontSize:"18px",fontWeight:"normal",fontFamily:"ui-sans-serif"}}>Ajouter une offre d'emploi</b>
                        </div> </Link>
                        <br></br>
             
                  
                      {this.OffreEmploiList()}
                </div>
                   
    
                  
    
          )
      }
  }
  
  