import React, {ChangeEvent} from "react";
import { Link } from "react-router-dom";

interface TextAreaProps {
  id: string;
  label: string;
  placeholder: string;
  onChange: (s: string) => void;
}

interface TextAreaState {
  text: string;
}

class TextArea extends React.Component<TextAreaProps, TextAreaState> {
  constructor(props: TextAreaProps, context: any) {
    super(props, context);

    this.state = {
      text: "",
    };
  }

  onInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({
      text: event.target.value,
    });

    this.props.onChange(event.target.value);
  };

  render() {
    return (
      <span className={"ui field"}>
        <label htmlFor={this.props.id} className="ui secondary pointing">
          {this.props.label}
        </label>
        <textarea placeholder={this.props.placeholder} onChange={this.onInputChange} />
      </span>
    );
  }
}

export default TextArea;
