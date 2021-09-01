import React, { Component } from "react";
import { Input } from "antd";
import Form from "antd/lib/form/Form";

class First extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }
  render() {
    return (
      <div>
                  <Input  type="text" name="Nom" placeholder="Nom"   required/>
                  <Input  type="text" name="Nom" placeholder="Nom"   required/>

      </div>
    );
  }
}

export default First;