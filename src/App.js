import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css'
import './css/app.css'

import Invoice from './Invoice.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Invoice />
      </div>
    )
  }
}

export default App;
