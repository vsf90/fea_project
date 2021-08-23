
import {Link} from 'react-router-dom';
import React, { Component } from 'react'
import axios from 'axios';
import { Alert} from 'antd';
import RecordsListPublications from "./RecordsListPublications.component";

  
  export default class ListPublications extends Component {
      
  constructor(props){
    super(props);
    this.state={Publication: []};
  }
  
  componentDidMount(){
    axios.get('http://localhost:8080/BoussolePro-backend/listPublication.php')
    .then(response=>{
      this.setState({Publication: response.data});
      console.log("lis pubs",this.state.Publication);
   })
   .catch(function (error){
     console.log(error);
    })
    }
    
    PublicationList(){
      //console.log(this.state.OffreStage);
       return this.state.Publication.map(function(object,i){
        return <RecordsListPublications obj={object} key={i} />
       
       });
    }
 
      render() {
          return (
            <div className="containerBody" style={{minWidth:'1000px'}}>
            <div className="row">
           
                <div className="col-lg-8"> 
                <Alert
                message="Actualités Boussole Pro"
                description="Bienvenue sur la liste des publications Boussole Pro." 
                type="info"
                showIcon
                />
                <br></br>
                
                
                        {this.PublicationList()}
 
                  
                </div>
                
   
      </div>
      </div>
          )
      }
  }
  
  