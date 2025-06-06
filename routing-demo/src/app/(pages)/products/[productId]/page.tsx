// app/(pages)/products/[productId]/page.tsx

import { Metadata } from "next";
import { products } from "../page";

type Props = {
  params: {
    productId: string;
  };
};

// ✅ Must be synchronous unless you use await/fetch
export function generateMetadata({ params }: Props): Metadata {
  const product = products.find((p) => p.id === params.productId);
  return {
    title: product ? product.name : "Product Not Found"
  };
}

// ✅ This must also be synchronous unless fetching data
export default function ProductDetails({ params }: Props) {
  const product = products.find((p) => p.id === params.productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="mt-2">{product.description}</p>
    </div>
  );
}
