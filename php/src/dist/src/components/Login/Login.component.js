import './login.component.css';
import { useHistory } from "react-router-dom";
import React from 'react';
import logo from '../../img/logo.PNG';
import {BrowserRouter as Router, Link, NavLink, Route, Switch } from 'react-router-dom';
import Home from '../home.component';
import Register from './Register.component';
import { withRouter } from "react-router-dom";


import Acueil from '../../page/Acueil.component';
import axios from 'axios';
import { useState } from 'react';
import { message, Button, Space } from 'antd';

function Login() {
  const history = useHistory();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
 
  console.log(Email);
  console.log(Password);
 


 

  const handleFormSubmit=(e)=>{
    e.preventDefault();
    const Login={
     
      email:Email,
      pass:Password
    
    }
    var config = {
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      };
    console.log(Login);
   // axios.post('http://localhost/BoussolePro-backend/insert.php',Login)
   // .then((res)=>{console.log(res.data);});
   
      
      axios.post('http://localhost/BoussolePro-backend/insert.php', Login, config)
      .then(res => console.log(res.data));

   
/*if(Email=='' || Password==''){
  
    message.error('Vous devez remplir les champs obligatoires');
  
  }else{
    message.success('La demande est faite avec succès');
    setEmail('');
    setPassword('');
  
  }*/
}
  return (
  
      <div>
    <section className="ftco-section">
		<div className="container">
			<div className="row justify-content-center">
				
			</div>
			<div className="row justify-content-center" >
				<div className="col-md-12 col-lg-10">
					<div className="wrap d-md-flex">
						<div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
							<div className="text w-100">
								<h4 style={{marginBottom:"20px",lineHeight: "150%"}}>Se diriger vers le sens spirituel, vers la bonne information, la bonne personne</h4>
						
							</div>
			      </div>
						<div className="login-wrap p-4 p-lg-5">
			      	<div className="d-flex">
			      		<div className="w-100" >
			      	    <img  style={{width:"300px", height:"60px"}} src ={logo} />
			      		</div>
							
			      	</div>
							<form action="#" className="signin-form" >
			      		<div className="form-group mb-3">
			      			<label className="label" for="name">Email</label>
			      			<input type="text" className="form-control" value={Email} onChange={(e)=>setEmail(e.target.value)} placeholder="email" style={{borderRadius:"50px",backgroundColor:"rgba(0, 0, 0, 0.05)",borderStyle:"none"}} required/>
			      		</div>
		            <div className="form-group mb-3">
		            	<label className="label" for="password">Mot de passe</label>
		              <input type="password" className="form-control" value={Password} onChange={(e)=>setPassword(e.target.value)} placeholder="Mot de passe" style={{borderRadius:"50px",backgroundColor:"rgba(0, 0, 0, 0.05)",borderStyle:"none"}} required/>
		            </div>
		            <div className="form-group">


		           	<button onClick={() => {history.push('/Nav');}} /*onClick={handleFormSubmit}*/ type="submit" className="form-control register btn-primary submit px-3" style={{borderRadius:"50px"}}>Connexion</button>

                  
                </div>
		            <div className="form-group d-md-flex">
		            	<div className="w-50 text-left">
                  
									</div>
									<div className="w-50 text-md-right">
										<a href="#" style={{textDecoration:"none"}}>Mot de passe oublié?</a>
									</div>
		            </div>
		          </form>
		        </div>
		      </div>
				</div>
			</div>
		</div>
	</section>
    </div>
 
  
  );
}

export default Login;
