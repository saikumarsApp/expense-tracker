import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';
import FilterSortBar from './components/FilterSortBar';
import { CiWallet } from "react-icons/ci";

const App = () => {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('expenses');
    return saved ? JSON.parse(saved) : [];
  });

  const [filterCategory, setFilterCategory] = useState('All');
  const [sortType, setSortType] = useState('date-desc');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const updateExpense = (updated) => {
    setExpenses(expenses.map((exp) => (exp.id === updated.id ? updated : exp)));
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
  };

  return (
    <div className="container">
      <h1><span><CiWallet style={{marginRight: "5px"}}/></span>Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <FilterSortBar
        setFilterCategory={setFilterCategory}
        setSortType={setSortType}
        setSearchQuery={setSearchQuery}
      />
      <ExpenseSummary expenses={expenses} />
      <ExpenseList
        expenses={expenses}
        filterCategory={filterCategory}
        sortType={sortType}
        searchQuery={searchQuery}
        updateExpense={updateExpense}
        deleteExpense={deleteExpense}
      />
    </div>
  );
};

export default App;
