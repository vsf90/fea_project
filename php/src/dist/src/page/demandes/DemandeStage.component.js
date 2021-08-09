import { Alert } from "antd";
import { Link } from "react-router-dom";
import photo1 from "../../image/f10.png";


function DemandeStage() {
    return (
        <div className="container">
     
        <Alert
           message="Les Demandes de stages"
           description="Bienveneu sur Les Demandes de Stages."
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
                    <Link to="/AddDemandeStage"><div className="card" 
                    
                        >
                      <b className="bOf">Ajouter une Demande de stage</b>
                    </div> </Link>
                    <br></br>
         
               <div className="se mb-4">
                   <a href="#!"><img className="se-img-top" style={{height:"350px"}} src={photo1} alt="f1" /></a>
                   <hr></hr>
                   <div className="se-body">
                       <div className="small text-muted">January 1, 2021</div>
                       <h2 className="se-title">Demande De stage</h2>
                       <p className="se-text">
                       #recherchestage #boussolepro
                       <br></br>
                       Salam la team,
                        Une autre recherche en cours. Vous avez des pistes, n'hésitez pas à nous contacter en mp sur : 
                        <b>@feaboussolepro </b>
                        <br></br>
                        BarakaAllaho fikom 
                        
                       </p>    
                   </div>
                   
               </div>

              
</div>
    );
  }
  
  export default DemandeStage;
  