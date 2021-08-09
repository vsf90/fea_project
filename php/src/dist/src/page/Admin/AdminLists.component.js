import React from 'react';
import { Button,Alert} from 'antd';
import { EditFilled,DeleteFilled,PlusCircleOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import "./AdminList.css";
function AdminLists() {
    return (
        <div className="Administrateur">
  <Alert
                message="Bienveneu sur page de la liste des Administatuers de Boussole Pro"
                 
                type="info"
                showIcon
                />
                <br/>
                <br/>
        <div>
        
            <div className="ajouteM">
    <Link  to="/AddAdmin"><PlusCircleOutlined style={{fontSize:"30px"}} /></Link>
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
          <td>Yassine</td>
          <td>YASSINE</td>
          <td>boussolepro@fea.com</td>
          <td>Maroc</td>
          <td>Casablanca</td>
          <td>FEA Boussole PRO</td>
          <td>Services aux particuliers ,collectivites entreprise</td>
          <td>Chef de Projet</td>
          <td><Link to="/EditAdmin"><EditFilled style={{fontSize:"17px"}}/></Link> <Link> <DeleteFilled style={{fontSize:"17px"}} /></Link></td>
         
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Yassine</td>
          <td>YASSINE</td>
          <td>boussolepro@fea.com</td>
          <td>Maroc</td>
          <td>Casablanca</td>
          <td>FEA Boussole PRO</td>
          <td>Services aux particuliers ,collectivites entreprise</td>
          <td>Chef de Projet</td>
          <td><Link to="/EditAdmin"><EditFilled style={{fontSize:"17px"}}/></Link> <Link> <DeleteFilled style={{fontSize:"17px"}} /></Link></td>
         
        </tr>
      </tbody>
    </table>
    </div >
   
    
    </div>
    );
}

export default AdminLists;