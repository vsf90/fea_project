
import React, { Component } from 'react'
import { Button,Alert,Row,Col  } from 'antd';
import { EditFilled,DeleteFilled,PlusCircleOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';

export default class RecordsListPartenaire extends Component {
    
   
    render() {
       
        return (
          
            <div className="se mb-4 "   >
            <a href={this.props.obj.lien} ><img className="se-img-top" src={this.props.obj.image} alt="f1" /></a>
            <div className="se-body">
                
                <h2 className="se-title">{this.props.obj.nom}</h2>
                <div className="small text-muted">Activité</div>
                <p className="se-text"> {this.props.obj.activite}</p>
                <b>Avantages pour nos abonnées </b>
                <p>{this.props.obj.avantage}</p>
                
            </div>
           
        </div>  
   
        )
    }
}
