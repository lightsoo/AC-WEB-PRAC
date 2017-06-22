import React, { Component } from 'react';
import {Link} from 'react-router';
import logo from './logo.svg';
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
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Link to="/about" >About</Link>
          {/*하위에 elem가 있다면*/}
          {this.props.children}
          {/*alert, page를 이동할때 state값으로 visible을 주지만 ant.design사용*/}

          {/*indexRouter는 껍데기를 두고 Home화면을 보여줄때 사용한다 */}

      </div>
    );
  }
}



export default App;
