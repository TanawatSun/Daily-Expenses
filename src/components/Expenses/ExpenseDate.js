import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const day = props.date.toLocaleString("th-TH", { day: "2-digit" });
  const month = props.date.toLocaleString("th-TH", { month: "long" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
