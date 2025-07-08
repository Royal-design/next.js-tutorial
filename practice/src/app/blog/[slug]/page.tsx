import { BlogItem } from "@/components/blog/BlogItem";
import { Blog } from "@/generated/prisma";
import prisma from "@/lib/db";
import React from "react";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog: Blog | null = await prisma.blog.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!blog) {
    return <div>Blog post not found.</div>;
  }

  return (
    <div className="px-6">
      <BlogItem blog={blog} />
    </div>
  );
}
