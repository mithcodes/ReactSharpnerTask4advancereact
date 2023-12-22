// 
// ExpenseItem.js
import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const [newTitle, setNewTitle] = useState("");
  const [amount, setAmount] = useState(props.amount);
  const [newAmount, setNewAmount] = useState("0");
  const [enteredDate, setEnteredDate] = useState(props.date);

  const clickHandler = () => {
    setTitle(newTitle);
  }

  const changeHandler = (event) => {
    setNewTitle(event.target.value);
  }

  const amountSetter = () => {
    setAmount(newAmount);
  }

  const amountChange = (event) => {
    setNewAmount(event.target.value);
  }

  const handleDateChange = (date) => {
    setEnteredDate(date);
  }

  return (
    <div className='expense-item'>
      <ExpenseDate date={enteredDate} onDateChange={() => {}} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{amount}</div>
      </div>
      <input type="text" value={newTitle} onChange={changeHandler} />
      <button onClick={clickHandler}>Change title</button>
      <input type="number" value={newAmount} onChange={amountChange} />
      <button onClick={amountSetter}>Change amount</button>
      {/* Use react-datepicker for date selection */}
      <DatePicker
        selected={enteredDate}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
        className="date-picker"
      />
    </div>
  );
}

export default ExpenseItem;
