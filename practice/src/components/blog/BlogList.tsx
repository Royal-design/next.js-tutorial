"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Blog } from "@/generated/prisma";

export default function BlogList({ blogs }: { blogs: Blog[] }) {
  const router = useRouter();

  return (
    <>
      <Button
        onClick={() => router.push("/blog/createblog")}
        className="my-4 cursor-pointer"
      >
        Create Blog
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-4">
        {blogs.map((blog) => (
          <Link key={blog.id} href={`/blog/${blog.slug}`}>
            <div className="p-3 rounded-md shadow-md space-y-2 max-w-sm">
              <p>{blog.title}</p>
              <p>{blog.description}</p>
              <div className="flex justify-between items-center">
                <p>{blog.author}</p>
                <p className="text-xs">
                  {new Date(blog.createdAt).toDateString()}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
