// app/products/types.ts
export interface ProductVariant {
  id: string;
  variant: string;
  price: number;
  stock: number;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  children: ProductVariant[];
}

export const products: Product[] = [
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
