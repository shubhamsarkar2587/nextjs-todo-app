import Link from "next/link";
import { prisma } from "@/db";
import TodoItem from "@/components/TodoItem";

const getTodos = () => {
  return prisma.todo.findMany()
};

export default async function Home() {
  const todos = await getTodos();

  return (
    <>
      <header className="mb-5 flex items-center justify-between">
        <h1 className="text-2xl">Todos</h1>
        <Link
          href="/new"
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        >
          New
        </Link>
      </header>
      <ul>
        {
          todos.map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))
        }
      </ul>
    </>
  );
}
