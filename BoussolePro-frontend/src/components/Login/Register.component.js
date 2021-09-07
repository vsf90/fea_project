import './login.component.css';
import React, { useState } from 'react';
import logo from '../../img/logo.PNG';
import {BrowserRouter as Router, Link, NavLink, Route, Switch } from 'react-router-dom';
import Home from '../home.component';
import Login from './Login.component';
import axios from 'axios';
import history from '../../history';
import {config} from '../../config';
import { message } from 'antd';
function Register() {
	const [Nom, setNom] = useState("");
  	const [Prenom, setPrenom] = useState("");
	const [Pays, setPays] = useState("");
  	const [Ville, setVille] = useState("");
	const [Email, setEmail] = useState("");
  	const [Password, setPassword] = useState("");
	const [PasswwordCof, setPasswordCof] = useState("");

	const [nomEror, setNomEror] = useState("");
  	const [prenomEror, setPrenomEror] = useState("");
	const [paysEror, setPaysEror] = useState("");
  	const [VilleEror, setVilleEror] = useState("");
	const [emailEror, setEmailEror] = useState("");
  	const [PasswordEror, setPasswordEror] = useState("");
	const [PasswordCofEror, setPasswordConfEror] = useState("");




	const Valider=()=>{
		let nomEror="";
		let prenomEror="";
		let emailEror="";
		let paysEror="";
		let villeEror="";
		let passwordEror="";
		let PasswordCofEror="";
		if(!Nom){
			nomEror="le champ Nom est obligatiore"
		}
		if(!Prenom){
			prenomEror="le champ Prenom est obligatiore"
		}
		if(!Pays){
			paysEror="le champ pays est obligatiore"
		}
		if(!Ville){
			villeEror="le champ ville est obligatiore"
		}
		
		if(!Password.match(/^([\w.%+-]+)/i)){
			passwordEror="le champ mot de passe est obligatiore"
		}
		if(PasswwordCof!=Password || !PasswwordCof){
			PasswordCofEror="la confirmation de mot de passe ne correspond pas  "
		}
		if(!Email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
			emailEror="l'email est non validé, il faut avoire la forme suivante : *****@****.***";
		}
		if(emailEror||nomEror||prenomEror||passwordEror||paysEror|| villeEror|| PasswordCofEror){
			setEmailEror(emailEror);
			setNomEror(nomEror);
			setPrenomEror(prenomEror);
			setPasswordConfEror(PasswordCofEror);
			setPaysEror(paysEror);
			setPasswordEror(passwordEror);
			setVilleEror(villeEror);
			
			return false;
		}

		return true;
		
	}

	const handleFormSubmit=(e)=>{
		e.preventDefault();
		console.log("hello evry one :!!!!!!:");
		const user={
		  nom:Nom,
		  prenom: Prenom,
		  ville: Ville,
		  pays: Pays,
		  email:Email,
		  pass:Password,
		  passConf: PasswwordCof,
		  role: "Inscrit",
		  image: 'defaultUser.jfif'
		
		}
		console.log("---------------------------->",user);
		var config1 = {
		  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		  };
		const isValid= Valider();
		  if(!!isValid){
		  axios.post(config+'/BoussolePro-backend/regestre.php', user, config1)
		  .then(res =>{
			console.log("------------------------>data returned",res.data);
			alert("L'inscription a été faite avec succès")
			 history.push('/Login');
			 window.location.reload(false)
		  } );
		}
	
	}


  return (
	
      <div>
    <section className="ftco-section">
		<div className="container">
			<div className="row justify-content-center">
				
			</div>
			<div className="row justify-content-center">
				<div className="col-md-12 col-lg-10">
					<div className="wrap d-md-flex">
						<div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
							<div className="text w-100">
								<h4 style={{marginBottom:"20px",lineHeight: "150%"}}>Se diriger vers le sens spirituel, vers la bonne information, la bonne personne</h4>
								<p style={{marginBottom: "1rem", color:"white"}}> Avez Vous déjà un compte ?</p>
								<a className="register btn-white btn-outline-white" style={{textDecoration:"none"}}>
								<Link  to="/auth/login" className="text">Se connecter maintenant</Link></a>
							</div>
			      </div>
						<div className="login-wrap p-4 p-lg-5">
			      	<div className="d-flex">
					  <div className="w-100" >
			      	    <img  style={{width:"300px", height:"60px"}} src ={logo} />
			      		</div>
							
			      	</div>
							<form action="#" className="signin-form" >
								<div style={{display: 'flex'}}>
							<div className="form-group mb-3" style={{marginRight:"4px"}}>
			      			   <label className="label" for="name">Prénom</label>
			      			<input type="text" className="form-control" placeholder="Prénom" value={Prenom} onChange={(e)=>setPrenom(e.target.value)} style={{borderRadius:"50px",backgroundColor:"rgba(0, 0, 0, 0.05)",borderStyle:"none"}} required/>
							  <div style={{color:"red"}}>{prenomEror}</div>

							  </div>
						  <div className="form-group mb-3" style={{display: 'inline-block'}}>
			      			<label className="label" for="name">Nom</label>
			      			<input type="text" className="form-control" placeholder="Nom" value={Nom} onChange={(e)=>setNom(e.target.value)} style={{borderRadius:"50px",backgroundColor:"rgba(0, 0, 0, 0.05)",borderStyle:"none"}} required/>
							  <div style={{color:"red"}}>{nomEror}</div>

						  </div>
						  </div>
						  <div style={{display: 'flex'}}>
						  <div className="form-group mb-3" style={{marginRight:"4px"}}>
			      			<label className="label" for="name">Pays</label>
			      			<input type="text" className="form-control" placeholder="Pays" value={Pays} onChange={(e)=>setPays(e.target.value)} style={{borderRadius:"50px",backgroundColor:"rgba(0, 0, 0, 0.05)",borderStyle:"none"}} required/>
							  <div style={{color:"red"}}>{paysEror}</div>

						  </div>
						  <div className="form-group mb-3">
			      			<label className="label" for="name">Ville</label>
			      			<input type="text" className="form-control" placeholder="Ville" value={Ville} onChange={(e)=>setVille(e.target.value)} style={{borderRadius:"50px",backgroundColor:"rgba(0, 0, 0, 0.05)",borderStyle:"none"}} required/>
							  <div style={{color:"red"}}>{VilleEror}</div>

						  </div>
						  </div>
			      		<div className="form-group mb-3">
			      			<label className="label" for="name">Email</label>
			      			<input type="text" className="form-control" placeholder="email" value={Email} onChange={(e)=>setEmail(e.target.value)} style={{borderRadius:"50px",backgroundColor:"rgba(0, 0, 0, 0.05)",borderStyle:"none"}} required/>
							  <div style={{color:"red"}}>{emailEror}</div>

						  </div>
		            <div className="form-group mb-3">
		            	<label className="label" for="password">Mot de passe</label>
		              <input type="password" className="form-control" placeholder="Mot de passe" value={Password} onChange={(e)=>setPassword(e.target.value)} style={{borderRadius:"50px",backgroundColor:"rgba(0, 0, 0, 0.05)",borderStyle:"none"}} required/>
					  <div style={{color:"red"}}>{PasswordEror}</div>

					</div>
					<div className="form-group mb-3">
		            	<label className="label" for="password">Confimer le mot de passe</label>
		              <input type="password" className="form-control" placeholder="Confimer le mot de passe" value={PasswwordCof} onChange={(e)=>setPasswordCof(e.target.value)} style={{borderRadius:"50px",backgroundColor:"rgba(0, 0, 0, 0.05)",borderStyle:"none"}} required/>
					  <div style={{color:"red"}}>{PasswordCofEror}</div>

				    </div>
		            <div className="form-group">
		            	<button type="submit" onClick={handleFormSubmit} className="form-control register btn-primary submit px-3" style={{borderRadius:"50px"}}>
						{/* <Link  to="/Home" className="text"></Link> */}
						S'inscrire
						</button>
		            </div>
		            {/* <div className="form-group d-md-flex">
		            	<div className="w-50 text-left">
			            	
									</div>
									<div className="w-50 text-md-right">
										<a href="#" style={{textDecoration:"none"}}>Mot de passe oublié?</a>
									</div>
		            </div> */}
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

export default Register;