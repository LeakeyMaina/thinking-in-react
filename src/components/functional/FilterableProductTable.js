import React, { useState, useEffect } from "react";

import "../../App.css";

import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

function FilterableProductTable({ products }) {
  const [filterText, setfilterText] = useState("");
  const [inStockOnly, setinStockOnly] = useState(false);

  useEffect(() => {
    document.title = "Functional Components";
    document.title.blink();
  });

  function handleFilterTextChange(e) {
    console.log(`filterText ${e.target.value}`);
    setfilterText(e.target.value);
  }

  function handleInStockChange() {
    console.log(`inStockOnly`);
    setinStockOnly(!inStockOnly);
  }

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={handleFilterTextChange}
        onInStockChange={handleInStockChange}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}

export default FilterableProductTable;
