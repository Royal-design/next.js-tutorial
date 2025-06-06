import { products } from "../page";
import { Metadata } from "next";

interface PropsType {
  params: {
    productId: string;
  };
}

export const generateMetadata = ({ params }: PropsType): Metadata => {
  const id = params.productId;
  return {
    title: `Product ${id}`
  };
};

const getRandomNumber = (count: number) => {
  return Math.floor(Math.random() * count);
};

export default function ProductDetails({ params }: PropsType) {
  const product = products.find((product) => product.id === params.productId);

  const random = getRandomNumber(2);
  if (random === 1) {
    throw new Error(`Error loading product ${product?.id}`);
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{product?.name}</h1>
      <p className="mt-2">{product?.description}</p>
    </div>
  );
}
