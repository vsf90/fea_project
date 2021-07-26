import React, { Component } from 'react'
import { BrowserRouter as Router  } from 'react-router-dom'
import NavBar from './Navbar.component'
import history from '../history';




export default class Home extends Component {
    

   
    render() {
        
         
        return (
           
            <div className="col-md-12">
              
                <Router history={history}>
                {/* signout={this.props.signout} */}
                    <NavBar />
                </Router>
             </div>
             
        )
    }
}