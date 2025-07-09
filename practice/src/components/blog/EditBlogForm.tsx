"use client";

import { BlogFormState, editBlog } from "@/action/action";
import { Blog } from "@/generated/prisma";
import { useActionState, useEffect } from "react";
import { SubmitButton } from "./SubmitButton";
import { closeModal } from "@/redux/slice/modalSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";

const initialState: BlogFormState = {
  success: false,
  errors: {},
};

export function EditBlogForm({ blog }: { blog: Blog }) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [state, formAction] = useActionState(
    editBlog.bind(null, blog.id),
    initialState
  );

  useEffect(() => {
    if (state.success) {
      dispatch(closeModal());
      router.push("/blog");
    }
  }, [state.success, dispatch]);

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

      <SubmitButton />
    </form>
  );
}
