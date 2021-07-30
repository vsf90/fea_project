import React from 'react'
import './Services.component.css';
import shoura from "../../img/shoura.png";
import meetup from "../../img/meetup.png";
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import boost from "../../img/boost.PNG";
import sprint from "../../img/sprint.png";
import relais from "../../img/relais.PNG";
import expert from "../../img/expert.PNG";
=======
=======
>>>>>>> Stashed changes
import boost from "../../img/boost.png";
import sprint from "../../img/sprint.png";
import relais from "../../img/relais.png";
import expert from "../../img/expert.png";
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import SprintPro from '../Sprint/Sprint.component';
import Relais from '../RelaisBP/Relais.component';
import Expert from '../ExpertBP/Expert.component';
import ShouraPro from '../Shourapro/Shoura.component';
import BoostPro from '../Boostpro/Boostpro.component';
import MeetUpPro from '../Meetup/Meetup.component';
export default function Services() {
    return (
        <div>
            <div class="container">
  <div class="card">
    <div class="card-header">
      <img src={sprint} alt="rover" />
    </div>
    <div class="card-body">
     
     <div style={{marginBottom:"5px",fontWeight:"bold"}}>
      Sprint Pro 15 mn
     </div>
     <button class="tag "><Link  to="/SprintPro" className="text">Découvrir</Link></button>
    
   </div>
  </div>
  
 
  <div class="card">
    <div class="card-header">
      <img src={meetup} alt="ballons" />
    </div>
    <div class="card-body">
     
    <div style={{marginBottom:"5px",fontWeight:"bold"}}>
       Meet'up pro 1h30
      </div>
      <button class="tag "><Link  to="/MeetUpPro" className="text">Découvrir</Link></button>
     
    </div>
  </div>
  <div class="card">
    <div class="card-header">
      <img src={shoura} alt="city" />
    </div>
    <div class="card-body">
     
    <div style={{marginBottom:"5px",fontWeight:"bold"}}>
       Shoura Pro 1h
     </div>
     <button class="tag "><Link  to="/ShouraPro" className="text">Découvrir</Link></button>
    
   </div>
  </div>
  <div class="card">
    <div class="card-header">
      <img src={boost} alt="ballons" />
    </div>
    <div class="card-body">
     
    <div style={{marginBottom:"5px",fontWeight:"bold"}}>
      Boost Pro
     </div>
     <button class="tag "><Link  to="/BoostPro" className="text">Découvrir</Link></button>
    
   </div>
  </div>
  <div class="card">
    <div class="card-header">
      <img src={relais} alt="ballons" />
    </div>
    <div class="card-body">
     
    <div style={{marginBottom:"5px",fontWeight:"bold"}}>
       Relais BP
     </div>
     <button class="tag"><Link  to="/Relais" className="text">Découvrir</Link></button>
    
   </div>
  </div>
  <div class="card">
    <div class="card-header">
      <img src={expert} alt="ballons" />
    </div>
    <div class="card-body">
     
    <div style={{marginBottom:"5px",fontWeight:"bold",textAlign:"center"}}>
      Expert BP
     </div>
     <button class="tag "><Link  to="/Expert" className="text">Découvrir</Link></button>
    
   </div>
   <Switch>
        <Route exact path="/SprintPro" exact component={SprintPro} />
        <Route path="/BoostPro" exact component={BoostPro} />  
        <Route path="/MeetUpPro" exact component={MeetUpPro} />  
        <Route path="/Relais" exact component={Relais} />  
        <Route path="/Expert" exact component={Expert} /> 
        <Route path="/ShouraPro" exact component={ShouraPro} /> 
  </Switch>
  </div>
        </div>
        </div>
    );
}

