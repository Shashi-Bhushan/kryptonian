// Step 1. import React and React DOM libraries
import React from "react"; // ES2015 module system (System that defines how code can be shared between different files)
import {BrowserRouter as Router} from "react-router-dom";
import Header from "./Header";
import Tab from "./Tab";

// const React = require('react') // CommonJS module system

// Step 2. Create a React component
class App extends React.Component {
  render() {
    return (<Router>
      <div className="ui container">
        <Header/>

        <Tab />
      </div>
    </Router>);
  }
}

export default App;
