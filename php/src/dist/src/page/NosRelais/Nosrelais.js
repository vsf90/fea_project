import React, { Component } from 'react'
import './Nosrelais.css';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import relais1 from '../../img/picturesRelais/1.jpg';
import relais2 from '../../img/picturesRelais/2.jpg';
import relais3 from '../../img/picturesRelais/3.jpg'
import axios from 'axios';
import RecordsListRelais from './RecordsListRelais.js'

const { Meta } = Card;


export default class Nosrelais extends Component {
    constructor(props){
        super(props);
        this.state={profilerelais: []};
        //console.log(this.state.demandeSprint);
      }
      
      componentDidMount(){
        axios.get('http://localhost/BoussolePro-backend/listNosRelais.php')
        .then(response=>{
          this.setState({profilerelais: response.data});
       })
       .catch(function (error){
         console.log(error);
        })
        }
        
        NosRelaisList(){
          console.log(this.state.profilerelais);
           return this.state.profilerelais.map(function(object,i){
            return <RecordsListRelais obj={object} key={i} />
           
           });
        }

    render() {
        return (
            <div className="contenair">
             {this.NosRelaisList()}

            
          
        </div>
        )
    }
}

