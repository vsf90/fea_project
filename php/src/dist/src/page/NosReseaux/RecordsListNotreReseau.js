
import React, { Component } from 'react'
import "../Modérateur/Modérateurs.css";
import ss from '../../img/picturesExperts/2.jpg';
import { Link } from 'react-router-dom';


export default class RecordsListNotreReseau extends Component {
  
    render() {
      
        return (
     <div className="col-md-4 animated fadeIn" >
     <div className="card" >
       <div className="card-body">
         <div className="avatar" >
         <Link to={"/CompteAbonnée/"+this.props.obj.ID} className="button" > <img style={{maxHeight:"170px"}}
              // ../../../public/Photos Membres/PrenomAbonnee
             src={ss}
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
