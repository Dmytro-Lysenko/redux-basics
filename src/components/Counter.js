import { Component } from "react";
import { useSelector, useDispatch, connect } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };

  const increasetHandler = () => {
    dispatch({ type: "INCREASE", amount: 5 });
  };

  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "TOGGLE" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>-- {counter} --</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increasetHandler}>increment by 5</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

///Using redux with class based component Class based component

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>-- {this.props.counter} --</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToPros = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "INCREMENT" }),
//     decrement: () => dispatch({ type: "DECREMENT" }),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToPros)(Counter);
