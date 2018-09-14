import React, {Component} from 'react';
import './App.css';
import Button from './components/Button';

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      loading: true,
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
    setTimeout(() => {
      this.setState({counter: Math.round(Math.random() * 100), loading: false});
      // this.setState({loading: false});
      console.log('..............', this.state);
    }, 3000);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
   // console.log('.........chet', this.state.counter);
  }


  matFun = (sing) => {
    switch (sing) {
      case "+": this.setState({counter: this.state.counter + 1});
      break;
      case "-": this.setState({counter: this.state.counter - 1});
      break;
      case "/": Math.abs(this.state.counter) % 2 !== 1 &&  this.setState({counter: this.state.counter / 2});
      break;
      case "sqr": this.setState({counter: Math.pow(this.state.counter, 2)});
    }
  };

  render() {
    const {counter} = this.state;
    console.log('render');
    return (
      <div className="App">
        {this.state.loading ? <h1>Loading</h1> :
          <React.Fragment>
            <h1>{counter}</h1>
            <Button click={() => this.matFun("+")} text="+"/>
            <Button click={() => this.matFun("-")} text="-"/>
            {/*TODO move to component*/}
            <button onClick={() => this.matFun("/")} disabled={Math.abs(counter % 2) === 1}>/2</button>
            <button onClick={() => this.matFun("sqr")}>sqr</button>
          </React.Fragment>
        }
      </div>
    );
  }
}

export default App;


















/*  dec() {
      this.setState((prevState) => {
        return {counter: prevState.counter - 1}
      });
  };*/