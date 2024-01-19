import React from "react";
import dynamic from "next/dynamic";
const AuthForm = dynamic(() => import("../../src/components/auth/auth-form"), {
  ssr: false,
});

function Index() {
  return (
    <>
      <AuthForm />
    </>
  );
}

export default Index;
