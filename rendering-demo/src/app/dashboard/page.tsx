"use client";

import React, { ChangeEvent, useState } from "react";

const Dashboard = () => {
  const [name, setName] = useState<string>("");
  console.log("client component");

  return (
    <div>
      <h1>Dashboard Page</h1>
      <input
        placeholder="name"
        value={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      />
      <p>Welcome {name} !</p>
    </div>
  );
};

export default Dashboard;
