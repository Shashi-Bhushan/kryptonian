import React from 'react';
import TextField from "./TextField";
import TextArea from "./TextArea";



class Tab extends React.Component {

  render() {
    return (
      <div>
        <div className="ui top attached tabular menu">
          <div className="active item">
            Symmetric Encryption
          </div>

          <div className="item">
            Asymmetric Encryption
          </div>

          <div className="item">
            Signature
          </div>

          <div className="item">
            Hashing
          </div>
        </div>

        <div className="ui bottom attached active tab segment">
          <form className="ui form error">
            <TextField label={"Secret key"} id={"key"} text={"text"} />

            <TextArea label={"Plain Text"} id={"key"} text={"text"} />

            <br />
            <br />
            <div className={"field"}>
              <div className="ui buttons">
                <button className="ui button">Reset</button>

                <div className="or"/>

                <button className="ui positive toggle button">Encrypt</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Tab;