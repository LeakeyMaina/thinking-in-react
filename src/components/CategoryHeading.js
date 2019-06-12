//ProductCategoryRow(turquoise): displays a heading for each category
import React from "react";

function CategoryHeading(props) {
  const category = props.category;
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

export default CategoryHeading;
