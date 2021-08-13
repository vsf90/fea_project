
import React, { Component } from 'react'
import { Button,Row,Col ,Avatar } from 'antd';
import { EditFilled,DeleteFilled,PlusCircleOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
//import photo1 from "../../image/OffreStage/f8.jpg";
import { Alert, Collapse } from "antd";


const { Panel } = Collapse;


const text = `A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`; 
function callback(key) {
    console.log(key);
  }
  

export default class RecordsListPublication extends Component {
    render() {
 
        return (
          
            <div className="se mb-4">
                        <img className="se-img-top" src={this.props.obj.image}  />
                        <div className="se-body">
                        <div style={{fontSize:"20px",color:"black"}} className="small "> <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>{this.props.obj.prenom[0]}</Avatar> {this.props.obj.prenom+" "+this.props.obj.nom[0]+this.props.obj.nom[1]}</div>

                            <div className="small text-muted" style={{marginLeft:"30px"}}>{this.props.obj.date}</div>
                            <h2 className="se-title">{this.props.obj.titre}</h2>
                            <p className="se-text">{this.props.obj.contenu}</p>
                            
                        </div>
                        <Collapse defaultActiveKey={['1']} onChange={callback}>
                                <Panel header="Read more" key="1">
                                <p>{text}</p>
                                </Panel>
                            </Collapse>
                    </div>
        )
    }
}
