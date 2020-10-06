import React from "react";

import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to={"/"} className={"item"}>
          Kryptonian
        </Link>

        <div className="ui attached stackable menu">
          <div className="ui simple dropdown right item">
            More
            <i className="dropdown icon"/>
            <div className="menu">
              <a className="item">
                <i className="address card outline icon"/> About Me
              </a>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Header;
