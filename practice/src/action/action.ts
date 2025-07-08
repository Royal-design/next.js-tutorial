"use server";

import { z } from "zod";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";

const blogSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  author: z.string().min(2),
});

const editBlogSchema = z.object({
  //   id: z.string().min(1).transform(Number),
  title: z.string().min(3),
  description: z.string().min(10),
  author: z.string().min(2),
});

export type BlogFormState = {
  success: boolean;
  errors: {
    title?: string[];
    description?: string[];
    author?: string[];
  };
};

export async function createBlog(_: BlogFormState, formData: FormData) {
  const raw = {
    title: formData.get("title"),
    description: formData.get("description"),
    author: formData.get("author"),
  };

  const result = blogSchema.safeParse(raw);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { title, description, author } = result.data;

  await prisma.blog.create({
    data: {
      title,
      description,
      author,
      slug: title.toLowerCase().replace(/\s+/g, "-"),
    },
  });

  redirect("/blog");
}
export async function editBlog(
  id: number,
  _: BlogFormState,
  formData: FormData
): Promise<BlogFormState> {
  const raw = {
    title: formData.get("title"),
    description: formData.get("description"),
    author: formData.get("author"),
  };

  const result = editBlogSchema.safeParse(raw);
  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { title, description, author } = result.data;

  await prisma.blog.update({
    where: { id },
    data: {
      title,
      description,
      author,
      slug: title.toLowerCase().replace(/\s+/g, "-"),
    },
  });

  redirect("/blog");
}

export async function deleteBlog(id: number) {
  await prisma.blog.delete({
    where: { id },
  });

  redirect("/blog");
}
