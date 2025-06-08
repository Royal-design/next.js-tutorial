import Login from "@/components/auth/Login";
import AuthModal from "@/components/Modal";
import React from "react";

const LoginDialog = () => {
  return (
    <div>
      <AuthModal
        title="login"
        description="enter your credntial"
        content={<Login />}
      />
    </div>
  );
};

export default LoginDialog;
