"use client";

import { createBlog, type BlogFormState } from "@/action/action";
import { useActionState } from "react";

const initialState: BlogFormState = {
  success: true,
  errors: {},
};

export default function CreateBlog() {
  const [state, formAction] = useActionState(createBlog, initialState);

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Create Blog</h2>
      <form action={formAction} className="space-y-4">
        <div>
          <label>Title</label>
          <input name="title" className="border rounded w-full px-2 py-1" />
          {state.errors?.title && (
            <p className="text-red-500 text-sm">{state.errors.title}</p>
          )}
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="description"
            className="border rounded w-full px-2 py-1"
          />
          {state.errors?.description && (
            <p className="text-red-500 text-sm">{state.errors.description}</p>
          )}
        </div>
        <div>
          <label>Author</label>
          <input name="author" className="border rounded w-full px-2 py-1" />
          {state.errors?.author && (
            <p className="text-red-500 text-sm">{state.errors.author}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
