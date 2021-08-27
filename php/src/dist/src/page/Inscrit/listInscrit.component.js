import { Button,Alert,Row,Col  } from 'antd';
import { EditFilled,DeleteFilled,PlusCircleOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import RecordsListInscrit from '../Inscrit/RecordsListInscrit'
import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

export default class Inscrit extends Component {
  

 constructor(props){
  super(props);
  this.state={listInscrit: []};
 
}

componentDidMount(){
  axios.get('http://localhost/BoussolePro-backend/listInscrit.php')
  .then(response=>{
    this.setState({listInscrit: response.data});
 })
 .catch(function (error){
   console.log(error);
  })
  }
  
  InscritList(){
    console.log(this.state.listInscrit);
     return this.state.listInscrit.map(function(object,i){
      return <RecordsListInscrit obj={object} key={i} />
     
     });
  }

  render() {
    return (
      <div className="inscrit">
    
    <div>
    <Row>
   <Col span={24}>
    <Alert
                message="Bienvenue sur page de la liste des nouveaux inscrits Boussole Pro"
                 
                type="info"
                showIcon
                />
                 <br/>
                 <br/>
 
    <div className="ajouteM">
   
    </div>
       <Table responsive bordered>
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">La photo</th>
      <th scope="col">Prénom</th>
      <th scope="col">Nom</th>
      <th scope="col">Email</th>
      <th scope="col">Téléphone</th>
      <th scope="col">Vous êtes?</th>
      <th scope="col">Un verset - hadith qui vous inspire</th>
      <th scope="col">Pays</th>
      <th scope="col">Ville</th>
      <th scope="col">Entreprise</th>
      <th scope="col">Objet de l'entreprise</th>
      <th scope="col">Activité professionnelle</th>
      <th scope="col">secteur de l'entreprise</th>
      <th scope="col">expertise que vous souhaitez developper</th>
      <th scope="col">Votre expertise</th>
      <th scope="col">Centres d'interets</th>
      <th scope="col">Je confirme soumettre 2 contacts</th>
      <th scope="col">êtes vous un membre de FEA?</th>
      <th scope="col">Quel abonnement choisissez-vous?</th>
      <th scope="col">Top 3 des villes où vous êtes en déplacement</th>
      <th scope="col">les conditions d'utilisation</th>
      <th scope="col">Contacts 1ere recommandation</th>
      <th scope="col">Téléphone de votre première recommandation</th>
      <th scope="col">Contacts 2eme recommandation</th>
      <th scope="col">Téléphone de votre seconde recommandation</th>
      <th scope="col">les trois choses essentielles pour construire un réseau de qualité</th>
      <th scope="col">Dans votre réseau vous savez que Rachid a une information pouvant grandement aider Mohamed...</th>
      <th scope="col">Comment pouvez-vous détruire votre réseau</th>
      <th scope="col">les clés pour ouvrir un réseau de qualité</th>
      <th scope="col">Vous venez d’obtenir une information importante pour la communauté...</th>
      <th scope="col">Grâce à Boussole Pro vous avez été connecté à des personnes...</th>
      <th scope="col">Amine vous a bien aidé...</th>
      <th scope="col">Malgré votre abonnement à Boussole Pro vous avez aidé des frères...</th>






      <th scope="col" style={{textAlign:"center"}}>Action</th>
    </tr>
  </thead>
  <tbody>
  {this.InscritList()}
    
  </tbody>
</Table>
</Col></Row>
</div >


</div>

     
    )
  }
}
