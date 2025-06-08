import Image from "next/image";
import Link from "next/link";
import { products } from "./lib/product";

export const metadata = {
  title: "products",
  description: "product description"
};

const getRandomNumber = (count: number) => {
  return Math.floor(Math.random() * count);
};

export default async function Products() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("intentional delay");
    }, 1000);
  });
  const random = getRandomNumber(2);
  if (random === 1) {
    throw new Error("Error loading products");
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
      {products.map((product) => (
        <Link href={`/products/${product.id}`} key={product.id}>
          <div className="border rounded-lg p-4">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
            />
            <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
            <p>{product.description}</p>
            <p className="text-lg font-bold">${product.price}</p>

            <div className="mt-4">
              <h3 className="font-semibold">Variants:</h3>
              <ul className="list-disc ml-5">
                {product.children.map((child) => (
                  <li key={child.id}>
                    {child.variant} - ${child.price} ({child.stock} in stock)
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
