import "./NosPartenaires.component.css";

import photo1 from "../../image/fp1.png";
import photo2 from "../../image/fp2.png";
import photo3 from "../../image/fp3.jpg";

import { Alert } from "antd";



  
function NosPartenaires() {
    
    return (
      
      <div className="containerBody">
            <div className="rowpartners" >
           
                <div className="col-lg-10" style={{display:"block",margin:"auto",padding:"auto"}}> 
                <Alert
                message="Partenaires de Boussole Pro"
                description="Bienveneu sur les Partenaires de Boussole Pro."
                type="info"
                showIcon
                />
                <br></br>
                
                    <div className="se mb-4 "   >
                        <a href="http://www.loireatlantique-automotive.fr/" ><img className="se-img-top" src={photo3} alt="f1" /></a>
                        <div className="se-body">
                            
                            <h2 className="se-title">Loire Atlantique</h2>
                            <div className="small text-muted">Activité</div>
                            <p className="se-text"> Pièce de rechange automobiles</p>
                            <b>Avantages pour nos abonnées </b>
                            <p>10 abonnements standards annuls offerts</p>
                            
                        </div>
                       
                    </div>  
                    <div className="se mb-4 " >
                        <a href="https://www.auditouestconsulting.com/"><img className="se-img-top" src={photo2} alt="f1" /></a>
                        <div className="se-body">
                            
                            <h2 className="se-title">AUDIT OUEST CONSULTIONG</h2>
                            <div className="small text-muted">Activité</div>
                            <p className="se-text">Expertise contable, conseil fiscal et juridique</p>
                            <b>Avantages pour nos abonnées </b>
                            <p>3 abonnements standards annuls offerts</p>
                        </div>
                       
                    </div>
                  
                    <div className="se mb-4 ">
                        <a href="https://leshuilesdebalqis.fr/"><img className="se-img-top" src={photo1} alt="f1" /></a>
                        <div className="se-body">
                            
                            <h2 className="se-title">BALQIS FRANCE</h2>
                            <div className="small text-muted">Activité</div>
                            <p className="se-text">Votre grossiste en produit cosmitique bio 100% naturel pour particulier et revendeur</p>
                            <b>Avantages pour nos abonnées </b>
                            <p>15% de réduction.Pour bénificier de cette réduction, voici le code FEA15</p>
                        </div>
                       
                    </div>   
                               
                   
                </div>
                
             
            </div>
      

    
      </div>
    );
  }
  
  export default NosPartenaires;
  