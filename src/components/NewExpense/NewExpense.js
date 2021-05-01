import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
    const saveExpenseDataHandler =(enteredExpenseData)=>{
        const expensedata={
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        props.onAddExpense(expensedata);
    }
  return (
    <div className="new-expense">
      <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
};
export default NewExpense;
