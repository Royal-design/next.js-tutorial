import React from "react";

const Product = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <div>This is product content</div>;
};

export default Product;
