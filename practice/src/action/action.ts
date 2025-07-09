"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { createDbBlog, deleteDbBlog, editDbBlog } from "@/lib/prisma/blog";
import { revalidatePath } from "next/cache";

const blogSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(3),
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
  const data = Object.fromEntries(formData);

  const validated = blogSchema.safeParse(data);

  if (!validated.success) {
    return {
      success: false,
      errors: validated.error.flatten().fieldErrors,
    };
  }

  try {
    await createDbBlog(validated.data);
    revalidatePath("/blog");
    return { success: true, errors: {} };
  } catch (error) {
    if (error instanceof Error && error.message === "Slug already exists") {
      return {
        success: false,
        errors: { title: ["A blog with this title already exists."] },
      };
    }
    throw error;
  }
}
export async function editBlog(
  id: number,
  _: BlogFormState,
  formData: FormData
): Promise<BlogFormState> {
  const data = Object.fromEntries(formData);

  const validated = blogSchema.safeParse(data);
  if (!validated.success) {
    return {
      success: false,
      errors: validated.error.flatten().fieldErrors,
    };
  }

  try {
    await editDbBlog(id, validated.data);
    return { success: true, errors: {} };
  } catch (error) {
    if (error instanceof Error && error.message === "Slug already exists") {
      return {
        success: false,
        errors: { title: ["A blog with this title already exists."] },
      };
    }
    throw error;
  }
}

export async function deleteBlog(id: number) {
  await deleteDbBlog(id);
  redirect("/blog");
}
