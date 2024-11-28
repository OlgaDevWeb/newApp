"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const GoogleButton = () => {
  const searchParam = useSearchParams();
  const callbackUrl = searchParam.get("callbackUrl") || "/profile";

  return (
    <button onClick={() => signIn("google", { callbackUrl })}>
      Войти с Google
    </button>
  );
};

export { GoogleButton };
