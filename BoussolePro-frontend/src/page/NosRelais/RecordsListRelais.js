import React, { Component } from 'react' 
import { Card, Avatar } from 'antd'; 
import { config } from '../../config'; 
const { Meta } = Card; 
 
export default class RecordsListRelais extends Component { 
     
    
    render() { 
        
        return ( 
            //{this.props.obj.avantage} 
            <Card className="carteRelais" 
            style={{ width: 300,marginBottom:"17px" }} 
            cover={ 
            <img 
                alt="example" 
                loading="lazy"
                /*src={this.props.obj.image}*/ src={`https://www.boussolepro.net/BoussolePro-backend/images/${this.props.obj.image}`} 
            /> 
            } 
            
        > 
            <Meta style={{paddingBottom: "60px"}} 
            avatar={<Avatar 
                src={`https://www.boussolepro.net/BoussolePro-backend/images/${this.props.obj.image}`} 
                // src={this.props.obj.image} 
                />} 
            title={this.props.obj.nom} 
            description={this.props.obj.competances} 
            /> 
        </Card> 
            
    
        ) 
    } 
}