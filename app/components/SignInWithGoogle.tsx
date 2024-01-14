"use client";
import { signIn } from "next-auth/react";

export default function SignInWithGoogle() {
  return (
    <button
      onClick={() =>
        signIn("google", {
          callbackUrl: `${window.location.origin}`,
          redirect: false,
        })
      }
      className="mt-6"
     
    >
      Login with google 
    </button>
  );
}