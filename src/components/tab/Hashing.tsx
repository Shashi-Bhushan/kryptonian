import React from "react";
import { Link } from "react-router-dom";

class Hashing extends React.Component {
  renderSelectedTab() {
    return (
      <div className="ui bottom attached active tab segment">
        Hashing Form
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="ui top attached tabular menu">
          <div className="item">
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

          <div className="active item">
            <i className={"hashtag icon"} />
            <Link to={"/hashing"}>Hashing</Link>
          </div>
        </div>

        {this.renderSelectedTab()}
      </div>
    );
  }
}

export default Hashing;
