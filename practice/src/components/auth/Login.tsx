import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="grid gap-4 py-4">
      {/* Add your actual login form fields here */}
      <div className="grid grid-cols-4 items-center gap-4">
        <label htmlFor="email" className="text-right">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="col-span-3 rounded border p-2"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <label htmlFor="password" className="text-right">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="col-span-3 rounded border p-2"
        />
      </div>

      <Link href="/register">Register</Link>
    </div>
  );
};

export default Login;
