import React, { Component, Fragment, PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import TestApp from './Temp';


const Temp = (props) => {
  return (
    <Fragment>
      <div style={{ border: '2', height: '100' }}>
        <div style={{ color: 'red', fontWeight: 'bold', textAlign: 'center', margin: '100' }}>{props.val}</div>
      </div>
    </Fragment>
  )
}
class App extends Component {
  state = {
    val: 1
  }

  // componentDidMount() {
  //   setInterval(() => {
  //     this.setState(() => { return { val: 1 } });
  //   }, 2000)
  // }
  // shouldComponentUpdate(nextProp,nextState){
  //   console.log("nextState",nextState);
  //   console.log("currState",this.state);
  //   return (this.state.val === nextState.val ? false : true);
  // }

  handleOnclick = () => {
    console.log(this.firstName.value)
  }

  handleOnKeyUp = (target, e) => {
    if (e.keyCode === 13) {
      switch (target) {
        case 'firstName':
          this.lastName.focus();
          break;
        case 'lastName':
          this.age.focus();
          break;
        case 'age':
          this.submit.focus();
        default:
          this.firstName.focus();
      }
    }
  }

  render() {
    // console.log("reder App")
    return (
      <div className="App">
        <TestApp
          str="selina"
          bool
          strOrNum={10}
          ary={[1, 3, 4]}
          aryOfObj={[{ name: 'John', age: 34 }, { name: 'Peter', age: 56 }]}
        />
        <div>
          <span>FirstName:</span>
          <input ref={(input) => { this.firstName = input }} type="text"
            onKeyUp={this.handleOnKeyUp.bind(this, 'firstName')} />
        </div>
        <div>
          <span>LastName:</span>
          <input type="text" ref={(input) => { this.lastName = input }}
            onKeyUp={this.handleOnKeyUp.bind(this, 'lastName')} />
        </div>
        <div>
          <span>Age:</span>
          <input type="text"
            ref={(input) => { this.age = input }}
            onKeyUp={this.handleOnKeyUp.bind(this, 'age')} />
        </div>
        <div>
          <input type="submit"
            ref={(input) => { this.submit = input }}
            value="submit"
            onKeyUp={this.handleOnKeyUp.bind(this, 'submit')}
            onClick={this.handleOnclick} />
        </div>
      </div>
    );
  }
}

export default App;
