import React, { Component } from 'react';
import Sidebar from './components/sidebar';
import Main from './components/main';
import './assets/styles/App.css';
import './assets/font/font.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar
          selectedMenu="settings"
          menuClick={(menu) => console.log(menu)}
        />
        <Main>
          <p>Content</p>
        </Main>
      </div>
    );
  }
}

export default App;
