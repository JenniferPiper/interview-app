import * as React from 'react';


import Timer from '../timer/timer';
import './App.css';

import logo from '../../assets/logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">CrushIt</h1>
            <h2 className="App-tagline">Code Challenge Companion <span>(prototype)</span></h2>
        </header>
        {/*<p className="App-intro">*/}
          {/*To get started, edit <code>src/App.tsx</code> and save to reload.*/}
        {/*</p>*/}
        <Timer/>
      </div>
    );
  }
}

export default App;
