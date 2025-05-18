import React from 'react';

const FilterSortBar = ({ setFilterCategory, setSortType, setSearchQuery }) => {
  return (
    <div className="filter-bar">
      <select onChange={(e) => setFilterCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Shopping">Shopping</option>
      </select>
      <select onChange={(e) => setSortType(e.target.value)}>
        <option value="date-desc">Newest</option>
        <option value="date-asc">Oldest</option>
        <option value="amount-desc">High to Low</option>
        <option value="amount-asc">Low to High</option>
      </select>
      <input placeholder="Search" onChange={(e) => setSearchQuery(e.target.value)} />
    </div>
  );
};

export default FilterSortBar;