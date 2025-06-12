import Product from "@/componets/Product";
import { Review } from "@/componets/Review";
import React, { Suspense } from "react";

const ProductReview = () => {
  return (
    <div>
      <Suspense fallback={<p>product Loading...</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>Review Loading...</p>}>
        <Review />
      </Suspense>
    </div>
  );
};

export default ProductReview;
