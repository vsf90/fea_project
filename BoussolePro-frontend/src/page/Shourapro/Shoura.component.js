import React from 'react'
import './Shoura.scss';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import Shouraform from '../Shourapro/Shouraform/Shouraform';


export default function Shoura() {
    return (
        <div>
       

<main>
  
  <a  class="carte cardshoura" style={{height: "500px",
position: "relative",
padding: "20px",
boxSizing: "border-box",
display: "flex",
alignItems: "flex-end",
textDecoration: "none",
border: "1px solid #30a8ff",
marginBottom: "20px",
backgroundRepeat: "no-repeat",
backgroundSize: "50% 70%",
backgroundPosition: "center right",
width: "1000px",
backgroundColor:"white",
borderRadius:"10px"
}}> 
      <div class="inner">
        <h2 class="title">Shoura PRO 1h</h2>
       <p className="txt" style={{lineHeight:"120%"}}>
      Vous n'avez pas la possibilité d'accéder à des professionnels dans un autre réseau? <br/> Boussole Pro rassemble autour de vous des compétences, des points de vue vous apportant de la valeur ajoutée, peut importe votre problématique professionnelle. </p> 
  <button class="comnd"  type="submit"><Link  to="/Shouraform" className="button" >Je s'ouhaite un Shoura Pro</Link></button>
      </div>
  </a>
  <Switch>
        <Route exact path="/Shouraform" exact component={Shouraform} />
  </Switch>
</main>


        </div>
        
    );
}
