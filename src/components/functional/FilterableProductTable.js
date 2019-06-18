import React from "react";

import "../../App.css";

import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      inStockOnly: false
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange = filterText => {
    console.log(`filterText ${filterText}`);
    this.setState({
      filterText: filterText
    });
  };

  handleInStockChange = inStockOnly => {
    console.log(`inStockOnly ${inStockOnly}`);
    this.setState({
      inStockOnly: inStockOnly
    });
  };

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}

export default FilterableProductTable;