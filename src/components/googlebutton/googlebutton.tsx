import { signIn } from "@/configs/auth";
import { redirect } from "next/navigation";
import { AuthError } from "next-auth";

export default function GoogleButton() {
  return (
    <form
      action={async () => {
        "use server";
        try {
          await signIn("google", {
            redirectTo: "/",
          });
        } catch (error) {
          // Signin can fail for a number of reasons, such as the user
          // not existing, or the user not having the correct role.
          // In some cases, you may want to redirect to a custom error
          if (error instanceof AuthError) {
            return redirect("/");
          }

          // Otherwise if a redirects happens Next.js can handle it
          // so you can just re-thrown the error and let Next.js handle it.
          // Docs:
          // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
          throw error;
        }
      }}
      /*action={async () => {
        "use server";
        await signIn("google");
      }}*/
    >
      <button type="submit">Войти с Google</button>
    </form>
  );
}

/*import { signIn } from "next-auth/react";
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

export { GoogleButton };*/
