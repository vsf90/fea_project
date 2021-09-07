import React from 'react'
import './Meetup.scss';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import Meetform from '../Meetup/Meetform/Meetform';


export default function Meetup() {
    return (
        <div>
       

<main>
  
  <a  class="carte cardmeet" style={{height: "500px",
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
borderRadius:"10px",

}}> 
      <div class="inner">
        <h2 class="title">MEET'UP PRO 1h30</h2>
       <p className="txt" style={{lineHeight:"120%"}}>
       Un café, un restaurant avec Boussole Pro, en France ailleurs dans le monde. Désormais rien de plus facile d’investir votre temps avec des personnes qui vous tire vers le haut professionnellement et où on se tire tous vers le Haut. Avec le covid, ce service est proposé à distance « e-meetpro ». </p> 
  <button class="comnd"  type="submit"><Link  to="/Meetform" className="button" >Je s'ouhaite un Meet'up Pro</Link></button>
      </div>
  </a>
  <Switch>
        <Route exact path="/Meetform" exact component={Meetform} />
  </Switch>
</main>


        </div>
        
    );
}
