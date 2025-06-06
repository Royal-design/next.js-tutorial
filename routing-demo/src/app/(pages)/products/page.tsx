import Image from "next/image";
import Link from "next/link";

export const products = [
  {
    id: "p1",
    name: "Smartphone X100",
    description: "A high-end smartphone with amazing camera and performance.",
    price: 799,
    category: "Electronics",
    image: "/images/smartphone-x100.jpg",
    children: [
      {
        id: "p1-1",
        variant: "Black - 128GB",
        price: 799,
        stock: 10,
        image: "/images/smartphone-x100-black.jpg"
      },
      {
        id: "p1-2",
        variant: "Silver - 256GB",
        price: 899,
        stock: 5,
        image: "/images/smartphone-x100-silver.jpg"
      }
    ]
  },
  {
    id: "p2",
    name: "Running Shoes Pro",
    description: "Lightweight and durable running shoes for professionals.",
    price: 120,
    category: "Footwear",
    image: "/images/shoes-pro.jpg",
    children: [
      {
        id: "p2-1",
        variant: "Size 42 - Red",
        price: 120,
        stock: 12,
        image: "/images/shoes-red-42.jpg"
      },
      {
        id: "p2-2",
        variant: "Size 44 - Blue",
        price: 120,
        stock: 7,
        image: "/images/shoes-blue-44.jpg"
      }
    ]
  },
  {
    id: "p3",
    name: "Office Desk Chair",
    description: "Ergonomic chair with adjustable height and lumbar support.",
    price: 230,
    category: "Furniture",
    image: "/images/desk-chair.jpg",
    children: [
      {
        id: "p3-1",
        variant: "Black Mesh",
        price: 230,
        stock: 4,
        image: "/images/desk-chair-black.jpg"
      },
      {
        id: "p3-2",
        variant: "Grey Fabric",
        price: 230,
        stock: 8,
        image: "/images/desk-chair-grey.jpg"
      }
    ]
  }
];

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
