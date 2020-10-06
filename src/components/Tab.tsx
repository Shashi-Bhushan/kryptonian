import React from "react";
import SymmetricForm from "./tab/SymmetricForm";

class Tab extends React.Component {
  render() {
    return (
      <div>
        <div className="ui top attached tabular menu">
          <div className="active item">
            <i className={"key icon"} />
            Symmetric Encryption
          </div>

          <div className="item">
            <i className={"key icon"} />
            Asymmetric Encryption
          </div>

          <div className="item">
            <i className={"pencil alternate icon"} /> Signature
          </div>

          <div className="item">
            <i className={"hashtag icon"} /> Hashing
          </div>
        </div>

        <div className="ui bottom attached active tab segment">
          <SymmetricForm />
        </div>
      </div>
    );
  }
}

export default Tab;
