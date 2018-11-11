import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Sidebar from './components/sidebar';
import Main from './components/main';
import AlertContainer from './components/alert-container';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import './assets/styles/App.css';
import createStore from './store/init'
import { toggleSidepanel, addAlert } from './store/actions';

const store = createStore();

class App extends Component {
  state = {
    count: 0
  };

  handleMenuClick = (menu) => {
    switch(menu) {
      case 'settings':
        store.dispatch(toggleSidepanel())
        break;
      default:
        console.log(menu);
        break;
    }
  }

  showAlert = () => {
    const { count } = this.state;

    store.dispatch(
      addAlert(
        'Care3',
        'Chrome notifications ' + count,
        'New messages notifications new messages notifications'
      )
    );

    this.setState({ count: count + 1 });
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Sidebar
            selectedMenu="settings"
            menuClick={this.handleMenuClick}
          />
          <Main>
            <p>Content</p>
            <button onClick={this.showAlert}>Show Alert</button>
          </Main>
          <AlertContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
