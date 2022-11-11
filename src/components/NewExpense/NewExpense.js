import { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = props => {
  const [isAddingNewExpense, setIsAddingNewExpense] = useState(false);

  const startAddingNewExpenseHandler = () => {
    setIsAddingNewExpense(true);
  };

  const stopAddingNewExpenseHandler = () => {
    setIsAddingNewExpense(false);
  };

  const onSaveExpenseDataHandler = onSaveExpenseData => {
    const expenseData = {
      ...onSaveExpenseData,
      amount: parseFloat(onSaveExpenseData.amount).toFixed(2),
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsAddingNewExpense(false);
  };
  return (
    <div className="new-expense">
      {!isAddingNewExpense && (
        <button onClick={startAddingNewExpenseHandler}>Add New Expense</button>
      )}
      {isAddingNewExpense && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={stopAddingNewExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
