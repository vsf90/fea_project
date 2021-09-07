import React, { Component } from 'react'
import { Alert } from "antd";
import { Link } from "react-router-dom";
import axios from 'axios';
import RecordsListDemandeEmploi from './RecordsListDemandeEmploi.js';
import { config } from '../../config.js';
  
  export default class DemandeEmploi extends Component {
       //data=[];
  constructor(props){
    super(props);
    this.state={DemandeEmploi: [],
      val:'',
      listFilter: []};
    //console.log(this.state.OffreStage);
  }
  
  componentDidMount(){
    axios.get(config+'/BoussolePro-backend/listDemandeEmploi.php')
    .then(response=>{
      this.setState({DemandeEmploi: response.data,
        listFilter:response.data});
   })
   .catch(function (error){
     console.log(error);
    })
    }
    
    DemandeEmploiList(){
      //console.log(this.state.OffreStage);
      return Array.isArray(this.state.listFilter) && this.state.listFilter.map(function(object,i){
        return <RecordsListDemandeEmploi obj={object} key={i} />
       
       });
    }
    recherche(e){
      console.log("hey we are *******************");
      this.setState({
          
          val:e.target.value,
  
      },()=>{
          this.setState({
              listFilter:this.state.DemandeEmploi.filter(elm=>(elm.titre.includes(this.state.val)))
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
               message="Les Demandes d'Emploi"
               description="Bienvenue sur Les Demandes d'Emploi."
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
                        <Link to="/AddDemandeEmploi"><div className="card" >
                          <b style={{textAlign:"center",fontSize:"18px",fontWeight:"normal",fontFamily:"ui-sans-serif"}}>Ajouter une Demandes  d'Emploi</b>
                        </div> </Link>
                        <br></br>
             
                  
                      {this.DemandeEmploiList()}
                </div>
                   
    
                  
    
          )
      }
  }
  
  