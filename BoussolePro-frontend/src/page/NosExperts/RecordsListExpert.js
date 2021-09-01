
import React, { Component } from 'react'
import { Card, Avatar } from 'antd';
const { Meta } = Card;

export default class RecordsListExpert extends Component {
    
   
    render() {
       
        return (
            //{this.props.obj.avantage}
            <Card className="carteRelais"
            style={{ width: 300,marginBottom:"17px" }}
            cover={
            <img
                alt="example"
                src={this.props.obj.image}
            />
            }
            
        >
            <Meta style={{paddingBottom: "60px"}}
            avatar={<Avatar src={this.props.obj.image} />}
            title={this.props.obj.prenom+" "+this.props.obj.nom[0]+this.props.obj.nom[1]}
            description={this.props.obj.competances}
            />
        </Card>
           
   
        )
    }
}
