import { Alert } from "antd";
import Search from "antd/lib/input/Search";
import React, { Component } from "react";
import history from "../../history";
import "./NosReseaux.component.css";

class NosReseaux extends Component {
  state = {
    data: [],
    per: 9,
    page: 1,
    total_pages: null
  };
  onClick(){
    console.log('go----------------->')
    history.push('/CompteAbonnée')
    window.location.reload(false);

    
}

  uppercase = word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  loadData = () => {
    const { per, page, data } = this.state;
    const endpoint = `https://randomuser.me/api/?nat=us&results=${per}&page=${page}`;
    fetch(endpoint)
      .then(response => response.json())
      .then(json => {
        
        this.setState({
          data: [...data, ...json.results],
          scrolling: false,
          total_pages: json.info.results
        });
      });
  };

  

  componentDidMount() {
    this.loadData();
  }

  render() {
    return (
      <div className="clearfix">
        <Alert
                message="Notre Réseau Pro"
                description="Bienveneu sur le Réseau Pro de Boussole Pro."
                type="info"
                showIcon
                />
                <br></br>
                <Search placeholder="Recherche" allowClear  size="large" enterButton  />
                <br></br>
                <br></br>

        <div className="row">
          {this.state.data.map(data => (
            <div className="col-md-4 animated fadeIn" key={data.id.value}>
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={data.picture.large}
                      className="card-img-top"
                      alt=""
                      onClick={()=>this.onClick()}
                    />
                  </div>
                  <h5 className="card-title">
                    {this.uppercase(data.name.first) +
                      " " +
                      this.uppercase(data.name.last)}
                  </h5>
                  <p className="card-text">
                    {data.location.city +
                      ", " +
                      this.uppercase(data.location.state)}
                    <br />
                    <span className="phone">{data.phone}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    );
  }
}

export default NosReseaux;