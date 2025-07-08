"use client";

import React from "react";
import { Button } from "../ui/button";
import { Blog } from "@/generated/prisma";
import { useRouter } from "next/navigation";
import { deleteBlog } from "@/action/action";

export const BlogItem = ({ blog }: { blog: Blog }) => {
  const router = useRouter();
  return (
    <div>
      <div className="p-3 rounded-md shadow-md space-y-2 max-w-sm">
        <p>{blog?.title}</p>
        <p>{blog?.description}</p>
        <p>{blog?.author}</p>
        <Button onClick={() => router.push(`/blog/${blog.slug}/edit`)}>
          Edit Blog
        </Button>
        <form action={deleteBlog.bind(null, blog.id)}>
          <Button>Delete Blog</Button>
        </form>
      </div>
    </div>
  );
};
