"use client";

import { useTheme } from "@/components/theme-provider";
import { clientSideFunction } from "@/utils/client-utils";
import React from "react";

const AboutPage = () => {
  const { color } = useTheme();
  const result = clientSideFunction();
  console.log("this is server component");

  return (
    <div>
      <h1 style={{ color: color.secondary }}>this is about color</h1>
      <p>{result}</p>
    </div>
  );
};

export default AboutPage;
