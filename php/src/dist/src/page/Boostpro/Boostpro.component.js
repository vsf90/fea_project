import React from 'react'
import './Boostpro.scss';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import Boostform from '../Boostpro/Boostform/Boostform';



export default function Boostpro() {
    return (
        <div>
       

<main>
  
  <a href="#" class="carte cardboost" style={{height: "500px",
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
backgroundPositionX: "95%",
width: "1000px",
backgroundColor:"white",
borderRadius:"10px",
}}> 
      <div class="inner">
        <h2 class="title">Boost Pro</h2>
       <p className="txt" style={{lineHeight:"120%"}}>
     Encourageons la réussite des entrepreneurs de notre communauté FEA pour plus de résilence économique. </p> 
  <button class="comnd"  type="submit"><Link  to="/Boostform" className="button" >Je souhaite un Boost Pro</Link></button>
      </div>
  </a>
  <Switch>
        <Route exact path="/Boostform" exact component={Boostform} />
  </Switch>
</main>


        </div>
        
    );
}
