import './App.css';
import "antd/dist/antd.css";
import "@ant-design/icons"
import Home from './components/home.component';
import Login from './components/Login/Login.component';
import { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route,Switch } from 'react-router-dom';
import Register from './components/Login/Register.component';
import start from './page/start';
import history from './history';
import { AppConfig, AppConfigContext } from './config';
import PrivateRoute from './components/privateRoute/privteRoute';
import Authentication from './page/auth';


let  currentUser  ={};
class App extends Component {

  clearStorage(){
    localStorage.removeItem('user')
    localStorage.removeItem('loggedIn')
    localStorage.removeItem('email')
    localStorage.removeItem('ID')
    this.setState({ loggedIn: false, user: null})
  }
  
  render() {
    return (
      <AppConfigContext.Provider value={AppConfig()}>
        <div className="back">
          <Switch>
            <Route path='/auth' component={Authentication} />
            <PrivateRoute path='/' component={()=><Home signout={this.clearStorage.bind(this)}/>} />
            <Redirect from='*' to='/' />
          </Switch>

        {/* <Router >
          <Switch>
            <Route path="/" component={Register} exact/>
            <Route path="/Login" component={start} exact/> 
          </Switch>
        </Router> */}
        
        </div>
      </AppConfigContext.Provider>
    )
  }
}

export default App;