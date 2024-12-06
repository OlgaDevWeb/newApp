"use client";

import { creatPost } from "./ations";

const NewPostForm = () => {
  return (
    <>
      <form className="mainf" action={creatPost} style={{ width: "100%" }}>
        <h2 className="textbold">Новый отзыв</h2>
        <input
          type="text"
          placeholder="Тема "
          style={{ width: "90%", padding: "20px" }}
          name="title"
          required
        />
        <textarea
          placeholder="Напишите свое мнение о приложении, критика, предложения по улучшению, впечатления, Было ли полезно"
          name="body"
          style={{
            width: "90%",
            height: "60vh",
            padding: "20px",
            fontSize: "15px",
          }}
        ></textarea>
        <button type="submit" value="Add post">
          Добавить отзыв
        </button>
      </form>
    </>
  );
};
export { NewPostForm };
