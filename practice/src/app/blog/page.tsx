import BlogList from "@/components/blog/BlogList";
import { Blog } from "@/generated/prisma";
import prisma from "@/lib/db";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;

  await new Promise((resolve) => setTimeout(resolve, 2000));

  let blogs: Blog[];

  if (query) {
    blogs = await prisma.blog.findMany({
      where: {
        OR: [
          { title: { contains: query } },
          { description: { contains: query } },
        ],
      },
      orderBy: [{ createdAt: "desc" }, { updatedAt: "desc" }],
    });
  } else {
    blogs = await prisma.blog.findMany({
      orderBy: [{ createdAt: "desc" }, { updatedAt: "desc" }],
    });
  }

  return (
    <div className="px-8">
      <BlogList blogs={blogs} />
    </div>
  );
}
