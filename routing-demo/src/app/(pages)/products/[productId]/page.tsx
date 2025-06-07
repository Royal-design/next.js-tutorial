// app/(pages)/products/[productId]/page.tsx

import { Metadata } from "next";
import { products } from "../lib/product";

type Props = {
  params: Promise<{
    productId: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const productId = (await params).productId;
  const product = products.find((p) => p.id === productId);
  return {
    title: product ? product.name : "Product Not Found"
  };
}

export default async function ProductDetails({ params }: Props) {
  const productId = (await params).productId;
  const product = products.find((p) => p.id === productId);

  if (!product) return <div>Product not found.</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="mt-2">{product.description}</p>
    </div>
  );
}
