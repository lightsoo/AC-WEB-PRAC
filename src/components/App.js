import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
          a: '',
          b: []
      }
  }

  componentDidMount() {
      // ajax call
  }

  componentWillReceiveProps () {

  }

  render() {

    return (
      <div className="App">

      </div>
    );
  }
}


class AppHeader extends Component {

    render() {
        let title = 'My First React App';

        return (
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>{title}</h2>
            </div>
        );
    }
}

class AppBody extends Component {

    render() {
        let pStyle = {
            color: 'aqua',
            backgroundColor: 'black'
        };

        return (


            <p style={pStyle} className="App-body">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>


        );
    }
}

export default App;
