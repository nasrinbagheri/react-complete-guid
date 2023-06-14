import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const saveExpenseHandler = (expenseData) => {
    const newExpense = { ...expenseData, id: Math.random().toString() };
    props.onAddExpense(newExpense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpenseHandler}></ExpenseForm>
    </div>
  );
};
export default NewExpense;
