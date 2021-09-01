import React from 'react'
import './Relais.scss';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import Relaisform from '../RelaisBP/RelaisBP/Relaisform';



export default function Relais() {
    return (
        <div>
       

<main>
  
  <a href="#" class="carte cardrelais" style={{height: "500px",
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
backgroundPositionX: "99%",
width: "1000px",
backgroundColor:"white",
borderRadius:"10px"
}}> 
      <div class="inner">
        <h2 class="title">Relais BP</h2>
       <p className="txt" style={{lineHeight:"120%"}}>
     Vous cherchez un conseil dans les domaines suivants: RH,Immobilier et
       Conseil export. Vous pouvez directement commander un sprint pro avec nos relais
       BP, en précisant le nom du relais. <br/><span style={{fontWeight:"bold"}}>Finalité du service:</span> capter la bonne information au bon moment
     
     . </p> 
  <button class="comnd"  type="submit"><Link  to="/Relaisform" className="button" >Je réserve un sprint avec un relais</Link></button>
      </div>
  </a>
  <Switch>
        <Route exact path="/Relaisform" exact component={Relaisform} />
  </Switch>
</main>


        </div>
        
    );
}
