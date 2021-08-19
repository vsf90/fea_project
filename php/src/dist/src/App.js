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
import { Component } from 'react';
import EditCompte from './page/NosReseaux/EditCompte/EditCompte.component';

let  currentUser  ={};

export default class App extends Component {
 
  constructor(props) {    
    super(props);
     currentUser = localStorage.getItem('user'); 
    this.state = {
      loggedIn: localStorage.getItem('loggedIn') === "true" ?  true : false,
      user: {
        email: currentUser ? currentUser.email : '',
      },
    }
  }
  DoIdsd(){
    localStorage.removeItem('user')
    localStorage.removeItem('loggedIn')
    this.setState({ loggedIn: false, user: null})
  }
  render() {
      console.log('this.state.loggedIn',this.state.loggedIn)
    
    const app = this.state.loggedIn?
   <Route to='/'> <Home signout={() =>  this.DoIdsd()  }/> </Route> : 
    <Route to='/Regester'>
    <Register signIn={(user) => this.setState({ loggedIn: true })} />
    </Route>;
    
    return (
      <div className="back">
     <Router>
        <Switch>
          <Route exact path = "/"><Login/></Route>
          <Route path = "/register"><Register/></Route>
          <Route exact path='/inscription'><EditCompte/></Route>
          <Route exact path='/home'><Home/></Route>
        </Switch>
      </Router>
      {/* <Register></Register> */}
      </div>
    )
  }
}
