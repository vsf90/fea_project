import { Alert } from 'antd';
import React from 'react'
import test from "../../../img/picturesExperts/1.jpg";
import './CompteAbonnée.component.css';
import axios from 'axios';
import {Component} from 'react';
export default class CompteAbonnée extends Component{
    constructor(props){
        super(props);
        this.state={ID:'',
                    urlImage:'',
                     topVille:'',
                    Nom:'',
                    Prenom:'',
                  
                    verset:'',
                    activiteProfessionnelle:'',
                    Entreprise:'',
                    objetEntreprise:'',
                    Pays:'',
                    Ville:'',
                    Email:'',
                    expertise:'',
                    expertiseSouhaitez:'',
                    centresInteret:'',
                    abonnement:''
                    };
     
        //console.log(this.state.demandeSprint);
      }
      
      componentDidMount(){
          const config={
              headers:{
                  Authorization: 'Bearer'+ localStorage.getItem('email')
              }
          };
          console.log(localStorage.getItem('email'));
        axios.get('http://localhost:8080/BoussolePro-backend/listUser.php?email='+localStorage.getItem('email'))
        .then(response=>{
            console.log(response);
          this.setState({ID: response.data.ID,
              Nom: response.data.nom,
                        urlImage:response.data.urlImage,
                        topVille:response.data.topVille,
                        Prenom:response.data.prenom,
                        verset:response.data.verset,
                        activiteProfessionnelle:response.data.activiteProfessionnelle,
                        Entreprise:response.data.entreprise,
                        objetEntreprise:response.data.objetEntreprise,
                        Pays:response.data.pays,
                        Ville:response.data.ville,
                        Email:response.data.email,
                        expertise:response.data.expertise,
                        expertiseSouhaitez:response.data.expertiseSouhaitez,
                        centresInteret:response.data.centresInteret,
                        abonnement:response.data.abonnement});
       })
       .catch(function (error){
         console.log(error);
        })

        }
     
    render() {
       
    return (
        <div className="clearfix" style={{minWidth:"1200px"}}>
      <Alert
                message="Compte Boussole Pro"
                description="Bienvenue sur votre compte de Boussole Pro."
                type="info"
                showIcon
                />
                <br></br>
        <div style={{backgroundColor:"white",paddingTop:"10px"}} >
       
        <form method="post">
            <div class="row" >
                <div class="col-md-4">
                    <div class="profile-img">
                        <img src={this.state.urlImage} />
                        
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="profile-head">
                                <h4 style={{textAlign:"center"}}>
                                    {this.state.Prenom} {this.state.Nom}
                                </h4>
                                <h6 style={{textAlign:"center"}}>
                                {this.state.activiteProfessionnelle}
                                </h6>
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
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
                        <div style={{color:"black"}}>{this.state.topVille}</div><br/>
                        
                    </div>
                    <div class="profile-work" style={{lineHeight:"60%"}}>
                        <p style={{fontSize:"13px"}}>Email</p>
                        <div style={{color:"black"}}>{this.state.Email}</div><br/>
                        
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
                                            <p>{this.state.ID}</p>
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
                                            <p>{this.state.verset}</p>
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
                                            <p>{this.state.activiteProfessionnelle}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Entreprise</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.Entreprise}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Objet de l'entreprise</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.objetEntreprise}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Pays</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.Pays}</p>
                                        </div>
                                    </div>
                        </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Ville</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.Ville}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Mon expertise pour networker avec vous</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.expertise}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Les expertises que je souhaite développer avec vous</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.expertiseSouhaitez}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Mes centres d'intérets professionnels</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.centresInteret}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Type d'abonnement</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.abonnement}</p>
                                        </div>
                                    </div>
                            <div class="row">
                                
                            </div>
                        </div>
                    </div>
                </div>
        </form>           
    </div>
       </div>
    )
}
}
