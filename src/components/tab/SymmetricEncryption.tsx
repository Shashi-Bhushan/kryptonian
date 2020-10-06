import React from "react";
import TextField from "../TextField";
import TextArea from "../TextArea";

class SymmetricEncryption extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <form className="ui form error">
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
            />
          </div>

          <TextArea
            label={"Plain Text"}
            id={"plain-text"}
            placeholder={"Enter text to Encrypt"}
          />

          <br />
          <br />
          <div className={"ui field"}>
            <div className="ui buttons">
              <button className="ui button">Reset</button>

              <div className="or" />

              <button className="ui positive toggle button">Encrypt</button>
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

export default SymmetricEncryption;
