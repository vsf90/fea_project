import './App.css';

import Register from '../src/components/Login/Register.component';

import "antd/dist/antd.css";
import "@ant-design/icons"
import { Content } from 'antd/lib/layout/layout';

import Home from './components/home.component';
import Forgotpass from './components/Login/Forgotpass.component';
import Newpass from './components/Login/Newpass.component';
import Accueil from './page/Acueil.component';
import Login from './components/Login/Login.component';
import {BrowserRouter as Router, Link, NavLink, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar.component';
<<<<<<< Updated upstream

import CompteAbonnée from './page/NosReseaux/CompteAbonnén/CompteAbonnée.component';
=======
>>>>>>> Stashed changes

function App() {
  return (
    <div className="h">
     
<<<<<<< Updated upstream
<<<<<<< Updated upstream
       <Home></Home>
         
        {/* <Login></Login>         */}
=======
=======
>>>>>>> Stashed changes
     
      <Router>
    <Switch >
    <Route path="/Nav" exact component={Home} />
    <Route path="/" exact component={Login} />
  
    </Switch>
    </Router>
            
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
