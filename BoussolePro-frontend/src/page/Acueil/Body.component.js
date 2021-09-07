


import {Link} from 'react-router-dom';
import React, { Component } from 'react'
import RecordsListPublication from './RecordsListPublication.js';
import axios from 'axios';
import { Alert} from 'antd';
import { config } from '../../config.js';

  
  export default class Body extends Component {
       //data=[];
  constructor(props){
    super(props);
    this.state={Publication: []};
    //console.log(this.state.OffreStage);
  }
  
  componentDidMount(){
    axios.get(config+'/BoussolePro-backend/listPublication.php')
    .then(response=>{
        console.log("pubs --------->",response);
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
            <div className="containerBody" style={{minWidth:"1000px"}}>
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
                    
                    {/* <div className="se mb-4">
                        <div className="se-header">Search</div>
                        <div className="se-body">
                            <div className="input-group">
                                <input className="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
                                <button className="btn btn-primary" id="button-search" type="button">Go!</button>
                            </div>
                        </div>
                    </div> */}
                  
                    <div className="se mb-4">
                        <div className="se-header">Categories</div>
                        <div className="se-body">
                            <div className="row">
                                <div className="col-sm-6">
                                    <ul className="list-unstyled mb-0">
                                        <li> <Link to="/OffreStage"><a href="#!">Offre de Stage/Emploi</a></Link></li>
                                        <li> <Link to="/SprintPro"><a href="#!">Sprint Pro</a></Link></li>
                                        <li> <Link to="/ShouraPro"><a href="#!">Shoura Pro</a></Link></li>
                                    </ul>
                                </div>
                                <div className="col-sm-6">
                                    <ul className="list-unstyled mb-0">
                                        <li> <Link to="/DemandeStage"><a href="#!">Demande de Stage/Emploi</a></Link></li>
                                        <li><Link to="/BoostPro"><a href="#!">Boost Pro</a></Link></li>
                                        <li><Link to="/MeetUpPro"><a href="#!">Meet Up Pro</a></Link></li>
                                        <li><Link to="/NosExperts"><a href="#!">Expert BP</a></Link></li>
                                        <li><Link to="/NosRelais"><a href="#!">Relais BP</a></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="se mb-4">
                        <div className="se-header">par Boussole PRO</div>
                        <div className="se-body">Se diriger vers le sens spirituel, vers la bonne information, la bonne personne</div>
                    </div>
                   
                </div>
            </div>
      

    
      </div>
          )
      }
  }
  
  