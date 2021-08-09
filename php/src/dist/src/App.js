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
import Modérateurs from './page/Modérateur/Modérateurs.component';
import AddAdmin from './page/Admin/AddAdmin/AddAdmin.component';




function App() {
  return (

    <div>
         <Home></Home>
       <Router>
    <Switch >
    <Route path="/Nav" exact component={Home} />
    <Route path="/" exact component={Login} />
  
    </Switch>
    </Router>


    </div>
  );
}

export default App;
