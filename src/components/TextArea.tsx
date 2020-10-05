import React from 'react';
import {Link} from "react-router-dom";

interface TextAreaProps {
  id: string,
  label: string,
  text: string
}

class TextArea extends React.Component<TextAreaProps> {
  render() {
    return (
      <span>
        <label htmlFor={this.props.id} className="ui secondary pointing">
          {this.props.label}
        </label>
        <textarea value={this.props.text}/>
      </span>);
  }
}

export default TextArea;