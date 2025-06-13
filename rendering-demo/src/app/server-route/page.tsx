import React from "react";
import { serverSideFunction } from "@/utils/server-utils";
// import { clientSideFunction } from "@/utils/client-utils";

const ServerRoute = () => {
  const result = serverSideFunction();
  // const clientResult = clientSideFunction();
  return <div>ServerRoute {result}</div>;
};

export default ServerRoute;
