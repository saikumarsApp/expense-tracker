import React from 'react';

const ExpenseCard = ({ expense, onDelete, onEdit }) => {
  const { id, title, amount, category, date } = expense;

  return (
    <div className="expense-card">
      <h3>{title}</h3>
      <p>Amount: ₹{amount}</p>
      <p>Category: {category}</p>
      <p>Date: {new Date(date).toLocaleDateString()}</p>

      <div className="card-buttons">
        <button className="edit-btn" onClick={() => onEdit(expense)}>
          Edit
        </button>
        <button className="delete-btn" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ExpenseCard;
