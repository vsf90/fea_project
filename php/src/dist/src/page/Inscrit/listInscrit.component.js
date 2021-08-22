import { Button,Alert,Row,Col  } from 'antd';
import { EditFilled,DeleteFilled,PlusCircleOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import RecordsListInscrit from '../Inscrit/RecordsListInscrit'
import React, { Component } from 'react'

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
                message="Bienveneu sur page de la liste des inscrits Boussole Pro"
                 
                type="info"
                showIcon
                />
                 <br/>
                 <br/>
 
    <div className="ajouteM">
   
    </div>
       <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Prénom</th>
      <th scope="col">Nom</th>
      <th scope="col">Email</th>
      <th scope="col">Pays</th>
      <th scope="col">Ville</th>
      <th scope="col">Entreprise</th>
      <th scope="col">Objet de l'entreprise</th>
      <th scope="col">Activité professionnelle</th>
      <th scope="col" style={{textAlign:"center"}}>Action</th>
    </tr>
  </thead>
  <tbody>
  {this.InscritList()}
    
  </tbody>
</table>
</Col></Row>
</div >


</div>

     
    )
  }
}
