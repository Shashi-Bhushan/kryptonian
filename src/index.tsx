import React from 'react'; // ES2015 module system (System that defines how code can be shared between different files)
import ReactDOM from 'react-dom';
import App from "./components/App";
import 'semantic-ui-css/semantic.min.css'


// Step 3. Show the React Component on screen
ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);
