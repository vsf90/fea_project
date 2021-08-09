import { Alert } from "antd";
import { Link } from "react-router-dom";
import photo1 from "../../image/f6.jpg";


function OfferEmploi() {
  return (
    <div className="container">
     
             <Alert
                message="Les Offres d'emploi"
                description="Bienveneu sur Les Offres d'emploi."
                type="info"
                showIcon
                />
                <br></br>
                <div className="se mb-4">
                        <div className="se-header">Search</div>
                        <div className="se-body">
                            <div className="input-group">
                                <input className="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
                                <button className="btn btn-primary" id="button-search" type="button">Go!</button>
                            </div>
                        </div>
                </div> 
                
                   <Link to="/AddOffreEmploi"><div className="card">
                     <b className="bOf">Ajouter une offre d'Emploi</b>
                   </div> </Link>
                <br></br>



                    <div className="se mb-4">
                        <a href="#!"><img className="se-img-top" style={{height:"350px"}} src={photo1} alt="f1" /></a>
                        <div className="se-body">
                            <div className="small text-muted">January 1, 2021</div>
                            <h2 className="se-title">Offre D'emploi</h2>
                            <p className="se-text">
                            #offreemploi #recrutement
                            <br></br>
                            Vous êtes intéressé-e-s par cette offre. N'hésitez pas à nous contacter à mp pour plus de détails : <b>@feaboussolepro</b></p>    
                        </div>
                        
                    </div>
    </div>
  );
}

export default OfferEmploi;
