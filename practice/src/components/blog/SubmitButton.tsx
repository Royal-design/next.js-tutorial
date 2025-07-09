"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

export const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      className="bg-blue-600 text-white hover:bg-blue-600/80"
    >
      {pending ? "Submitting" : "Submit"}
    </Button>
  );
};
