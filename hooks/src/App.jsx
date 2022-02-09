import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import TransactionList from './components/TransactionList';
import { AccountProvider } from './context/AccountContext';



const App = () => {
  return (
    <AccountProvider>
      <div className="global-container">
        <div className="container">
          <Balance/>
          <TransactionList/>
          <AddTransaction/>
        </div>
      </div>
    </AccountProvider>
  );
}

export default App;
