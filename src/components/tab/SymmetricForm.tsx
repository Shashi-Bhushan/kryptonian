import React, { ChangeEvent, FormEvent } from "react";
import Aes from "aes-js";
import { Dropdown } from "semantic-ui-react";
import TextArea from "../TextArea";
import { Base64 } from "js-base64";
import EncryptionUtil from "../util/util";

interface EncryptionConfiguration {
  encryptionType: string;
  encryptionMode: string;
  keySize: number;
}

interface SymmetricFormState {
  secretKey: string;
  plainText: string;
  cipherText: string;
  encryptionConfig: EncryptionConfiguration;
  encrypt: boolean;
}

class SymmetricForm extends React.Component<{}, SymmetricFormState> {
  constructor(props: {}, context: any) {
    super(props, context);

    this.state = {
      secretKey: "TextMustBe16Byte",
      plainText: "Plain text",
      cipherText: "",
      encryptionConfig: {
        encryptionType: "AES",
        encryptionMode: "ECB",
        keySize: 16,
      },
      encrypt: true,
    };
  }

  private static encryptionOptions = [
    {
      key: "AES",
      text: "AES (Advanced Encryption Standard)",
      value: "AES",
    },
    {
      key: "DES",
      text: "DES (Data Encryption Standard)",
      value: "DES",
    },
    {
      key: "RC4",
      text: "RC4 (Rivest Cipher 4)",
      value: "RC4",
    },
    {
      key: "RC5",
      text: "RC5 (Rivest Cipher 5)",
      value: "RC5",
    },
    {
      key: "RC6",
      text: "RC6 (Rivest Cipher 6)",
      value: "RC6",
    },
  ];

  private static encryptionModes = {
    AES: [
      {
        key: "ECB",
        text: "ECB (Electronic codebook)",
        value: "ECB",
      },
      {
        key: "CBC",
        text: "CBC (Cipher block chaining)",
        value: "CBC",
      },
    ],
  };

  private static keySizes = {
    AES: [
      {
        key: "16",
        text: "16 bits",
        value: 16,
      },
      {
        key: "24",
        text: "24 bits",
        value: 24,
      },
      {
        key: "32",
        text: "32 bits",
        value: 32,
      },
    ],
  };

  private getCipherInstance = () => {
    // create Aes instance with secret key
    if (this.state.encryptionConfig.encryptionType == "AES") {
      if (this.state.encryptionConfig.encryptionMode == "ECB") {
        return new Aes.ModeOfOperation.ecb(
          Aes.utils.utf8.toBytes(this.state.secretKey)
        );
      } else {
        return new Aes.ModeOfOperation.cbc(
          Aes.utils.utf8.toBytes(this.state.secretKey),
          new Uint8Array([1, 2, 3, 4])
        );
      }
    } else {
      throw new Error("Valid Encryption mode not selected.");
    }
  };

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
    let aes = this.getCipherInstance();

    let encryptedBytes = aes.encrypt(bytes);

    let encryptedText = Base64.fromUint8Array(encryptedBytes, true);

    this.setState({
      plainText: "",
      cipherText: encryptedText,
      encrypt: false,
    });
  };

  onDecryptClick = () => {
    // create Aes instance with secret key
    let ecb = this.getCipherInstance();

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

  renderSecretKeyTextField() {
    if (this.state.secretKey.length == 0)
      return (
        <input
          type={"text"}
          value={this.state.secretKey}
          placeholder={"Enter Secret Key"}
          onChange={(e) => this.onSecretKeyChange(e.target.value)}
        />
      );
    else
      return (
        <input
          type={"text"}
          value={this.state.secretKey}
          onChange={(e) => this.onSecretKeyChange(e.target.value)}
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
            Select Type of Encryption
            <Dropdown
              placeholder="Select Encryption Type"
              fluid
              selection
              value={this.state.encryptionConfig.encryptionType}
              options={SymmetricForm.encryptionOptions}
              onChange={(e, result) => {
                console.log(result);

                this.setState({
                  encryptionConfig: {
                    ...this.state.encryptionConfig,
                    encryptionMode: "AES",
                  },
                });
              }}
            />
          </div>

          <div className={"ui field"}>
            Select Encryption Mode
            <div className={"ui field"}>
              <Dropdown
                placeholder="Select Encryption Mode"
                fluid
                selection
                value={this.state.encryptionConfig.encryptionMode}
                options={SymmetricForm.encryptionModes.AES}
              />
            </div>
          </div>

          <div className={"ui field"}>
            Select Key Size
            <div className={"ui field"}>
              <Dropdown
                placeholder="Select Key Size"
                fluid
                selection
                value={this.state.encryptionConfig.keySize}
                options={SymmetricForm.keySizes.AES}
              />
            </div>
          </div>

          <div className={"ui field"}>
            <label htmlFor={""}>Enter Secret Key</label>

            <div className="ui icon input">
              {this.renderSecretKeyTextField()}
              <i
                className="inverted circular sync link icon"
                onClick={(e) => {
                  this.onSecretKeyChange(
                    EncryptionUtil.getRandomSecret(
                      this.state.encryptionConfig.keySize
                    )
                  );
                }}
              />
            </div>
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
                onClick={(e) =>
                  this.setState({
                    secretKey: "",
                    plainText: "",
                    cipherText: "",
                    encrypt: true,
                  })
                }
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
