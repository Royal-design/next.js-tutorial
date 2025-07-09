"use client";

import { useAppSelector } from "@/redux/hooks";
import React from "react";
import { DialogModal } from "./DialogModal";
import CreateBlog from "@/app/blog/createblog/page";
import { EditBlogForm } from "../blog/EditBlogForm";

export const DisplayModal = () => {
  const { type, data } = useAppSelector((state) => state.modal);
  console.log(type);

  return (
    <div>
      {type === "test" ? (
        <DialogModal title="Testing" children={<TestPage />} />
      ) : type === "create blog" ? (
        <DialogModal title="Create Blog" children={<CreateBlog />} />
      ) : type === "edit blog" ? (
        <DialogModal
          title="Edit Blog"
          children={<EditBlogForm blog={data} />}
        />
      ) : null}
    </div>
  );
};

const TestPage = () => {
  return (
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
      reprehenderit.
    </p>
  );
};
