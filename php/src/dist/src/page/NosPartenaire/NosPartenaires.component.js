import "./NosPartenaires.component.css";

import photo1 from "../../image/fp1.png";
import photo2 from "../../image/fp2.png";
import photo3 from "../../image/fp3.jpg";

import { Alert } from "antd";
import axios from 'axios';
import RecordsListPartenaire from './RecordsListPartenaire.js'

import React, { Component } from 'react'
  
  export default class NosPartenaires extends Component {
    constructor(props){
        super(props);
        this.state={listPartenaire: []};
        //console.log(this.state.demandeSprint);
      }
      
      componentDidMount(){
        axios.get('http://localhost/BoussolePro-backend/listPartenaire.php')
        .then(response=>{
          this.setState({listPartenaire: response.data});
       })
       .catch(function (error){
         console.log(error);
        })
        }
        
        PartenaireList(){
          console.log(this.state.listPartenaire);
           return this.state.listPartenaire.map(function(object,i){
            return <RecordsListPartenaire obj={object} key={i} />
           
           });
        }
      render() {
          return (
            <div className="containerBody" style={{minWidth:"900px"}}>
            <div className="rowpartners" >
           
                <div className="col-lg-10" style={{display:"block",margin:"auto",padding:"auto"}}> 
                <Alert
                message="Partenaires de Boussole Pro"
                description="Bienvenue sur la page Partenaires de Boussole Pro."
                type="info"
                showIcon
                />
                <br></br>
                
                {this.PartenaireList()}

                    
                               
                   
                </div>
                
             
            </div>
      

    
      </div>
          )
      }
  }
  
  