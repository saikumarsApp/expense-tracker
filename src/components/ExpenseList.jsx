import React, { useState } from 'react';
import ExpenseCard from './ExpenseCard';

const ExpenseList = ({ expenses, filterCategory, sortType, searchQuery, updateExpense, deleteExpense }) => {
  const [editingExpense, setEditingExpense] = useState(null);

  const handleEdit = (expense) => {
    const title = prompt('Edit title:', expense.title);
    if (!title) return;
    updateExpense({ ...expense, title });
  };

  let filtered = expenses.filter((exp) =>
    (filterCategory === 'All' || exp.category === filterCategory) &&
    (exp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exp.category.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  if (sortType === 'date-desc') filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
  if (sortType === 'date-asc') filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
  if (sortType === 'amount-asc') filtered.sort((a, b) => a.amount - b.amount);
  if (sortType === 'amount-desc') filtered.sort((a, b) => b.amount - a.amount);

  if (filtered.length === 0) return <p>No expenses found.</p>;

  return (
    <div className="expense-list">
      {filtered.map((exp) => (
        <ExpenseCard
          key={exp.id}
          expense={exp}
          onEdit={handleEdit}
          onDelete={deleteExpense}
        />
      ))}
    </div>
  );
};

export default ExpenseList;
