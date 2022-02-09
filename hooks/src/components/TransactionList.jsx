import React, { useContext } from "react";
import { AccountContext } from "../context/AccountContext";
import { Transaction } from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(AccountContext);

  return (
    <>
      <h3>Transaction History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
