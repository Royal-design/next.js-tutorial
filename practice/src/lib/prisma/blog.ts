import prisma from "../db";

export async function createDbBlog({
  title,
  description,
  author,
}: {
  title: string;
  description: string;
  author: string;
}) {
  const slug = title.toLowerCase().replace(/\s+/g, "-");

  const existing = await prisma.blog.findUnique({ where: { slug } });

  if (existing) {
    throw new Error("Slug already exists");
  }

  return await prisma.blog.create({
    data: {
      title,
      description,
      author,
      slug: title.toLowerCase().replace(/\s+/g, "-"),
    },
  });
}

export async function editDbBlog(
  id: number,
  {
    title,
    description,
    author,
  }: {
    title: string;
    description: string;
    author: string;
  }
) {
  const slug = title.toLowerCase().replace(/\s+/g, "-");

  const existing = await prisma.blog.findUnique({ where: { slug } });

  if (existing && existing.id !== id) {
    throw new Error("Slug already exists");
  }

  return await prisma.blog.update({
    where: { id },
    data: {
      title,
      description,
      author,
      slug: title.toLowerCase().replace(/\s+/g, "-"),
    },
  });
}

export async function deleteDbBlog(id: number) {
  return await prisma.blog.delete({
    where: { id },
  });
}
