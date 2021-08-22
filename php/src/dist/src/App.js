import React, { Component } from 'react';
import Home from './components/home.component';
import Login from './components/Login/Login.component';
import "antd/dist/antd.css";
import "@ant-design/icons";

let  currentUser  ={};
class App extends Component {
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
      const app = this.state.loggedIn?
      <Home signout={() =>  this.DoIdsd()  }/> :  
       <Login signIn={() => this.setState({ loggedIn: true })} />;
      return (
         <div>
            {app}
         </div>
      );
   }
}

export default App;