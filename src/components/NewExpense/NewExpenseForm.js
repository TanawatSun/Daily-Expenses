import React, { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
  const [enterdTitle, setEnterTitle] = useState("");
  const [enteredAmount, setEnterAmount] = useState("");
  const [enteredDate, setEnterDate] = useState("");
  const titleChangeHandler = (event) => {
    setEnterTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnterAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnterDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enterdTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnterTitle("");
    setEnterAmount("");
    setEnterDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enterdTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            step="1"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add New Expense</button>
      </div>
    </form>
  );
};
export default NewExpenseForm;
