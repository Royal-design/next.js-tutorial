import React from "react";

export const Review = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <div>This is Review content</div>;
};
