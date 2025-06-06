import Link from "next/link";

export const metadata = {
  title: "homepage"
};

export default function Home() {
  return (
    <div className="">
      <h1>Welcome to homepage</h1>
      <div className="flex gap-2">
        <Link
          href="/products"
          className="rounded-md border border-amber-500 p-2"
        >
          Products
        </Link>
        <Link
          className="rounded-md border border-amber-500 p-2"
          href="/articles/breaking-news-123?lang=en"
        >
          Read in English
        </Link>
        <Link
          className="rounded-md border border-amber-500 p-2"
          href="/articles/breaking-news-123?lang=fr"
        >
          Read in French
        </Link>
      </div>
    </div>
  );
}
