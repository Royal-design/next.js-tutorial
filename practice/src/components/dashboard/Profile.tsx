"use client";

import { useAuth, useUser } from "@clerk/nextjs";
import React from "react";

export const Profile = () => {
  const { isLoaded, sessionId, userId, getToken } = useAuth();
  // const {} = useUser()
  if (!isLoaded || !userId) return null;
  return <div>Profile</div>;
};
