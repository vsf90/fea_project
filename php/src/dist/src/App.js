import './App.css';
import AdminList from './page/Admin/AdminLists.component';
import Register from '../src/components/Login/Register.component';

import "antd/dist/antd.css";
import "@ant-design/icons"
import { Content } from 'antd/lib/layout/layout';

import Home from './components/home.component';
import Forgotpass from './components/Login/Forgotpass.component';
import Newpass from './components/Login/Newpass.component';
import Accueil from './page/Acueil/Acueil.component';
import Login from './components/Login/Login.component';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar.component';
import Meetform from './page/Meetup/Meetform/Meetform'
import FormAbonne from './page/FormAbonne.component';
import FormAbonne2 from './page/FormAbonne2.component';
import FormAbonne0 from './FormAbonne0.component';



function App() {
  return (
    
     
    <div className="h">
    {/* <FormAbonne0></FormAbonne0> */}
     
       <Router>
    <Switch >
    <Route path="/Nav" exact component={Home} />
    <Route path="/" exact component={Login} />
    <Route path="/Meetform" exact component={Meetform} /> 
  
    </Switch>
    </Router> 


    </div>
  );
}

export default App;
