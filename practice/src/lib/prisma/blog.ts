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
