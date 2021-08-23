import './App.css';
import "antd/dist/antd.css";
import "@ant-design/icons"
import Home from './components/home.component';
import Login from './components/Login/Login.component';
import { Component } from 'react';

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
    <Home signout={() =>  this.DoIdsd()  }/>: 
    <Login signIn={() => this.setState({ loggedIn: true })} />;
    
    return (
      <div className="back">
      {/* <Login></Login> */}
        {app}
      {/* <Register></Register> */}
      {/* <Router>
        <Switch>
          <Route exact path = "/*"><Login/></Route>
           <Route path = "/register"><Register/></Route>
          <Route exact path='/inscription'><EditCompte/></Route>
          <Route exact path='/home'><Home/></Route>
        </Switch>
      </Router>   */}
      {/* <Register></Register> */}
      </div>
    )
  }
}
