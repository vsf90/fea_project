
import React, { Component } from 'react'
import { Button,Alert,Row,Col ,Avatar } from 'antd';
import { EditFilled,DeleteFilled,PlusCircleOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import photo1 from "../../image/OffreStage/f8.jpg";

export default class RecordsListOffreEmploi extends Component {
    render() {
  
        return (
          
            <div className="se mb-4">
           <img className="se-img-top" style={{height:"350px"}} 
        //    src={this.props.obj.image} 
        loading="lazy"
        src={`https://www.boussolepro.net/BoussolePro-backend/images/${this.props.obj.image}`}
           />
            <hr></hr>
            <div className="se-body">
            <div style={{fontSize:"20px",color:"black"}} className="small "> <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>{this.props.obj.prenom[0]}</Avatar> {this.props.obj.prenom+" "+this.props.obj.nom[0]+this.props.obj.nom[1]}</div>

                <div className="small text-muted" style={{marginLeft:"30px"}}>{this.props.obj.date}</div>
                <h2 className="se-title">{this.props.obj.titre}</h2>

                <p className="se-text">
               
                {this.props.obj.contenu}
                 <br></br>
                
                 
                </p>    
            </div>
            </div>
   
        )
    }
}
