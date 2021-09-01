import './login.component.css';
import React from 'react';
import logo from '../../img/logo.PNG';

function Newpass() {
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
								
							</div>
			      </div>
						<div className="login-wrap p-4 p-lg-5">
			      	<div className="d-flex">
			      		<div className="w-100">
			      			<img src ={logo} style={{width:"300px", height:"60px",marginBottom:"10px"}}/>
			      		</div>
							
			      	</div>
							<form action="#" className="signin-form">
                            <h3 class="m-t-10 m-b-10">Changer le Mot de passe </h3>
                             <p class="m-b-20" style={{fontSize:"16px"}}>Entrez un nouveau mot de passe.</p>
			      		<div className="form-group mb-3">
			      			<label className="label" for="name">nouveau mot de passe</label>
			      			<input style={{borderRadius:"50px",backgroundColor:"rgba(0, 0, 0, 0.05)",borderStyle:"none"}} type="password" className="form-control" placeholder="Mot de passe" required/>
			      		</div>
                        <div className="form-group mb-3">
			      			<label className="label" for="name">Confirmation du mot de passe</label>
			      			<input style={{borderRadius:"50px",backgroundColor:"rgba(0, 0, 0, 0.05)",borderStyle:"none"}} type="password" className="form-control" placeholder="Retaper votre mot de passe" required/>
			      		</div>
		           
		            <div className="form-group">
		            	<button type="submit" className="form-control register btn-primary submit px-3" style={{borderRadius:"50px"}}>Confimer</button>
		            </div>
		            <div className="form-group d-md-flex">
		            	<div className="w-50 text-left">
			            	
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

export default Newpass;
