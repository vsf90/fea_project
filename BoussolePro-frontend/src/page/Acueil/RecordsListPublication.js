
import React, { Component } from 'react'
import { Button,Row,Col ,Avatar } from 'antd';
import { EditFilled,DeleteFilled,PlusCircleOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Alert, Collapse } from "antd";


const { Panel } = Collapse;
 

export default class RecordsListPublication extends Component {
    render() {
 
        return (
          
            <div className="se mb-4" key={this.props.obj.ID}>
                        <img className="se-img-top"
                        //  src={`${process.env.PUBLIC_URL}/assets/images/${this.props.obj.image}`} 
                        loading="lazy"
                        src={`https://www.boussolepro.net/BoussolePro-backend/images/${this.props.obj.image}`}
                          />
                        <div className="se-body">
                        <div style={{fontSize:"20px",color:"black"}} className="small "> <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>{this.props.obj.prenom[0]}</Avatar> {this.props.obj.prenom+" "+this.props.obj.nom[0]+this.props.obj.nom[1]}</div>

                            <div className="small text-muted" style={{marginLeft:"30px"}}>{this.props.obj.date}</div>
                            <h2 className="se-title">{this.props.obj.titre}</h2>
                            <p className="se-text">{this.props.obj.contenu}</p>
                            
                        </div>
                        
                    </div>
        )
    }
}
