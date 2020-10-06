import React, { ChangeEvent, FormEvent } from "react";
import TextField from "../TextField";
import TextArea from "../TextArea";

interface SymmetricFormState {
  secretKey: string;
  plainText: string;
  showModal: boolean;
}

class SymmetricForm extends React.Component<{}, SymmetricFormState> {
  constructor(props: {}, context: any) {
    super(props, context);

    this.state = {
      secretKey: "",
      plainText: "",
      showModal: false,
    };
  }

  onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  onSecretKeyChange = (text: string) => {
    this.setState({
      secretKey: text,
    });
  };

  onPlainTextChange = (text: string) => {
    this.setState({
      plainText: text,
    });
  };

  onEncryptClick = () => {
    console.log("Encrypt " + this.state.plainText);
  };

  render(): React.ReactNode {
    return (
      <div>
        <form className="ui form error" onSubmit={this.onFormSubmit}>
          <div className={"ui field"}>
            <label>Encryption Type</label>
            <div className="ui fluid selection dropdown">
              <input type="hidden" name="encryptionType" />

              <i className="dropdown icon" />

              <div className="default text">Select Encryption Type</div>

              {/*
                TODO:
                1. Add info button for AES, DES etc
                2. Generate Public/Private key pair and copy to clipboard
                3. Generate Random secret key instead of having to write it yourself
                */}
              <div className="menu">
                <div className="item key"></div>
                <div className="item" data-value="jenny">
                  <img
                    className="ui mini avatar image"
                    src="/images/avatar/small/jenny.jpg"
                    title={
                      "" +
                      "AES (Advanced Encryption Standard)\n" +
                      "DES (Data Encryption Standard)\n" +
                      "IDEA (International Data Encryption Algorithm)\n" +
                      "Blowfish (Drop-in replacement for DES or IDEA)\n" +
                      "RC4 (Rivest Cipher 4)\n" +
                      "RC5 (Rivest Cipher 5)\n" +
                      "RC6 (Rivest Cipher 6)"
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={"ui field"}>
            <TextField
              label={"Secret key"}
              id={"key"}
              placeholder={"Enter/Generate secret key"}
              onChange={(e) => this.onSecretKeyChange(e.valueOf())}
            />
          </div>

          <TextArea
            label={"Plain Text"}
            id={"plain-text"}
            placeholder={"Enter text to Encrypt"}
            onChange={(e) => this.onPlainTextChange(e.valueOf())}
          />

          <div className={"ui field"} style={{ marginTop: "10px" }}>
            <div className="ui buttons">
              <button className="ui button">Reset</button>

              <div className="or" />

              <button
                className="ui positive toggle button"
                onClick={this.onEncryptClick}
              >
                Encrypt
              </button>
            </div>
          </div>
          <div className={"field"}>
            <div className="ui buttons">
              <button className="ui positive toggle button">
                Create Keypair
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SymmetricForm;
