
import React, { Component } from 'react'
import { Button,Alert,Row,Col  } from 'antd';
import { Card, Avatar } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';
import { config } from '../../../config';

const { Meta } = Card;

export default class ListeRelais extends Component {
    constructor(props){
        super(props);
        this.state={listRelais: []};
      }
      
      componentDidMount(){
        axios.get(config+'/BoussolePro-backend/listNosRelais.php')
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
            axios.get(config+'/BoussolePro-backend/deleteRelaisExpairs.php/?id='+id)
                .then(res=>{
                    window.location.reload();
                    console.log('deleted');
                   
                })
                .catch(err=>console.log(err))
                 alert("Vous êtes sur de supprimer cette Relais ?!")
                    window.location.reload(false);
        }

        Capitalize(str){
            return str.charAt(0).toUpperCase() + str.slice(1);
            }

    render() {
       
        return (

            <div >
            <Alert style={{minWidth:'900px'}}
            message="Liste des Relais et Experts Boussole Pro"
            description="Bienvenue sur Liste des Relais et Experts Boussole Pro." 
            type="info"
            showIcon
            />
        <h1>Liste des Relais et Experts</h1>
        <br></br>
        <br></br>
        <br></br>
            <Row>
           
            {this.state.listRelais.map((realis) => (
                <Col>            
                            <Card key={realis.ID} className="carteRelais"
                            style={{ width: 300,marginBottom:"17px" }}
                            cover={
                            <img
                                alt="example"
                                loading="lazy"
                                // src={realis.image}
                                // src={`${process.env.PUBLIC_URL}/assets/images/${realis.image}`}
                                src={`https://www.boussolepro.net/BoussolePro-backend/images/${realis.image}`} 

                            />
                            }
                            actions={[
                            <Button className="btn-danger" onClick={() => { this.delete(realis.ID)}} >
                            <DeleteOutlined/></Button>,
                            ]}
                            >
                            <Meta style={{paddingBottom: "60px"}}
                            avatar={<Avatar 
                                // src={`${process.env.PUBLIC_URL}/assets/images/${realis.image}`}
                                src={`https://www.boussolepro.net/BoussolePro-backend/images/${realis.image}`} 
                                 />}
                            title={realis.nom}
                            description={realis.competances}
                            />
                            <b style={{float: "center"}}>{this.Capitalize(realis.role)}</b>
                             
                            </Card>
                        </Col>
      ))}
           
             
            </Row>
            </ div> 
        )}
}