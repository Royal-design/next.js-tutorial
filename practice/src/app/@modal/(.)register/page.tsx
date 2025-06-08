import Login from "@/components/auth/Login";
import AuthModal from "@/components/Modal";
import React from "react";

const RegisterModal = () => {
  return (
    <AuthModal
      title="Register"
      description="Enter your registration details"
      content={<Login />}
    />
  );
};

export default RegisterModal;
