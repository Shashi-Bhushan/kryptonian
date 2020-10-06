import React from 'react';
import {Link} from "react-router-dom";

interface TextAreaProps {
  id: string,
  label: string,
  placeholder: string
}

class TextArea extends React.Component<TextAreaProps> {
  render() {
    return (
      <span className={"ui field"}>
        <label htmlFor={this.props.id} className="ui secondary pointing">
          {this.props.label}
        </label>
        <textarea placeholder={this.props.placeholder}/>
      </span>);
  }
}

export default TextArea;