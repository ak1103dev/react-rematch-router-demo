import React from 'react';
import { connect } from 'react-redux'
import './App.css';


function App(props) {
  return (
    <div>
      <div>cart {props.xxx}</div>
      The count is {props.count}
      <button onClick={props.increment}>increment</button>
      <button onClick={props.incrementAsync}>incrementAsync</button>
    </div>
  );
}

const mapState = state => ({
  count: state.count.count,
  xxx: state.cart
})

const mapDispatch = ({ count: { increment, incrementAsync }}) => ({
  increment: () => increment(2),
  incrementAsync: () => incrementAsync(1)
})

export default connect(mapState, mapDispatch)(App);
