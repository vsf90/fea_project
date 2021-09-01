import React from 'react'
import './Sprint.scss';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import Sprintform from '../Sprint/Sprintform/Sprintform';


export default function Sprint() {
    return (
        <div>
       

<main>
  
  <a href="#" class="carte card3" style={{height: "500px",
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
        <h2 class="title">SPRINT PRO 15mn</h2>
       <p className="txt" style={{lineHeight:"120%"}}>
      Vous avez des besoins des conseils de professionnels, de recommandations qui soient basées sur des critères objectifs, et accéder à des personnalités positives, des informations pourrant se transformer en opportunités pour vous et pour vos proches.
      Boussole Pro synchronise la relation pour vous. </p> 
  <button class="comnd"  type="submit"><Link  to="/Sprintform" className="button" >Je s'ouhaite un Sprint Pro</Link></button>
      </div>
  </a>
  <Switch>
        <Route exact path="/Sprintform" exact component={Sprintform} />
  </Switch>
</main>


        </div>
        
    );
}
