import { useSelector, useDispatch } from 'react-redux';
import { increment, dencrement } from './actions/actions';

const App = () => {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
      <div className="App">
          <h1>Counter {counter}</h1>

          <h3>Is logged in = {isLogged.toString()}</h3>

          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(dencrement())}>-</button>
      </div>
  );
}

export default App;
