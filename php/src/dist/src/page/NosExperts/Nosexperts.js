import React, { Component } from 'react'
import './Nosexperts.css';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

import axios from 'axios';
import RecordsListExpert from './RecordsListExpert.js'

const { Meta } = Card;


export default class NosExperts extends Component {
    constructor(props){
        super(props);
        this.state={profileExpert: []};
        //console.log(this.state.demandeSprint);
      }
      
      componentDidMount(){
        axios.get('http://localhost/BoussolePro-backend/listNosExperts.php')
        .then(response=>{
          this.setState({profileExpert: response.data});
       })
       .catch(function (error){
         console.log(error);
        })
        }
        
        NosExpertList(){
          console.log(this.state.profileExpert);
           return this.state.profileExpert.map(function(object,i){
            return <RecordsListExpert obj={object} key={i} />
           
           });
        }

    render() {
        return (
            <div className="contenair">
             {this.NosExpertList()}

            
          
        </div>
        )
    }
}

