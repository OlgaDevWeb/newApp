"use client";
import { createUser } from "@/app/reg/actions";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

type Tprops = {
  act: Dispatch<SetStateAction<boolean>>;
};

const RegForm = ({ act }: Tprops) => {
  return (
    <>
      <form className={"mainf"} action={createUser}>
        <p className="textbold">e-mail:</p>
        <input type="email" name="email" required />
        <p className="textbold">пароль:</p>
        <input type="password" name="name" required />
        <button type="submit">Зарегистрироваться</button>
        <p className="textbold">Уже есть аккаунт?</p>
      </form>
      <button onClick={() => act(true)}>Войти</button>
    </>
  );
};
export { RegForm };
