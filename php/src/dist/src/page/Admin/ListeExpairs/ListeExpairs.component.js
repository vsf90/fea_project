
import React, { Component } from 'react'
import { Button,Alert,Row,Col  } from 'antd';
import { Card, Avatar } from 'antd';
import { DeleteOutlined, EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import axios from 'axios';

const { Meta } = Card;

export default class ListeExpairs extends Component {
    constructor(props){
        super(props);
        this.state={listeExpairs: []};
      }
      
      componentDidMount(){
        axios.get('http://localhost:8080/BoussolePro-backend/listNosExperts.php')
        .then(response=>{
            console.log('data ',response.data);
          this.setState({listeExpairs: response.data});
          console.log("lis relais",this.state.listeExpairs);
       })
       .catch(function (error){
         console.log(error);
        })
        }
        
        delete(id){
            axios.get('http://localhost:8080/BoussolePro-backend/deleteRelaisExpairs.php/?id='+id)
                .then(res=>{
                    console.log('deleted');
                   
                })
                .catch(err=>console.log(err))
                 alert("Vous êtes sur de supprimer ce Expair ?!")
                    window.location.reload(false);
        }

    render() {
       
        return (
<>
            <Alert
                message="Liste des expairs Boussole Pro"
                description="Bienvenue sur Liste des Expairs Boussole Pro." 
                type="info"
                showIcon
                />
            <h1>Liste des Expairs</h1>
            <br></br>
            <br></br>
            <br></br>
            <Row>
           
            {this.state.listeExpairs.map((realis) => (
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
            </>
        )}
}