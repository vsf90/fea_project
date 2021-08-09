import './login.component.css';
import { useHistory } from "react-router-dom";
import React from 'react';
import logo from '../../img/logo.PNG';
import {BrowserRouter as Router, Link, NavLink, Route, Switch } from 'react-router-dom';
import Home from '../home.component';
import Register from './Register.component';
import { withRouter } from "react-router-dom";
import Acueil from '../../page/Acueil/Acueil.component';

function Login() {
  const history = useHistory();
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
							{	/*<p style={{marginBottom: "1rem", color:"white"}}>Vous n'avez pas de compte ?</p>*/}
							{/*	<a href="#" className="register btn-white btn-outline-white" style={{textDecoration:"none"}}><Link  to="/Register" className="text">S'inscrire maintenant</Link></a>*/}
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
			      			<input type="text" className="form-control" placeholder="email" style={{borderRadius:"50px",backgroundColor:"rgba(0, 0, 0, 0.05)",borderStyle:"none"}} required/>
			      		</div>
		            <div className="form-group mb-3">
		            	<label className="label" for="password">Mot de passe</label>
		              <input type="password" className="form-control" placeholder="Mot de passe" style={{borderRadius:"50px",backgroundColor:"rgba(0, 0, 0, 0.05)",borderStyle:"none"}} required/>
		            </div>
		            <div className="form-group">
		           	<button onClick={() => {history.push('/Accueil');}} type="submit" className="form-control register btn-primary submit px-3" style={{borderRadius:"50px"}}>Connexion</button>
                  
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
