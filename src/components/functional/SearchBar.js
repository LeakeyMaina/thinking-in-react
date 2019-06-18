//SearchBar(blue): receives all user input
//import React, { useState, useEffect } from "react";
import React from "react";

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockChange
}) {
  
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={onFilterTextChange}
      />
      <p>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={onInStockChange}
        />{" "}
        Only show products in stock
      </p>
    </form>
  );
}

export default SearchBar;
