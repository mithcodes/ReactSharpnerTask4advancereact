import React from 'react';
import ExpenseItem from './ExpenseItem';
// jo app jsx mai component attached kar raha tha avi wo aha likh de raha han
function Expenses(props) {
  return (
    <div>
        {/* props.item islia hua qki hm item mai data ko pass kar raha han */}
      {props.item.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </div>
  );
}

export default Expenses;
