"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { createDbBlog, deleteDbBlog, editDbBlog } from "@/lib/prisma/blog";

const blogSchema = z.object({
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

  await createDbBlog(result.data);

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

  const result = blogSchema.safeParse(raw);
  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  await editDbBlog(id, result.data);
  redirect("/blog");
}

export async function deleteBlog(id: number) {
  await deleteDbBlog(id);
  redirect("/blog");
}
