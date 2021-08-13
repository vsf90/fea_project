
import "../Acueil/Body.component.css";
//import "../Acueil/Acueil.component.css";
import photo1 from "../../image/f1.jpg";
import photo2 from "../../image/f2.jpg";
import photo3 from "../../image/f3.jpg";
import photo4 from "../../image/f4.jpg";
import photo5 from "../../image/f5.jpg";
import {Link} from 'react-router-dom';
import AddPublication from './AddPublication';
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
                    
                   
                   
                   { /*<nav aria-label="Pagination">
                        <hr className="my-0" />
                        <ul className="pagination justify-content-center my-4">
                            <li className="page-item disabled"><a className="page-link" href="#" tabindex="-1" aria-disabled="true">Newer</a></li>
                            <li className="page-item active" aria-current="page"><a className="page-link" href="#!">1</a></li>
                            <li className="page-item"><a className="page-link" href="#!">2</a></li>
                            <li className="page-item"><a className="page-link" href="#!">3</a></li>
                            <li className="page-item"><a className="page-link" href="#!">4</a></li>
                            <li className="page-item"><a className="page-link" href="#!">5</a></li>
                            <li className="page-item"><a className="page-link" href="#!">6</a></li>
                            <li className="page-item"><a className="page-link" href="#!">7</a></li>
                            <li className="page-item disabled"><a className="page-link" href="#!">...</a></li>
                            <li className="page-item"><a className="page-link" href="#!">15</a></li>
                            <li className="page-item"><a className="page-link" href="#!">16</a></li>
                            <li className="page-item"><a className="page-link" href="#!">17</a></li>
                            <li className="page-item"><a className="page-link" href="#!">18</a></li>
                            <li className="page-item"><a className="page-link" href="#!">19</a></li>
                            <li className="page-item"><a className="page-link" href="#!">Older</a></li>
                        </ul>
          </nav>*/}
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
  
  