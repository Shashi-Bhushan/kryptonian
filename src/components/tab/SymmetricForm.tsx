import React, { ChangeEvent, FormEvent } from "react";
import Aes from "aes-js";
import TextField from "../TextField";
import TextArea from "../TextArea";
import { Base64 } from "js-base64";
import EncryptionUtil from "../util/util";

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
      secretKey: "TextMustBe16Byte",
      plainText: "Plain text",
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

  onCipherTextChange = (text: string) => {
    this.setState({
      cipherText: text,
    });
  };



  onEncryptClick = () => {
    // Convert plaintext to bytes
    let bytes = Aes.utils.utf8.toBytes(
      EncryptionUtil.getPaddedString(this.state.plainText)
    );

    // create Aes instance with secret key
    let ecb = new Aes.ModeOfOperation.ecb(
      Aes.utils.utf8.toBytes(this.state.secretKey)
    );

    let encryptedBytes = ecb.encrypt(bytes);

    let encryptedText = Base64.fromUint8Array(encryptedBytes, true);

    this.setState({
      plainText: "",
      cipherText: encryptedText,
      encrypt: false,
    });
  };

  onDecryptClick = () => {
    // create Aes instance with secret key
    let ecb = new Aes.ModeOfOperation.ecb(
      Aes.utils.utf8.toBytes(this.state.secretKey)
    );

    let encryptedBytes = Base64.toUint8Array(
      EncryptionUtil.getPaddedBase64String(this.state.cipherText)
    );

    let decryptedBytes = ecb.decrypt(encryptedBytes);

    let decryptedText = Aes.utils.utf8.fromBytes(decryptedBytes).trimEnd();

    this.setState({
      plainText: decryptedText,
      cipherText: "",
      encrypt: true,
    });
  };

  renderTextFields() {
    if (this.state.encrypt)
      return (
        <TextArea
          label={"Plain Text"}
          id={"plain-text"}
          value={this.state.plainText}
          placeholder={"Enter text to Encrypt"}
          onChange={(e) => this.onPlainTextChange(e.valueOf())}
        />
      );
    else
      return (
        <TextArea
          label={"Secret Text"}
          id={"secret-text"}
          value={this.state.cipherText}
          placeholder={"Enter text to Decrypt"}
          onChange={(e) => this.onCipherTextChange(e.valueOf())}
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
          onClick={this.onDecryptClick}
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
                <div className="item key" />
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
              value={this.state.secretKey}
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
              <button
                className="ui button"
                onClick={(e) => this.setState({
                  secretKey: "",
                  plainText: "",
                  cipherText: "",
                  encrypt: true,
                })}
              >
                Reset
              </button>

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
