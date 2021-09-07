import React from 'react'
import './Expert.scss';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import Expertform from '../ExpertBP/ExpertBP/Expertform';


export default function Expert() {
    return (
        <div>
       

<main>
  
  <a class="carte cardexpert" style={{height: "500px",
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
backgroundPositionX:"99%",
width: "1000px",
backgroundColor:"white",
borderRadius:"10px"
}}> 
      <div class="inner">
        <h2 class="title">Expert BP</h2>
       <p className="txt" style={{lineHeight:"120%"}}>
      Vous cherchez des experts qualifié et testés par la communauté FEA, vous 
      pouvez commander votre sprint et accédez à un réseau d'experts qualifiés pour un devis. </p> 
  <button class="comnd"  type="submit"><Link  to="/Expertform" className="button" >Je réserve un sprint avec un-e expert-e BP</Link></button>
      </div>
  </a>
  <Switch>
        <Route exact path="/Expertform" exact component={Expertform} />
  </Switch>
</main>


        </div>
        
    );
}
