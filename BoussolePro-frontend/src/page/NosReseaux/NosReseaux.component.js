import { Alert } from "antd";
import Search from "antd/lib/input/Search";
import React, { Component } from "react";
import history from "../../history";
import "./NosReseaux.component.css";
import RecordsListNotreReseau from './RecordsListNotreReseau.js';
import axios from 'axios';
import { config } from '../../config';
class NosReseaux extends Component {
  constructor(props){
    super(props);
    this.state = {
      val:'',
      listNotreReseau: [],
      listFilter: []
  };
    //console.log(this.state.demandeSprint);
  }
  
  componentDidMount(){
    axios.get(config+'/BoussolePro-backend/listNotreReseau.php')
    .then(response=>{
      console.log("------------------>listNotreReseau.php",response.data);
      this.setState({listNotreReseau: response.data, listFilter: response.data});
   })
   .catch(function (error){
     console.log(error);
    })
    }
    
    NotreReseauList(){
      console.log(this.state.listNotreReseau);
      return Array.isArray(this.state.listFilter) && this.state.listFilter.map(function(object,i){
        return <RecordsListNotreReseau obj={object} key={i} />
       
       });
    }
 

    recherche(e){
      console.log("hey we are *******************");
      this.setState({
          
          val:e.target.value,
  
      },()=>{
          this.setState({
              listFilter:this.state.listNotreReseau.filter(elm=>(elm.prenom.includes(this.state.val)))
              })
          }
      )
      console.log("----------------------- val ",this.state.val)
  }

  render() {
    return (
      <div className="clearfix">
        <Alert
                message="Notre Réseau Pro"
                description="Bienvenue sur le Réseau Pro de Boussole Pro."
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
                                    value={this.state.val} onChange={(e)=>{this.recherche(e)}} aria-describedby="button-search" />
                                    <button className="btn btn-primary" id="button-search" type="button">Go!</button>
                                </div>
                            </div>
                </div>
                <br></br>
                <br></br>

        <div className="row">
        {this.NotreReseauList()}
           
       
        </div>
        
      </div>
    );
  }
}

export default NosReseaux;