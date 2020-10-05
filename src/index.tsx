// Step 1. import React and React DOM libraries
import React from 'react'; // ES2015 module system (System that defines how code can be shared between different files)
import ReactDOM from 'react-dom';

import Header from './components/Header';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import SymmetricEncryptionForm from "./components/SymmetricEncryptionForm";
import Tab from "./components/Tab";

// const React = require('react') // CommonJS module system

// Step 2. Create a React component
const App = () => {
  return (<Router>
    <div className="ui container">
      <Header/>

      <Tab />
    </div>
  </Router>);
};

// Step 3. Show the React Component on screen
ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);
