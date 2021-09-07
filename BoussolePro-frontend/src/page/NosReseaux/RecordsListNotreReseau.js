
import React, { Component } from 'react'
import "../Modérateur/Modérateurs.css";
// import ss from '../../img/picturesExperts/';
import { Link } from 'react-router-dom';


export default class RecordsListNotreReseau extends Component {
  
    render() {
      
        return (
     <div className="col-md-4 animated fadeIn" >
     <div className="card" style={{minHeight:"450px"}}>
       <div className="card-body">
         <div className="avatar" >
         <Link to={"/CompteAbonnéeReseau/"+this.props.obj.ID} className="button" >
            <img style={{maxHeight:"170px"}}
            loading="lazy"
            // src={`${process.env.PUBLIC_URL}/assets/images/${this.props.obj.image}`}
            src={`https://www.boussolepro.net/BoussolePro-backend/images/${this.props.obj.image}`}
             className="card-img-top"
             alt="fs"
  
           /></Link>
         </div>
         <h5 className="card-title">
         {this.props.obj.prenom+" "+this.props.obj.nom[0]+this.props.obj.nom[1]}
         </h5>
         <b>{this.props.obj.activiteProfessionnelle}</b>
         <p className="card-text">
           { this.props.obj.entreprise +", "+this.props.obj.pays+", "+this.props.obj.ville}
           <br />
         </p>
       </div>
     </div>
   </div>
   
        )
    }
}
