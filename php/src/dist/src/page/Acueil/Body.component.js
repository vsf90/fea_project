


import {Link} from 'react-router-dom';
import React, { Component } from 'react'
import RecordsListPublication from './RecordsListPublication.js';
import axios from 'axios';
import { Alert} from 'antd';

  
  export default class Body extends Component {
       //data=[];
  constructor(props){
    super(props);
    this.state={Publication: []};
    //console.log(this.state.OffreStage);
  }
  
  componentDidMount(){
    axios.get('http://localhost:8080/BoussolePro-backend/listPublication.php')
    .then(response=>{
      this.setState({Publication: response.data});
   })
   .catch(function (error){
     console.log(error);
    })
    }
    
    PublicationList(){
      //console.log(this.state.OffreStage);
       return this.state.Publication.map(function(object,i){
        return <RecordsListPublication obj={object} key={i} />
       
       });
    }
 
      render() {
          return (
            <div className="containerBody">
            <div className="row">
           
                <div className="col-lg-8"> 
                <Alert
                message="Actualités Boussole Pro"
                description="Bienvenue sur les actualités Boussole Pro." 
                type="info"
                showIcon
                />
                <br></br>
                <Link to="/AddPublication"><div className="card" style={{marginBottom:"20px"}} >
                          <b  style={{textAlign:"center",fontSize:"18px",fontWeight:"normal",fontFamily:"ui-sans-serif"}}>Ajouter une publication</b>
                        </div> </Link>
                
                        {this.PublicationList()}
                    
                   
                   
                  
                </div>
                
                <div className="col-lg-4">
                    
                    <div className="se mb-4">
                        <div className="se-header">Search</div>
                        <div className="se-body">
                            <div className="input-group">
                                <input className="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
                                <button className="btn btn-primary" id="button-search" type="button">Go!</button>
                            </div>
                        </div>
                    </div>
                  
                    <div className="se mb-4">
                        <div className="se-header">Categories</div>
                        <div className="se-body">
                            <div className="row">
                                <div className="col-sm-6">
                                    <ul className="list-unstyled mb-0">
                                        <li><a href="#!">Offre de Stage/Emploi</a></li>
                                        <li><a href="#!">Sprint Pro</a></li>
                                        <li><a href="#!">Shoura Pro</a></li>
                                    </ul>
                                </div>
                                <div className="col-sm-6">
                                    <ul className="list-unstyled mb-0">
                                        <li><a href="#!">Demande de Stage/Emploi</a></li>
                                        <li><a href="#!">Boost Pro</a></li>
                                        <li><a href="#!">Meet Up Pro</a></li>
                                        <li><a href="#!">Expert BP</a></li>
                                        <li><a href="#!">Relais BP</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="se mb-4">
                        <div className="se-header">Side Widget</div>
                        <div className="se-body">You can put anything you want 
                        inside of these side widgets. They are easy to use, 
                        and feature the Bootstrap 5 se component!</div>
                    </div>
                   
                </div>
            </div>
      

    
      </div>
          )
      }
  }
  
  