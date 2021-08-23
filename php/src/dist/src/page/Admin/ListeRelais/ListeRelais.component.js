
import React, { Component } from 'react'
import { Button,Alert,Row,Col  } from 'antd';
import { Card, Avatar } from 'antd';
import { DeleteOutlined, EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import axios from 'axios';

const { Meta } = Card;

export default class ListeRelais extends Component {
    constructor(props){
        super(props);
        this.state={listRelais: []};
      }
      
      componentDidMount(){
        axios.get('http://localhost/BoussolePro-backend/listNosRelais.php')
        .then(response=>{
            console.log('data ',response.data);
          this.setState({listRelais: response.data});
          console.log("lis relais",this.state.listRelais);
       })
       .catch(function (error){
         console.log(error);
        })
        }

        delete(id){
            axios.get('http://localhost/BoussolePro-backend/deleteRelaisExpairs.php/?id='+id)
                .then(res=>{
                    console.log('deleted');
                   
                })
                .catch(err=>console.log(err))
                 alert("Vous êtes sur de supprimer cette Relais ?!")
                    window.location.reload(false);
        }

    render() {
       
        return (

            <div >
            <Alert style={{minWidth:'900px'}}
            message="Liste des Relais Boussole Pro"
            description="Bienvenue sur Liste des Relais Boussole Pro." 
            type="info"
            showIcon
            />
        <h1>Liste des Relais</h1>
        <br></br>
        <br></br>
        <br></br>
            <Row>
           
            {this.state.listRelais.map((realis) => (
                <Col>            
                            <Card className="carteRelais"
                            style={{ width: 300,marginBottom:"17px" }}
                            cover={
                            <img
                                alt="example"
                                src={realis.image}
                            />
                            }
                            actions={[
                            <Button className="btn-danger" onClick={() => { this.delete(realis.ID)}} >
                            <DeleteOutlined/></Button>,
                            ]}
                            >
                           
                            <Meta style={{paddingBottom: "60px"}}
                            avatar={<Avatar src={realis.image} />}
                            title={/*realis.prenom+" "+*/realis.nom[0]+realis.nom[1]}
                            description={realis.competances}
                            />
                             
                            </Card>
                        </Col>
      ))}
           
             
            </Row>
            </ div> 
        )}
}