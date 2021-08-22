
import React, { Component } from 'react'
import { Button,Alert,Row,Col  } from 'antd';
import { EditFilled,DeleteFilled,PlusCircleOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import "../Modérateur/Modérateurs.css";
import {Redirect} from 'react-router';
import CompteAbonnéeReseau from '../../page/NosReseaux/CompteAbonnén/CompteAbonnéeReseau.component';
import ss from '../../img/picturesExperts/2.jpg';

export default class RecordsListNotreReseau extends Component {
    onclick(id){
      window.location.push('/CompteAbonnée/'+id);
       } 
    render() {
      
        return (
     <div className="col-md-4 animated fadeIn" >
     <div className="card" >
       <div className="card-body">
         <div className="avatar" >
         <Link  to={"/CompteAbonnéeReseau/"+this.props.obj.ID} className="button" > <img style={{maxHeight:"170px"}} 
             src={this.props.obj.image}
             onClick={()=>{
               onclick(this.props.obj.ID)
             }}
             className="card-img-top"
             alt=""
             
           /></Link>
         </div>
         <h5 className="card-title">
         {this.props.obj.prenom+" "+this.props.obj.nom[0]+this.props.obj.nom[1]}
         </h5>
         <p className="card-text">
           {this.props.obj.pays+", "+this.props.obj.ville}
           <br />
         </p>
       </div>
     </div>
   </div>
   
        )
    }
}
