import React, {Component, Fragment} from 'react';
import './App.css';
import Button from './components/Button';
import {addCounter, decCounter, delCounter, fakeRequest, sqrCounter} from "./core/store/actions";
import {connect} from "react-redux";


class App extends Component {
  constructor() {
    super();
    /*  this.state = {
        counter: 0,
        loading: false,
        array: []
      };*/
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.props.fakeRequest();
  }

  render() {
    const {counter, add, dec, del, sqr, loading, error, fakeRequest} = this.props;
    console.log(this.props);
    return (
      <div className="App">
        {error &&
        <React.Fragment>
          <h1>{error}</h1>
          <hr/>
          <div>
            <Button classtyle={"btn btn-light"} click={() => fakeRequest()} text="Update"/>
          </div>
        </React.Fragment>}
        {loading && <i className={"fa fa-spinner fa-spin"} />}
        {!error && !loading &&
        <React.Fragment>
          <h1>{counter}</h1>
          <div className={"btn-group"}>
            <Button classstyle={"btn btn-outline-primary"} click={() => add()} text="+"/>
            <Button classstyle={"btn btn-outline-primary"} click={() => dec()} disabl={counter < 1} text="-"/>
            <Button classstyle={"btn btn-outline-primary"} click={() => del()}
                    disabl={Math.abs(counter % 2) === 1 || counter < 1} text="/"/>
            <Button classstyle={"btn btn-outline-primary"} click={() => sqr()} text="sqr"/>
          </div>
        </React.Fragment>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counterReduser.counter,
  loading: state.counterReduser.loading,
  error: state.counterReduser.error
});

const mapDispatchToProps = dispatch => ({
  add: () => dispatch(addCounter()),
  dec: () => dispatch(decCounter()),
  del: () => dispatch(delCounter()),
  sqr: () => dispatch(sqrCounter()),
  fakeRequest: () => dispatch(fakeRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);


//this.state.loading ? <h1>Loading</h1> :