import React from 'react'
import './Nosrelais.css';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Component } from 'react';
import RecordsListRelais from './RecordsListRelais';



const { Meta } = Card;
export default class Nosrelais extends Component {
    constructor(props){
        super(props);
        this.state={profilerelais: []};
        //console.log(this.state.demandeSprint);
      }

      componentDidMount(){
        axios.get('http://localhost:8080/BoussolePro-backend/listNosRelais.php')
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
