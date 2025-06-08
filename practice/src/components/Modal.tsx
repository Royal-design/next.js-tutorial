"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function AuthModal({
  title,
  description,
  content
}: {
  title: string;
  description: string;
  content: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

  // Open the modal when component mounts
  useEffect(() => {
    setIsOpen(true);
  }, []);

  // Handle modal close
  const handleClose = () => {
    setIsOpen(false);
    router.back();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <form>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          {content}
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">{title}</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
