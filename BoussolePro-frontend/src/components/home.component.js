import React, { Component } from 'react'
import { BrowserRouter as Router  } from 'react-router-dom'
import history from '../history';
import Navbar from './Navbar.component';
//import Login from './Login/Login.component';

export default class Home extends Component {
    

   
    render() {
        
         
        return (
           
            <>

             <Router history={history}>
                    <Navbar signout={this.props.signout}/>
                </Router>
               
             </>
             
        )
    }
}