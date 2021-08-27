import { Alert } from 'antd';
import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { config } from '../../../config';
import './CompteAbonnée.component.css';

export default class CompteAbonnéeReseau extends Component{
    constructor(props){
        super(props);
        
        this.state={
         user:[]
        }
         
      }
    componentDidMount(){
        console.log("id",this.props.match.params.id);
        axios.get(config+'/BoussolePro-backend/listUsersReseau.php?id='+this.props.match.params.id)
        .then(response=>{
          console.log("------------------------> response!!!!!",response)
          this.setState({
                      user:response.data
                      });
       })
       .catch(function (error){
         console.log(error);
        })
      }
    render() {
        console.log(this.state.user);
    return (
        <div className="clearfix" style={{minWidth:"1000px"}}>
      <Alert
                message="Profile Boussole Pro"
                description="Bienvenue sur le profile d'un de nos abonnés Boussole Pro."
                type="info"
                showIcon
                />
                <br></br>
        <div>
       
        <form method="post" style={{backgroundColor:"white",paddingTop:"20px"}}>
            <div class="row">
                <div class="col-md-4">
                    <div class="profile-img">
                        <img src={this.state.user.urlImage} />
                        
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="profile-head">
                                <h5>
                                   {this.state.user.prenom}
                                </h5>
                                <h6>
                                {this.state.user.activiteProfessionnelle}
                                </h6>
                        <ul class="nav nav-tabs" id="myTab" role="tablist" style={{marginTop:"70px"}}>
                            <li class="nav-item">
                            </li>
                            <li class="nav-item">
                            </li>
                        </ul>
                    </div>
                </div>
               
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="profile-work" style={{lineHeight:"60%"}}>
                        <p style={{fontSize:"13px"}}>Top 3 villes où je me déplace</p>
                        <div style={{color:"black"}}>{this.state.user.topVille}</div><br/>

                        
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="tab-content profile-tab" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Rang</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.user.rang}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Membre de "Compagnon"</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>OUI</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Un verset qui vous inspire</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.user.verset}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>2 recommandations validées</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>OUI</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>E-learning networking validé</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>OUI</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Activité professionnelle</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.user.activiteProfessionnelle}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Entreprise</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.user.entreprise}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Objet de l'entreprise</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.user.objetEntreprise}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Pays</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.user.pays}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Ville</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.user.ville}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Mon expertise pour networker avec vous</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.user.expertise}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Les expertises que je souhaite développer avec vous </label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.user.expertiseSouhaitez}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Mes centres d'intérets professionnels </label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.user.centresInteret}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Type d'abonnement </label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.user.abonnement}</p>
                                        </div>
                                    </div>
                        </div>

                       
                    </div>
                </div>
            </div>
        </form>           
    </div>
       </div>
    );
}
}
