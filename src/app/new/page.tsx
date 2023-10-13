import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

const createTodo = async (data: FormData) => {
  "use server"
  const title = data.get("title")?.valueOf()
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Input")
  }

  await prisma.todo.create({
    data: {
      title,
      complete: false
    }
  })
  redirect("/")
}

const Page = () => {
  return (
    <>
      <header className="mb-5 flex items-center justify-between">
        <h1 className="text-2xl">New</h1>
      </header>
      <form action={createTodo} className="flex flex-col gap-2">
        <input
          type="text"
          name="title"
          className="mb-3 border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <div className="flex items-center gap-3 justify-end">
          <Link
            href=".."
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
};

export default Page;
