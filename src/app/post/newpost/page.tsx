import { NewPostForm } from "@/components/newpostform/newpostform";

export default async function Page() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <div className="box">
        <NewPostForm></NewPostForm>
      </div>
    </div>
  );
}
