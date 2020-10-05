import React from 'react';

import {Link} from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (<div className="ui secondary pointing menu">
      <Link to={"/"} className={"item"}>Kryptonian</Link>
      <hr/>
    </div>)
  }
}

export default Header;