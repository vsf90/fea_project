import React from 'react'
import './Nosexperts.css';
import axios from 'axios';
import { Component } from 'react';
import RecordsListExpert from './RecordsListExpert';
import { config } from '../../config';

export default class NosExperts extends Component {
    constructor(props){
        super(props);
        this.state={listeExperts: []};
        //console.log(this.state.demandeSprint);
      }

      componentDidMount(){
        axios.get(config+'/BoussolePro-backend/listNosExperts.php')
        .then(response=>{
          this.setState({listeExperts: response.data});
       })
       .catch(function (error){
         console.log(error);
        })
        }

        NosExperts(){
          console.log(this.state.listeExperts);
           return this.state.listeExperts.map(function(object,i){
            return <RecordsListExpert obj={object} key={i} />

           });
        }

    render() {
        return (
            <div className="contenair">
             {this.NosExperts()}



        </div>
        )
    }
}
