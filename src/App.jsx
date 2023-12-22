// App.js
import React, { useState } from 'react';
// import ExpenseItem from './component/ExpenseItem';
// aha hm expenses compomnent use karenga qki ExpenseItem ka component hmna Expesne mai likha han
//hmna ky  kia ki date ko jo print kar raha tha ExpenseItem ka help sa us map method hmna Expenses mai likh diya or Expenses component ko app jsx mai likh raha han

import Expenses from './component/Expenses'
function App(props) {
  const [count, setCount] = useState(0);

  let expenses = [
    {
      id: 'e1',
      title: 'school fee',
      amount: 3444,
      date: new Date(2023, 5, 10),
    },
    {
      id: 'e2',
      title: 'school fee',
      amount: 3444,
      date: new Date(2023, 5, 10),
    },
    {
      id: 'e3',
      title: 'school fee',
      amount: 3444,
      date: new Date(2023, 5, 10),
    },
  ];

  return (
    <div>
    {/* aha hm apna data pass karenga jo  Expenses mai pass hoga  */}
     <Expenses item={expenses}></Expenses>
    </div>
  );
}

export default App;
