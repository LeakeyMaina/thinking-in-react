import React, { useState } from "react";

import "../../App.css";

import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

function FilterableProductTable(props) {
  const [filterText, setfilterText] = useState("");
  const [inStockOnly, setinStockOnly] = useState(false);

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
        products={this.props.products}
        filterText={this.state.filterText}
        inStockOnly={this.state.inStockOnly}
      />
    </div>
  );
}

export default FilterableProductTable;
