"use client";
import { createUser } from "@/app/registation/actions";
import Link from "next/link";

const RegForm = () => {
  return (
    <form className={"mainf"} action={createUser}>
      <p className="textbold">e-mail:</p>
      <input type="email" name="email" required />
      <p className="textbold">пароль:</p>
      <input type="password" name="name" required />
      <button type="submit">Зарегистрироваться</button>
      <p className="textbold">Уже есть аккаунт?</p>
      <Link href={"/api/auth/signin"}>Войти</Link>
    </form>
  );
};
export { RegForm };
