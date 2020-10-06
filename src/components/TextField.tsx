import React from "react";
import { Link } from "react-router-dom";

interface TextFieldProps {
  id: string;
  label: string;
  placeholder: string;
}

class TextField extends React.Component<TextFieldProps> {
  render() {
    return (
      <div>
        <label htmlFor={this.props.id}>{this.props.label}</label>

        <div className="ui icon input">
          <input type={"text"} placeholder={this.props.placeholder} width={"50%"} />
            <i className="inverted circular sync link icon"/>
        </div>
      </div>
    );
  }
}

export default TextField;
