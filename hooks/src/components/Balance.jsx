import React, { useContext } from "react";
import { AccountContext } from "../context/AccountContext";

const moneyConverter = (num) => {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "ILS",
  });
  return formatter.format(num);
};

const Balance = () => {
  const { transactions } = useContext(AccountContext);

  const amountList = transactions.map((tr) => tr.amount);

  const total = amountList.reduce((account, amount) => (account += amount), 0);

  return (
    <div>
      <h4>My Balance</h4>
      <h1>{moneyConverter(total)}</h1>
    </div>
  );
};

export default Balance;
