import React, { useState } from "react";
import NewExpenseComponent from "./components/Expenses/NewExpenseComponent";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_Expense = [
  {
    id: "e1",
    title: "New PS5",
    amount: 499.99,
    date: new Date(2021, 2, 14),
  },
  { id: "e2", title: "New Monitor", amount: 199.99, date: new Date(2021, 1, 1) },
  {
    id: "e3",
    title: "New Game",
    amount: 79.99,
    date: new Date(2021, 3, 9),
  },
  {
    id: "e4",
    title: "New Fan",
    amount: 20,
    date: new Date(2021, 3, 19),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_Expense);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />

      <NewExpenseComponent items={expenses} />
    </div>
  );
};

export default App;
