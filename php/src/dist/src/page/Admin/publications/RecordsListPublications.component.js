
import React, { Component } from 'react'
import { Button,Row,Col ,Avatar } from 'antd';
import { EditFilled,DeleteFilled,PlusCircleOutlined, DeleteOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Alert, Collapse } from "antd";
import axios from 'axios';




export default class RecordsListPublications extends Component {

   delete(id){
        axios.get('http://localhost/BoussolePro-backend/deletePublication.php/?id='+id)
            .then(res=>{
                console.log('deleted');
               
            })
            .catch(err=>console.log(err))
             alert("Vous êtes sur de supprimer cette publication ?!")
                window.location.reload(false);
    }
    render() {

 
        return (
          
            <div className="se mb-4">
                    
                        <img className="se-img-top" src={this.props.obj.image}  />
                        <div className="se-body">
                        <div style={{fontSize:"20px",color:"black"}} className="small "> <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>{this.props.obj.prenom[0]}</Avatar> {this.props.obj.prenom+" "+this.props.obj.nom[0]+this.props.obj.nom[1]}</div>

                            <div className="small text-muted" style={{marginLeft:"30px"}}>{this.props.obj.date}</div>
                            <h2 className="se-title">{this.props.obj.titre}</h2>
                            type: <b className="se-title">{this.props.obj.type}</b>
                            <p className="se-text">{this.props.obj.contenu}</p>
                            
                            <span>
                            <Button style={{marginLeft: "250px"}} className="btn-danger" onClick={() => { this.delete(this.props.obj.ID)}} >
                            <DeleteOutlined  /></Button>
                            </span>
                        </div>
                        {/* <Collapse defaultActiveKey={['1']} onChange={callback}>
                                <Panel header="Read more" key="1">
                                <p>{text}</p>
                                </Panel>
                            </Collapse> */}
                    </div>
        )
    }
}
