import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { plusOne, minusOne } from './actions/actions';


const App = () => {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
        <h3>Counter = {counter}</h3>
        <button onClick={() => dispatch(plusOne())}>+</button>
        <button onClick={() => dispatch(minusOne())}>-</button>

        <h2>User is logged in = {isLogged.toString()}</h2>
        
    </div>
  );
}

export default App;
// Todo Add log in button