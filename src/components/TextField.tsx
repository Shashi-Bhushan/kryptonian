import React from 'react';
import {Link} from "react-router-dom";

interface TextFieldProps {
  id: string,
  label: string,
  text: string
}

class TextField extends React.Component<TextFieldProps> {
  render() {
    return (
      <div className={"field"}>
        <label htmlFor={this.props.id}>
          {this.props.label}
        </label>
        <input type={"text"} value={this.props.text} width={"50%"}/>
      </div>);
  }
}

export default TextField;