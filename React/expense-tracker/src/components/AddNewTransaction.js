import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import "../App.css";

function AddNewTransaction() {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (event) => {
    event.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add new Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          ></input>
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            placeholder="Enter Amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          ></input>
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
}

export default AddNewTransaction;
