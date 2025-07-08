"use client";

import { BlogFormState, editBlog } from "@/action/action";
import { Blog } from "@/generated/prisma";
import { useActionState } from "react";

const initialState: BlogFormState = {
  success: true,
  errors: {},
};

export function EditBlogForm({ blog }: { blog: Blog }) {
  const [state, formAction] = useActionState(
    editBlog.bind(null, blog.id),
    initialState
  );
  return (
    <form action={formAction} className="space-y-4 max-w-md mx-auto mt-8">
      <div>
        <label>Title</label>
        <input
          name="title"
          defaultValue={blog.title}
          className="border rounded w-full px-2 py-1"
        />
        {state.errors?.title && (
          <p className="text-red-500 text-sm">{state.errors.title}</p>
        )}
      </div>

      <div>
        <label>Description</label>
        <textarea
          name="description"
          defaultValue={blog.description}
          className="border rounded w-full px-2 py-1"
        />
        {state.errors?.description && (
          <p className="text-red-500 text-sm">{state.errors.description}</p>
        )}
      </div>

      <div>
        <label>Author</label>
        <input
          name="author"
          defaultValue={blog.author}
          className="border rounded w-full px-2 py-1"
        />
        {state.errors?.author && (
          <p className="text-red-500 text-sm">{state.errors.author}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Update Blog
      </button>
    </form>
  );
}
