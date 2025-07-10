"use server";

import { Roles } from "@/types/globals";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function setRole(formData: FormData) {
  const { sessionClaims } = await auth();
  if (sessionClaims?.metadata.role !== "Admin")
    throw new Error("Not Authorized");
  const client = await clerkClient();

  const role = formData.get("role") as Roles;
  const id = formData.get("id") as string;
  try {
    await client.users.updateUser(id, {
      publicMetadata: { role },
    });
    revalidatePath("/admin");
  } catch {
    throw new Error("failed to update user role");
  }
}

export async function removeRole(formData: FormData) {
  const { sessionClaims } = await auth();
  if (sessionClaims?.metadata.role !== "Admin")
    throw new Error("Not Authorized");
  const client = await clerkClient();

  const id = formData.get("id") as string;
  try {
    await client.users.updateUser(id, {
      publicMetadata: { role: null },
    });
    revalidatePath("/admin");
  } catch {
    throw new Error("failed to remove role");
  }
}
