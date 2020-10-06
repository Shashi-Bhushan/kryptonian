import React, { ChangeEvent, FormEvent } from "react";
import Aes from "aes-js";
import TextField from "../TextField";
import TextArea from "../TextArea";

interface SymmetricFormState {
  secretKey: string;
  plainText: string;
  cipherText: string;
  encrypt: boolean;
}

class SymmetricForm extends React.Component<{}, SymmetricFormState> {
  constructor(props: {}, context: any) {
    super(props, context);

    this.state = {
      secretKey: "",
      plainText: "Text to encrypt",
      cipherText: "",
      encrypt: true,
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

  getPaddedString(str: string) {
    let len = str.length;

    let rem = len % 16;
    if (rem == 0) return str;
    else {
      let newLength = (Math.floor(len / 16) + 1) * 16;

      return str.padEnd(newLength);
    }
  }

  onEncryptClick = () => {
    // Convert plaintext to bytes
    let bytes = Aes.utils.utf8.toBytes(
      this.getPaddedString(this.state.plainText)
    );

    console.log(Aes.utils.utf8.toBytes(this.state.secretKey).length);

    // create Aes instance with secret key
    let ecb = new Aes.ModeOfOperation.ecb(
      Aes.utils.utf8.toBytes(this.state.secretKey)
    );

    let encryptedBytes = ecb.encrypt(bytes);

    let encryptedText = Aes.utils.utf8.fromBytes(encryptedBytes);

    this.setState({
      cipherText: encryptedText,
      encrypt: false,
    });
    console.log("encrypted " + this.state.plainText + " to " + encryptedText)
    console.log("decrypted is " + Aes.utils.utf8.fromBytes(ecb.decrypt(encryptedBytes)))
  };

  renderTextFields() {
    if (this.state.encrypt)
      return (
        <TextArea
          label={"Plain Text"}
          id={"plain-text"}
          placeholder={"Enter text to Encrypt"}
          onChange={(e) => this.onPlainTextChange(e.valueOf())}
        />
      );
    else
      return (
        <TextArea
          label={"Secret Text"}
          id={"secret-text"}
          placeholder={"Enter text to Decrypt"}
          onChange={(e) => this.onPlainTextChange(e.valueOf())}
        />
      );
  }

  renderButtons() {
    if (this.state.encrypt)
      return (
        <button
          className="ui positive toggle button"
          onClick={this.onEncryptClick}
        >
          Encrypt
        </button>
      );
    else
      return (
        <button
          className="ui positive toggle button"
          onClick={this.onEncryptClick}
        >
          Decrypt
        </button>
      );
  }

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

          <div className={"ui field"}>
            <div className="ui toggle right floated primary checkbox">
              <input
                type="checkbox"
                name="public"
                checked={this.state.encrypt}
                onChange={(e) => this.setState({ encrypt: e.target.checked })}
              />
              <label>Encrypt</label>
            </div>
          </div>

          {this.renderTextFields()}

          <div className={"ui field"} style={{ marginTop: "10px" }}>
            <div className="ui buttons">
              <button className="ui button">Reset</button>

              <div className="or" />

              {this.renderButtons()}
            </div>
          </div>

          <div className={"ui field"}>
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
