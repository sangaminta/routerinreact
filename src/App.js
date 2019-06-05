import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Root from './container/Root';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            {/* <Route  path ='/' component={Root} /> */}
            
            <Root/>
        </div>
      </Router>
    )
  }
}

export default App;
