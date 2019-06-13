//ProductTable(green): displays and filters the data collection based on user input
import React from "react";
import ProductList from './ProductList';


function ProductTable({ products }) {
  const productList = products.map(product => {
    let lastCategory = product.category;
    return <fragment>{ProductList(product, lastCategory)}</fragment>;
  });



  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{productList}</tbody>
    </table>
  );
}

export default ProductTable;
