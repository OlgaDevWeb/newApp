"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Dispatch, FormEventHandler, SetStateAction } from "react";

type Tprops = {
  act: Dispatch<SetStateAction<boolean>>;
};

const SignInForm = ({ act }: Tprops) => {
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("name"),
      redirect: false,
    });
    if (res && !res.error) {
      router.push("/profile");
    } else {
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mainf">
      <p className="textbold">e-mail:</p>
      <input type="email" name="email" required />
      <p className="textbold">пароль:</p>
      <input type="password" name="name" required />

      <button type="submit">Войти</button>
      <p className="textbold">Еще не зарегистрированы?</p>
      <button onClick={() => act(false)}>Регистрация</button>
    </form>
  );
};
export { SignInForm };
/*<form onSubmit={handleSubmit} className="mainf">
      <p className="textbold">e-mail:</p>
      <input type="email" name="email" required />
      <p className="textbold">пароль:</p>
      <input type="password" name="name" required />

      <button type="submit">Войти</button>
      <p className="textbold">Еще не зарегистрированы?</p>
      <Link href={"/reg"}>Регистрация</Link>
    </form>*/
