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
import FormAbonne from './page/NosReseaux/EditCompte/FormAbonne.component';
import FormAbonne2 from './page/NosReseaux/EditCompte/FormAbonne2.component';
import FormAbonne0 from './page/NosReseaux/EditCompte/FormAbonne0.component';

//  let  currentUser  ={};

// export default class App extends Component {
 
//   constructor(props) {    
//     super(props);
//      currentUser = localStorage.getItem('user'); 
//     this.state = {
//       loggedIn: localStorage.getItem('loggedIn') === "true" ?  true : false,
//       user: {
//         email: currentUser ? currentUser.email :'',
//       },
//     }
//   }
//   DoIdsd(){
//     localStorage.removeItem('user')
//     localStorage.removeItem('loggedIn')
//     this.setState({ loggedIn: false, user: null})
//   }
//   render() {
//       console.log('this.state.loggedIn',this.state.loggedIn)
//     const App = this.state.loggedIn?
//     <Home signout={() =>  this.DoIdsd()  }  />  :
//     <Login signIn={(user) => this.setState({ loggedIn: true, user: user })} />;

//     return (
//       <div className="back">
//         {App}
//       </div>
//     );
// }
// }
function App(){
 return (
    
    <div className="h">
     <Login></Login> 
      <Register></Register>
    <Router>
    <Switch >
    <Route path="/Nav" exact component={Home} />
    <Route path="/" exact component={Navbar} />
   
  
    </Switch>
    </Router>
     </div>
  );
 }
 export default App;
