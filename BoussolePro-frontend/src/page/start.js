

import { Component } from 'react';
import Home from '../components/home.component';
import Login from '../components/Login/Login.component';

let  currentUser  ={};
class start extends Component {
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
      localStorage.removeItem('email')
      localStorage.removeItem('ID')
      this.setState({ loggedIn: false, user: null})
    }
 
 
 
  render() {

    console.log('this.state.loggedIn',this.state.loggedIn)
    const app = this.state.loggedIn?
    <Home signout={() =>  this.DoIdsd()  }/>: 
    <Login signIn={(user) => this.setState({ loggedIn: true, user:user})} />;
    
    return (
      <div className="back">
      {app}
      </div>
    )
  }
}

export default start;