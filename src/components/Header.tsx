import React from "react";

import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import Dropdown from "semantic-ui-react/dist/commonjs/modules/Dropdown";

class Header extends React.Component {
  render() {
    return (
      <Menu>
        <Menu.Item>
          <Link to={"/"} className={"link"}>
            <i className="home icon" /> Kryptonian
          </Link>
        </Menu.Item>
        <Menu.Item position={"right"}>
          <Dropdown
            text="more"
            pointing
            simple
            className="link item"
            direction={"right"}
          >
            <Dropdown.Menu>
              <Dropdown.Header>Links</Dropdown.Header>
              <Dropdown.Item>
                <Link to={"/about-app"} className={"item"}>
                  <i className="user circle icon" /> About Kryptonian
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to={"/about-me"} className={"item"}>
                  <i className="user secret icon" /> About the author
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Header;
