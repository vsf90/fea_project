import React, { Component } from 'react'
import { Alert } from "antd";
import { Link } from "react-router-dom";
import axios from 'axios';
import RecordsListOffreStage from './RecordsListOffreStage.js';
  
  export default class OfferStage extends Component {
       //data=[];
  constructor(props){
    super(props);
    this.state={OffreStage: []};
    //console.log(this.state.OffreStage);
  }
  
  componentDidMount(){
    axios.get('http://localhost/BoussolePro-backend/listOffreStage.php')
    .then(response=>{
      this.setState({OffreStage: response.data});
   })
   .catch(function (error){
     console.log(error);
    })
    }
    
    OffreStageList(){
      //console.log(this.state.OffreStage);
       return this.state.OffreStage.map(function(object,i){
        return <RecordsListOffreStage obj={object} key={i} />
       
       });
    }
 
      render() {
          //console.log(this.state.OffreStage);
          return (
            <div className="container">
     
            <Alert
               message="Les Offres de stages"
               description="Bienveneu sur Les Offres de Stages."
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
                        <Link to="/AddOffreStage"><div className="card" >
                          <b className="bOf">Ajouter une offre de stage</b>
                        </div> </Link>
                        <br></br>
             
                  
                      {this.OffreStageList()}
                </div>
                   
    
                  
    
          )
      }
  }
  
  