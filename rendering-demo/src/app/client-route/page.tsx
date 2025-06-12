"use client";
import { serverSideFunction } from "@/utils/server-utils";

const ClientRoute = () => {
  const result = serverSideFunction();
  return <div>ClientRoute {result}</div>;
};

export default ClientRoute;
