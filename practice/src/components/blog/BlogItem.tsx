"use client";

import React from "react";
import { Button } from "../ui/button";
import { Blog } from "@/generated/prisma";
import { useRouter } from "next/navigation";
import { deleteBlog, editBlog } from "@/action/action";
import { useAppDispatch } from "@/redux/hooks";
import { setModal } from "@/redux/slice/modalSlice";

export const BlogItem = ({ blog }: { blog: Blog }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  return (
    <div>
      <div className="p-3 rounded-md shadow-md space-y-2 max-w-sm">
        <p>{blog?.title}</p>
        <p>{blog?.description}</p>
        <p>{blog?.author}</p>
        <Button
          onClick={() => {
            // router.push(`/blog/${blog.slug}/edit`);
            dispatch(
              setModal({
                data: {
                  ...blog,
                  createdAt: blog.createdAt.toISOString(),
                  updatedAt: blog.updatedAt.toISOString(),
                },
                isOpen: true,
                type: "edit blog",
              })
            );
          }}
        >
          Edit Blog
        </Button>
        <form action={deleteBlog.bind(null, blog.id)}>
          <Button>Delete Blog</Button>
        </form>
      </div>
    </div>
  );
};
