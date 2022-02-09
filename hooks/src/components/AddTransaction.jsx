import React, { useContext, useState } from 'react';
import { AccountContext } from '../context/AccountContext';

const AddTransaction = () => {
    const {addTransaction} = useContext(AccountContext);

    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);

const onSubmit = e =>{
    e.preventDefault();
    const newTransaction = {
        id: Math.floor(Math.random() * 100000),
        name,
        amount: +amount
    }
    addTransaction(newTransaction);
}

  return (
    <>
      <form onSubmit={onSubmit}>
        <h3>Create new transaction</h3>
        <br />
        <div>
          <input
            type="text"
            value={name}
            placeholder="Add transaction name..."
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <input
            type="number"
            value={amount}
            placeholder="Add transaction amount..."
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
