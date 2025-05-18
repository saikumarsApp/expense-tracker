import React from 'react';

const ExpenseSummary = ({ expenses }) => {
  const currentMonth = new Date().getMonth();
  const total = expenses
    .filter((exp) => new Date(exp.date).getMonth() === currentMonth)
    .reduce((acc, curr) => acc + curr.amount, 0);

  const categoryTotals = expenses.reduce((acc, exp) => {
    acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
    return acc;
  }, {});

  return (
    <div className="summary">
      <h3>Total This Month: ${total.toFixed(2)}</h3>
      <ul>
        {Object.entries(categoryTotals).map(([cat, amt]) => (
          <li key={cat}>{cat}: ${amt.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseSummary;
