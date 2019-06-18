//ProductCategoryRow(turquoise): displays a heading for each category

import React from "react";

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

export default ProductCategoryRow;
