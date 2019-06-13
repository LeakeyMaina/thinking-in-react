import React from "react";

import CategoryHeading from "./CategoryHeading";
import ProductRow from "./ProductRow";

export default function ProductList(product, lastCategory) {
  const isNewCategory = product.category !== lastCategory;
  if (isNewCategory) {
    return <CategoryHeading category={product.category} />;
  }
  return <ProductRow product={product} key={product.name} />;
}
