import React from "react";
import SymmetricForm from "./../tab/SymmetricForm";
import { Link } from "react-router-dom";

class Symmetric extends React.Component {
  render() {
    return (
      <div>
        <div className="ui top attached tabular menu">
          <div className="active item">
            <i className={"key icon"} />
            <Link to={"/symmetric"}>Symmetric Encryption</Link>
          </div>

          <div className="item">
            <i className={"key icon"} />
            <Link to={"/asymmetric"}>Asymmetric Encryption</Link>
          </div>

          <div className="item">
            <i className={"pencil alternate icon"} />
            <Link to={"/signature"}>Signature</Link>
          </div>

          <div className="item">
            <i className={"hashtag icon"} />
            <Link to={"/hashing"}>Hashing</Link>
          </div>
        </div>

        <div className="ui bottom attached active tab segment">
          <SymmetricForm />
        </div>
      </div>
    );
  }
}

export default Symmetric;
