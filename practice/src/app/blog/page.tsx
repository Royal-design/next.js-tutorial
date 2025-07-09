import BlogList from "@/components/blog/BlogList";
import { Blog } from "@/generated/prisma";
import prisma from "@/lib/db";

export default async function BlogPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const blogs: Blog[] = await prisma.blog.findMany({
    orderBy: [{ createdAt: "desc" }, { updatedAt: "desc" }],
  });

  return (
    <div className="px-8">
      <BlogList blogs={blogs} />
    </div>
  );
}
