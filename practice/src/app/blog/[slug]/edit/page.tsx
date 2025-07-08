import { EditBlogForm } from "@/components/blog/EditBlogForm";
import prisma from "@/lib/db";

export default async function EditBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await prisma.blog.findUnique({
    where: { slug: slug },
  });

  if (!blog) return <div>Blog not found</div>;

  return <EditBlogForm blog={blog} />;
}
