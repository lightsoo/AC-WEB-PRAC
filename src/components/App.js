import React, { Component } from 'react';
import logo from '../logo.svg';
import {Link} from 'react-router';
import './App.css';

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
          name: 'lightsoo',
          age: 27
      }
  }

  componentDidMount() {
      // ajax call

  }

  componentWillReceiveProps (nextProps, nextContext) {
      // console.log('nextProp: ', nextProps);
      // console.log('nextContext: ', nextContext);
  }

  render() {
    console.log('App\'s render : ', this.props);
    return (
        //기존 HTML에서는 elem들을 필수적으로 container elem안에 포함시켜줘야 한다.
      <div className="App">
          <AppHeader/>
          <AppBody/>
          {/*하위에 elem가 있다면*/}
          {/*router의 하위 elem */}
          {this.props.children}
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
            <div className="App-body">
                <p style={pStyle} >
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Link to="/login/user" >Go user</Link>
            </div>
        );
    }
}

export default App;
