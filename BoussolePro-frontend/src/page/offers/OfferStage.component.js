import React, { Component } from 'react'
import { Alert } from "antd";
import { Link } from "react-router-dom";
import axios from 'axios';
import RecordsListOffreStage from './RecordsListOffreStage.js';
import { config } from '../../config.js';
  
  export default class OfferStage extends Component {
       //data=[];
  constructor(props){
    super(props);
    this.state={OffreStage: [],val:'',
    listFilter: []};
    //console.log(this.state.OffreStage);
  }
  
  componentDidMount(){
    axios.get(config+'/BoussolePro-backend/listOffreStage.php')
    .then(response=>{
      console.log("response---->stage",response);
      this.setState({OffreStage: response.data,listFilter:response.data});
   })
   .catch(function (error){
     console.log(error);
    })
    }
    
    OffreStageList(){
      //console.log(this.state.OffreStage);
      return Array.isArray(this.state.listFilter) && this.state.listFilter.map(function(object,i){
        return <RecordsListOffreStage obj={object} key={i} />
       
       });
    }
    recherche(e){
      console.log("hey we are *******************");
      this.setState({
          
          val:e.target.value,
  
      },()=>{
          this.setState({
              listFilter:this.state.OffreStage.filter(elm=>(elm.titre.includes(this.state.val)))
              })
          }
      )
      console.log("----------------------- val ",this.state.val)
  }
 
      render() {
          //console.log(this.state.OffreStage);
          return (
            <div className="container" style={{minWidth:'900px'}}>
     
            <Alert
               message="Les Offres de stages"
               description="Bienvenue sur Les Offres de Stages."
               type="info"
               showIcon
               />
               <br></br>
               <div className="se mb-4">
                            <div className="se-header">Search</div>
                            <div className="se-body">
                                <div className="input-group">
                                    <input className="form-control" type="text" 
                                    placeholder="Enter search titre..." 
                                    aria-label="Enter search term..." 
                                    value={this.state.val} onChange={(e)=>{this.recherche(e)}}aria-describedby="button-search" />
                                    <button className="btn btn-primary" id="button-search" type="button">Go!</button>
                                </div>
                            </div>
                </div>
                        <Link to="/AddOffreStage"><div className="card" >
                          <b style={{textAlign:"center",fontSize:"18px",fontWeight:"normal",fontFamily:"ui-sans-serif"}}>Ajouter une offre de stage</b>
                        </div> </Link>
                        <br></br>
             
                  
                      {this.OffreStageList()}
                </div>
                   
    
                  
    
          )
      }
  }
  
  