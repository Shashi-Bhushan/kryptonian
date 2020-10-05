import React from 'react';
import TextField from "./TextField";
import TextArea from "./TextArea";

class SymmetricEncryptionForm extends React.Component {
  render() {
    return (
      <form className="ui form error">
        <h4 className="ui dividing header">Symmetric Encryption</h4>
        <TextField label={"Secret key"} id={"key"} text={"text"} />

        <TextArea label={"Plain Text"} id={"key"} text={"text"} />

        <div className={"field"}>
        <input type={"submit"} className={"ui button"}/>
        </div>
      </form>
    );
  }
}

export default SymmetricEncryptionForm;