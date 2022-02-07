import { createStore } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from './actions/actions';

const AppOne = () => {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
      <div className="App">
          <h1>Counter {counter}</h1>

          <h3>Is logged in = {isLogged.toString()}</h3>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
      </div>
  );
}

export default AppOne;


//Actions
const increment = () => {
  return {
    type: 'INCREMENT',
  }
}
const decrement = () => {
  return {
    type: 'DECREMENT',
  }
}
//Reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT": return state + 1;
    case "DECREMENT": return state - 1;
    default: return state;
  }
}

//Store -> Global State
let store = createStore(counter);

// Display on console
store.subscribe(() => console.log(store.getState()));

//Dispatch
store.dispatch(increment());

