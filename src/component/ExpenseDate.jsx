import React from 'react';
//aha hm props k through data le sakta han pr date variables k through bhi data le sakta han props.date nai likhan padega
const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString('en-US', { month: 'long' });
  const year = date.getFullYear();
  const day = date.toLocaleString('en-US', { day: '2-digit' });

  return (
    <div className='expenses-date'>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
};

export default ExpenseDate;
//isa hm ExpenseItem mai import karenga