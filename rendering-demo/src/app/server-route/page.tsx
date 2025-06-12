import React from "react";
import { serverSideFunction } from "@/utils/server-utils";

const ServerRoute = () => {
  const result = serverSideFunction();
  return <div>ServerRoute {result}</div>;
};

export default ServerRoute;
