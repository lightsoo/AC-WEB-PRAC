import React, { Component } from 'react';
import logo from '../logo.svg';
import {Link} from 'react-router';
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
        //기존 HTML에서는 elem들을 필수적으로 container elem안에 포함시켜줘야 한다.
        //
      <div className="App">
          <AppHeader/>
          <AppBody/>
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
        <div classname="App-body">
            <p style={pStyle} >
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
