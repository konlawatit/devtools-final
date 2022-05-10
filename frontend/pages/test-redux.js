import React from "react";
import { connect } from "react-redux";

import { incrementCounter, decrementCounter } from "../redux/actions/conterActions";

const testRedux = (props) => {
    return (
        <>
        <button onClick={() => props.incrementCounter()} >increment</button>
        <button onClick={() => props.decrementCounter()} >deincrement</button>
        Hello World {props.counter.value}
        {console.log(props.counter.value)}
        </>
    )
}

const mapStateToProps = (state) => ({
    main: state.main,
    counter: state.counter
  });
  
  const mapDispatchToProps = {
    incrementCounter,
    decrementCounter
  };

export default connect(mapStateToProps, mapDispatchToProps)(testRedux);