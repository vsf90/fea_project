 import './login.component.css';
import logo from '../../img/logo.PNG';
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
 import { message, Button, Space } from 'antd';
 import {config} from '../../config';
export default function Login(props) {
	const [Email, setEmail] = useState("");
	const [Password, setPassword] = useState("");
	const [EmailERR, setEmailERR] = useState("");
	const [PasswordERR, setPasswordERR] = useState("");
   
	console.log(Email);
	console.log(Password);
	const Valider=()=>{
		let emailError="";
		let passwordError = "";

		   //if(!Email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
		   if(!Email.match(/^.*(?=.{3,})(?=.*[a-zA-Z0-9_.+-])+@(?=.[a-zA-Z0-9-]+\.)+[A-Za-z-\.]+$/i)){
			   emailError="L'email avoir la forme suivante : *****@****.**";
		   }
		   //if(!Password.match(/^([\w.%+-]+)/i)){
		   if(!Password.match(/^.{3,}$/i)){
			 passwordError="Le champ mot de passe est obligatiore"
		   }
		   if(emailError||passwordError){
			 setEmailERR(emailError);
			 setPasswordERR(passwordError);
			 return false;
		 }
	 
		 return true;
	  }

	const handleFormSubmit=(e)=>{
		e.preventDefault();
		const user={
		 
		  email:Email,
		  pass:Password 
		
		}
		var config1 = {
		  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		  };
		console.log("---------------------------->Login",user);	   
		console.log(user)
		const isValid=Valider();  
		if(!!isValid){
		  axios.post(config+'/BoussolePro-backend/login.php', user, config1)
		  .then(res => {
			  if(res.data !== ""){
			console.log("--------*****-------->res",res)
			localStorage.setItem('loggedIn', true);
			console.log("res--------------->",res);
			console.log("res.data",res.data.ID);	
			localStorage.setItem('email', res.data.email);
			localStorage.setItem('ID', res.data.ID);
			console.log('res------->>>>>',res)
			props.signIn(res.data);
			console.log("vous avez connecter props", props)
			  }
			  else{
				  message.error("mot de pass ou email est incorrect !!!!!!! ");
				  console.log("-------------->mot de pass ou email est incorrect");
				  localStorage.removeItem('user')
				  localStorage.removeItem('loggedIn')
				  localStorage.removeItem('email')
				  localStorage.removeItem('ID')
			  }



		}
			).then(err=>{
				console.log("login is valid");
				
			});
		}
	}
	return (
		<div>
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
							   <div style={{color:"red"}}>{EmailERR}</div>
						   </div>
 		            <div className="form-group mb-3">
 		            	<label className="label" for="password">Mot de passe</label>
 		              <input type="password" className="form-control" value={Password} onChange={(e)=>setPassword(e.target.value)} placeholder="Mot de passe" style={{borderRadius:"50px",backgroundColor:"rgba(0, 0, 0, 0.05)",borderStyle:"none"}} required/>
					   <div style={{color:"red"}}>{PasswordERR}</div>
					 </div>
 		            <div className="form-group">


 		           	<button onClick={handleFormSubmit} /* onClick={handleFormSubmit}*/ 
 					   type="submit" className="form-control register btn-primary submit px-3" 
 					   style={{borderRadius:"50px"}}>Connexion</button>
						
 					<p style={{marginBottom: "1rem", color:"white"}}> Avez Vous déjà un compte ?</p>

					<Link  to="/auth/register"> <button  /* onClick={handleFormSubmit}*/ 
 					   type="submit" className="form-control register btn-primary submit px-3" 
 					   style={{borderRadius:"50px"}}>S'inscrire maintenant</button></Link>
 					
 								
                  
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
		</div>
	)
}

