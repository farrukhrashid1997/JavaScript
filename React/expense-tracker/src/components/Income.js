import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Income = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  console.log(amounts)
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  return (
    <div>
      <h4>Income</h4>
      <p className="money plus">${income}</p>
    </div>
  );
};
export default Income;
