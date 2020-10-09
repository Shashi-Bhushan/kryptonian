import React, { ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import EncryptionUtil from "./util/util";

interface TextFieldProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (s: string) => void;
}

interface TextFieldState {
  text: string;
}
// Set value in state and also pass to parent's callback function
class TextField extends React.Component<TextFieldProps, TextFieldState> {
  constructor(props: TextFieldProps, context: any) {
    super(props, context);

    this.state = {
      text: "",
    };
  }

  // arrow function fixes the this.setState issue.
  // otherwise call as `onChange={this.onInputChange.bind(this)}` to fix this
  onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      text: event.target.value,
    });

    this.props.onChange(event.target.value);
  };

  getValue() {
    if (this.state.text.length == 0)
      return (
        <input
          type={"text"}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.onInputChange}
        />
      );
    else
      return (
        <input
          type={"text"}
          placeholder={this.props.placeholder}
          defaultValue={this.state.text}
          onChange={this.onInputChange}
        />
      );
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.id}>{this.props.label}</label>

        <div className="ui icon input">
          {this.getValue()}
          <i
            className="inverted circular sync link icon"
            onClick={(e) => {
              let randomStr = EncryptionUtil.getRandomSecret();
              console.log(randomStr);
              this.setState({
                text: randomStr,
              });

              this.props.onChange(randomStr);
            }}
          />
        </div>
      </div>
    );
  }
}

export default TextField;
