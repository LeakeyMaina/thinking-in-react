//ProductTable(green): displays and filters the data collection based on user input
import React from "react";

import CategoryHeading from "./CategoryHeading";
import ProductRow from "./ProductRow";

function ProductTable(props) {
  const rows = [];
  let lastCategory = null;

  props.products.forEach(product => {
    if (product.category !== lastCategory) {
      rows.push(
        <CategoryHeading category={product.category}  />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });
  
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;
