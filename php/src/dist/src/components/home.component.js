import React, { Component } from 'react'
import { BrowserRouter as Router  } from 'react-router-dom'
import history from '../history';
import Navbar from './Navbar.component';
//import Login from './Login/Login.component';




export default class Home extends Component {
    

   
    render() {
        
         
        return (
           
            <div className="col-md-12">

              
               

             <Router history={history}>
                {/* signout={this.props.signout} */}
                    <Navbar />
                </Router>
               
             </div>
             
        )
    }
}