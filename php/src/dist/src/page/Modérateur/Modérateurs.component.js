import { Button,Alert,Row,Col  } from 'antd';
import { EditFilled,DeleteFilled,PlusCircleOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
 import "./Modérateurs.css";
function Modérateurs() {

   
  return (
        <div className="Modérateurs">
    
    <div>
    <Row>
   <Col span={24}>
    <Alert
                message="Bienveneu sur page de la liste des Modérateurs de Boussole Pro"
                 
                type="info"
                showIcon
                />
                 <br/>
                 <br/>
 
    <div className="ajouteM">
    <Link  to="/AddModérateur"><PlusCircleOutlined style={{fontSize:"30px"}} /></Link>
    </div>
       <table className="table">
  <thead>
    <tr>
      <th scope="col">Rang</th>
      <th scope="col">Nom</th>
      <th scope="col">Prénom</th>
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
    <tr>
      <th scope="row">1</th>
      <td>Mohamed</td>
      <td>AL</td>
      <td>mohamed@fea.com</td>
      <td>Arabie Saoudite</td>
      <td>Riyadh</td>
      <td>Altoms</td>
      <td>Transport ferroviaire</td>
      <td>Responsable achats</td>
      <td><Link to="/EditModérateur"><EditFilled style={{fontSize:"20px"}}/></Link> <Link> <DeleteFilled style={{fontSize:"20px"}}/></Link></td>
     
    </tr>
    <tr>
    <th scope="row">2</th>
      <td>Mohamed</td>
      <td>AL</td>
      <td>mohamed@fea.com</td>
      <td>Arabie Saoudite</td>
      <td>Riyadh</td>
      <td>Altoms</td>
      <td>Transport ferroviaire</td>
      <td>Responsable achats</td>
      <td><Link to="/EditModérateur"><EditFilled style={{fontSize:"20px"}}/></Link> <Link> <DeleteFilled style={{fontSize:"20px"}}/></Link></td>
    </tr>
    <tr>
    <th scope="row">3</th>
      <td>Mohamed</td>
      <td>AL</td>
      <td>mohamed@fea.com</td>
      <td>Arabie Saoudite</td>
      <td>Riyadh</td>
      <td>Altoms</td>
      <td>Transport ferroviaire</td>
      <td>Responsable achats</td>
      <td><Link to="/EditModérateur"><EditFilled style={{fontSize:"20px"}}/></Link> <Link> <DeleteFilled style={{fontSize:"20px"}}/></Link></td>
    </tr>
  </tbody>
</table>
</Col></Row>
</div >


</div>

  );
}

export default Modérateurs;