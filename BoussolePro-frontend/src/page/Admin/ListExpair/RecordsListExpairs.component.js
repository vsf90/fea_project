
import React, { Component } from 'react'
import { Button,Alert,Row,Col  } from 'antd';
import { EditFilled,DeleteFilled,PlusCircleOutlined} from '@ant-design/icons';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const { Meta } = Card;

export default class RecordsListExpairs extends Component {
    
   
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
            actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
            ]}
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
