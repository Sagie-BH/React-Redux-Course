import React, { useContext } from "react";
import { AccountContext } from "../context/AccountContext";

const moneyConverter = (num) => {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "ILS",
  });
  return formatter.format(num);
};

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(AccountContext);

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text} <span>{moneyConverter(transaction.amount)}</span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn">x</button>
    </li>
  );
};
