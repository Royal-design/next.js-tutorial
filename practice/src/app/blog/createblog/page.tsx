"use client";

import { createBlog, type BlogFormState } from "@/action/action";
import { SubmitButton } from "@/components/blog/SubmitButton";
import { useAppDispatch } from "@/redux/hooks";
import { closeModal } from "@/redux/slice/modalSlice";
import { useActionState, useEffect } from "react";

const initialState: BlogFormState = {
  success: false,
  errors: {},
};

export default function CreateBlog() {
  const dispatch = useAppDispatch();
  const [state, formAction] = useActionState(createBlog, initialState);

  useEffect(() => {
    if (state.success) {
      dispatch(closeModal());
    }
  }, [state.success, dispatch]);

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
        <SubmitButton />
      </form>
    </div>
  );
}
